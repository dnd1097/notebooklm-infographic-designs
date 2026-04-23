styles.push({
  slug: 'architectural-blueprint-infographic',
  name: 'Architectural Blueprint Infographic',
  category: 'Technical / Blueprint',
  tags: ['schematic','architectural','process mapping','technical','educational'],
  image: 'assets/architectural-blueprint-infographic.png',
  source: 'user-provided',
  summary: 'Architectural schematic infographic with technical line diagrams.',
  prompt: `Overall Design Settings:

Tone: "Analytical, Precise, Pedagogical, Structured, Professional"

Visual Identity:

Background Color: "#F9F9F9"

Text Color: "#222222"

Accent Color: "#5B9BD5"

Secondary Colors: ["#C0392B", "#EAF4FC", "#888888", "#FFFFFF", "#D3D3D3"]

Image Style:

Features: "Technical line art, dimension markers, architectural floor plan symbols, isometric diagrams, directional flow arrows"

Texture: "Flat digital paper, smooth vector lines, schematic cleanliness"

Composition: "Split-screen comparative layout, hierarchical vertical flow, balanced whitespace, grid-aligned diagrams"

Lighting: "Flat diagrammatic lighting, consistent uniform visibility, no gradients"

Line Weight: "Thin, precise strokes"

Typography:

Heading: "Bold Sans-Serif"

Body Font: "Medium weight Sans-Serif"`
});

styles.push({
  slug: 'heavy-impact-retro-infographic',
  name: 'Heavy Impact Retro Infographic',
  category: 'Retro / Pop',
  tags: ['retro pop','american diner','vintage comic','split-screen','americana'],
  image: 'assets/heavy-impact-retro-infographic.png',
  source: 'user-provided',
  summary: 'Retro comic split-screen infographic.',
  prompt: `Overall Design Settings:

Tone: "Energetic, Nostalgic, Instructional, Playful, Bold"

Visual Identity:

Background Color: "#9ED9CC"

Text Color: "#111111"

Accent Color: "#E84E45"

Image Style:

Features: "Split-screen layout, comic illustrations, speech bubbles, chrome arrows"

Texture: "Halftone patterns"

Composition: "Bilateral symmetry"

Lighting: "Flat illustrative lighting"`
});

styles.push({
  slug: 'playful-decorative-infographic',
  name: 'Playful Decorative Infographic',
  category: 'Playful / Kawaii',
  tags: ['kawaii','pastel','yume-kawaii','educational','pop art'],
  image: 'assets/playful-decorative-infographic.png',
  source: 'user-provided',
  summary: 'Decorative pastel kawaii infographic.',
  prompt: `Overall Design Settings:

Tone: "Playful, whimsical, encouraging"

Visual Identity:

Background Color: "#FFD1DC"

Text Color: "#222222"

Accent Color: "#9D84B6"

Image Style:

Features: "Rainbow gradients, cute mascots, decorative icons"

Texture: "Soft gradients"

Composition: "Central hierarchy"

Lighting: "Bright diffuse"`
});

styles.push({
  slug: 'playful-minecraftesque-infographic',
  name: 'Minecraft-style Process Infographic',
  category: 'Playful / Gamified',
  tags: ['isometric','voxel art','pastel','gamification','educational'],
  image: 'assets/playful-minecraftesque-infographic.png',
  source: 'user-provided',
  summary: 'Voxel-style gamified infographic.',
  prompt: `Overall Design Settings:

Tone: "Playful, accessible, structured"

Visual Identity:

Background Color: "#E8F0FE"

Text Color: "#5D4037"

Accent Color: "#69F0AE"

Image Style:

Features: "Isometric voxel characters, floating platforms"

Composition: "Diagonal progression"

Lighting: "Soft ambient"`
});

styles.push({
  slug: 'radial-infographic',
  name: 'Radial Process Infographic',
  category: 'Corporate / Clean',
  tags: ['corporate','infographic','process flow','clean design','radial layout'],
  image: 'assets/radial-infographic.png',
  source: 'user-provided',
  summary: 'Radial structured process infographic.',
  prompt: `Overall Design Settings:

Tone: "Professional, Structured, Instructional, Clear"

Visual Identity:

Background Color: "#FFFFFF"

Text Color: "#333333"

Accent Color: "#008B8B"

Image Style:

Features: "Radial timeline, segmented arcs"

Composition: "Circular layout"

Lighting: "Flat"`
});

if (!categories.includes('Technical / Blueprint')) categories.push('Technical / Blueprint');
if (!categories.includes('Retro / Pop')) categories.push('Retro / Pop');
if (!categories.includes('Playful / Kawaii')) categories.push('Playful / Kawaii');
if (!categories.includes('Playful / Gamified')) categories.push('Playful / Gamified');
if (!categories.includes('Corporate / Clean')) categories.push('Corporate / Clean');

categories.sort();

['schematic','architectural','retro pop','kawaii','voxel art','radial layout'].forEach(tag => {
  if (!allTags.includes(tag)) allTags.push(tag);
});
allTags.sort();