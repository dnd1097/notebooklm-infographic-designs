const IMAGE_EXTENSIONS = ['png', 'jpg', 'jpeg', 'webp', 'svg'];
const PLACEHOLDER_IMAGE = 'assets/images/placeholder.svg';

function toTitleFromSlug(slug) {
  return slug
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function extractField(promptText, fieldName) {
  const regex = new RegExp(`(?:^|\\n)\\s*${fieldName}\\s*:\\s*(.+)$`, 'im');
  const match = promptText.match(regex);
  return match ? match[1].trim().replace(/^"|"$/g, '') : '';
}

function extractTags(promptText) {
  const inline = extractField(promptText, 'Tags');
  if (inline) {
    return inline
      .replace(/^\[|\]$/g, '')
      .split(',')
      .map(tag => tag.trim().replace(/^"|"$/g, ''))
      .filter(Boolean);
  }

  const categoriesLine = extractField(promptText, 'Categories');
  if (categoriesLine) {
    return categoriesLine
      .split(',')
      .map(tag => tag.trim().replace(/^"|"$/g, ''))
      .filter(Boolean);
  }

  return [];
}

function inferCategory(promptText) {
  const text = promptText.toLowerCase();
  if (text.includes('blueprint')) return 'Technical / Blueprint';
  if (text.includes('industrial')) return 'Technical / Industrial';
  if (text.includes('retro') || text.includes('comic')) return 'Retro / Pop';
  if (text.includes('kawaii') || text.includes('playful')) return 'Playful';
  if (text.includes('corporate')) return 'Corporate / Clean';
  return 'General';
}

function inferRepoContext() {
  const { hostname, pathname } = window.location;
  if (hostname.endsWith('github.io')) {
    const owner = hostname.split('.')[0];
    const repo = pathname.split('/').filter(Boolean)[0] || '';
    return { owner, repo };
  }
  return { owner: '', repo: '' };
}

function getFileExtension(fileName) {
  const match = fileName.match(/\.([^.]+)$/);
  return match ? match[1].toLowerCase() : '';
}

async function fetchJson(url) {
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Failed to fetch ${url}`);
  return response.json();
}

async function listAssetFilesFromGitHub(path) {
  const { owner, repo } = inferRepoContext();
  if (!owner || !repo) return [];

  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const files = await fetchJson(apiUrl);
  if (!Array.isArray(files)) return [];

  return files
    .filter(file => file.type === 'file' && file.name !== 'index.json')
    .map(file => file.name);
}

async function listPromptFiles() {
  try {
    const files = await listAssetFilesFromGitHub('assets/prompts');
    if (files.length) return files.filter(name => name.endsWith('.txt'));
  } catch (error) {
    console.warn('GitHub API prompt listing failed, using fallback manifest.', error);
  }

  try {
    const manifest = await fetchJson('assets/prompts/index.json');
    return Array.isArray(manifest) ? manifest.filter(name => name.endsWith('.txt')) : [];
  } catch (error) {
    console.warn('Prompt manifest fallback unavailable.', error);
  }

  return [];
}

async function listImageFiles() {
  try {
    const files = await listAssetFilesFromGitHub('assets/images');
    if (files.length) return files;
  } catch (error) {
    console.warn('GitHub API image listing failed, using fallback manifest.', error);
  }

  try {
    const manifest = await fetchJson('assets/images/index.json');
    return Array.isArray(manifest) ? manifest : [];
  } catch (error) {
    console.warn('Image manifest fallback unavailable.', error);
  }

  return [];
}

async function listThumbnailFiles() {
  try {
    const manifest = await fetchJson('assets/images/thumbs/index.json');
    return Array.isArray(manifest) ? manifest : [];
  } catch (error) {
    console.warn('Thumbnail manifest unavailable, using full images.', error);
  }

  return [];
}

async function loadPrompt(fileName) {
  const slug = fileName.replace(/\.txt$/i, '');
  const promptPath = `assets/prompts/${fileName}`;
  const promptResponse = await fetch(promptPath, { cache: 'no-store' });
  if (!promptResponse.ok) {
    console.warn(`Skipping missing prompt: ${promptPath}`);
    return null;
  }

  const prompt = await promptResponse.text();
  const tone = extractField(prompt, 'Tone') || extractField(prompt, 'Overall Tone') || 'General';
  const tags = extractTags(prompt);

  return { slug, promptPath, prompt, tone, tags };
}

export async function loadStylesFromAssets() {
  const [promptFiles, imageFiles, thumbnailFiles] = await Promise.all([
    listPromptFiles(),
    listImageFiles(),
    listThumbnailFiles()
  ]);
  const imageSet = new Set(imageFiles.filter(file => file !== 'index.json'));
  const thumbnailSet = new Set(thumbnailFiles.filter(file => file !== 'index.json'));

  const styleCandidates = await Promise.all(promptFiles.map(fileName => loadPrompt(fileName)));
  const styles = styleCandidates
    .filter(Boolean)
    .map(({ slug, promptPath, prompt, tone, tags }) => {
      const matchedImage = IMAGE_EXTENSIONS
        .map(ext => `${slug}.${ext}`)
        .find(candidate => imageSet.has(candidate));
      const imageExtension = matchedImage ? getFileExtension(matchedImage) : '';
      const hasRenderedPreview = Boolean(matchedImage) && imageExtension !== 'svg';

      return {
        slug,
        name: toTitleFromSlug(slug),
        tone,
        tags,
        category: inferCategory(prompt),
        image: matchedImage ? `assets/images/${matchedImage}` : PLACEHOLDER_IMAGE,
        hasImage: hasRenderedPreview,
        hasRenderedPreview,
        promptPath,
        prompt,
        summary: `${tone} infographic style.`,
        thumbnail: thumbnailSet.has(`${slug}.svg`) ? `assets/images/thumbs/${slug}.svg` : null
      };
    });

  return styles.sort((a, b) => a.name.localeCompare(b.name));
}
