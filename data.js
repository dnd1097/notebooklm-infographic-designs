const styles = [
  {
    slug: 'retro-comic-blueprint',
    name: 'Retro Comic Blueprint',
    category: 'Retro / Comic',
    tags: ['comic', 'halftone', 'heroic'],
    image: 'https://preview.redd.it/7x-fantastic-notebooklm-infographics-styles-set-v0-yk677v1gvkcg1.png?auto=webp&format=png&s=892bddb921b9a4a58ec3c3fa433fc162edc711e4&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9e3kw/7x_fantastic_notebooklm_infographics_styles_set/',
    summary: 'Bold pop-art infographic with thick outlines, Ben-Day dots, speech bubbles, and explosive comic energy.',
    prompt: `Create a high-fidelity infographic in a retro comic-book style. Use a bright yellow background, black ink outlines, red accent bursts, halftone shading, speech bubbles, action panels, and dynamic motion lines. Keep the composition energetic and highly legible, with an educational infographic structure rather than a poster.`
  },
  {
    slug: 'engineering-blueprint-schematic',
    name: 'Engineering Blueprint Schematic',
    category: 'Technical / Blueprint',
    tags: ['blueprint', 'schematic', 'industrial'],
    image: 'https://preview.redd.it/7x-fantastic-notebooklm-infographics-styles-set-v0-qbpa4d7rvkcg1.png?auto=webp&format=png&s=2ab2315cd99726be5d75f41c6bd8aa008809a982&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9e3kw/7x_fantastic_notebooklm_infographics_styles_set/',
    summary: 'Exploded-view technical aesthetic with blueprint lines, modular callouts, and precise schematic labeling.',
    prompt: `Create a high-fidelity infographic matching an engineering blueprint schematic. Use a dark blueprint ground, crisp vector line work, exploded artifact views, modular data clusters, technical callouts, and condensed sans-serif typography. Make it feel industrial, precise, and instructional.`
  },
  {
    slug: 'thermal-insight-tech',
    name: 'Thermal Insight Tech',
    category: 'High-Tech / Cyber',
    tags: ['thermal', 'cyber', 'surveillance'],
    image: 'https://preview.redd.it/7x-fantastic-notebooklm-infographics-styles-set-v0-u57emw5uvkcg1.png?auto=webp&format=png&s=fa838f975213bafa3d1e3f5a83e1c74f8c492587&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9e3kw/7x_fantastic-notebooklm-infographics-styles-set/',
    summary: 'Infrared-like palette, neon gradients, and HUD-style instrumentation focused on futuristic technical clarity.',
    prompt: `Create a high-fidelity infographic with a thermal imaging / cyber surveillance look. Use dark background fields, emissive heat-map gradients, neon contrast, a central hero object, and symmetrical feature panels. Typography should be bold condensed uppercase. The result should feel sleek, futuristic, and analytical.`
  },
  {
    slug: 'neumorphic-tech-schematic',
    name: 'Neumorphic Tech Schematic',
    category: 'Modern UI',
    tags: ['neumorphism', 'corporate tech', 'clean'],
    image: 'https://preview.redd.it/7x-fantastic-notebooklm-infographics-styles-set-v0-apmgajqxvkcg1.png?auto=webp&format=png&s=e701dcb743d7590a0653c438a49fbe07be41911b&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9e3kw/7x_fantastic_notebooklm_infographics_styles_set/',
    summary: 'Soft-shadowed cards, rounded geometry, and a symmetric data-viz layout with a clean enterprise feel.',
    prompt: `Create a high-fidelity infographic in a neumorphic tech schematic style. Use soft shadows, rounded panels, subtle depth, symmetrical layout, center-weighted hierarchy, and clean condensed typography. Keep the design minimalist, polished, and corporate-tech rather than playful.`
  },
  {
    slug: 'sumi-e-tech-scroll',
    name: 'Sumi-e Tech Scroll',
    category: 'Artistic / Cultural',
    tags: ['ink wash', 'parchment', 'east asian'],
    image: 'https://preview.redd.it/7x-fantastic-notebooklm-infographics-styles-set-v0-wqiknfn2wkcg1.png?auto=webp&format=png&s=4f233530e1712b1f5a029b6b7c94af4cdc49dbd9&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9e3kw/7x_fantastic_notebooklm_infographics_styles_set/',
    summary: 'Ink-wash fusion of classical paper texture and modern technical explanation.',
    prompt: `Create a high-fidelity infographic blending sumi-e ink wash and technical explanation. Use parchment texture, restrained color, elegant serif typography, brush-like forms, and disciplined diagram labels. The piece should feel timeless, refined, and culturally fused rather than glossy digital.`
  },
  {
    slug: 'steampunk-nebula-explorer',
    name: 'Steampunk Nebula Explorer',
    category: 'Vintage / Sci-Fi',
    tags: ['steampunk', 'retro-futurism', 'space'],
    image: 'https://preview.redd.it/7x-fantastic-notebooklm-infographics-styles-set-v0-wx9opco7wkcg1.png?auto=webp&format=png&s=01356243803563f52a23fdff60951ea1e5a68fbe&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9e3kw/7x_fantastic_notebooklm_infographics_styles_set/',
    summary: 'Victorian sci-fi collage with brass machinery, space motifs, and dramatic warm-versus-cool contrast.',
    prompt: `Create a high-fidelity infographic in a steampunk retro-futurist space style. Use brass mechanical motifs, pipes, gears, vintage condensed slab-serif typography, layered collage structure, and cinematic warm rim lighting against a cool cosmic setting. Keep the content clearly instructional.`
  },
  {
    slug: 'pcb-schematic-architecture',
    name: 'PCB Schematic Architecture',
    category: 'Technical / Blueprint',
    tags: ['pcb', 'electronics', 'retro-futurism'],
    image: 'https://preview.redd.it/7x-fantastic-notebooklm-infographics-styles-set-v0-i2l5579awkcg1.png?auto=webp&format=png&s=08b2c29a95dbb738366368392d91d203a8d3ef0f&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9e3kw/7x_fantastic_notebooklm_infographics_styles_set/',
    summary: 'Printed-circuit composition using copper-trace connectors and IC-like nodes.',
    prompt: `Create a high-fidelity infographic with a PCB schematic architecture look. Use a deep green board-like background, copper trace connectors, integrated-circuit nodes, electronic labeling, and structured data blocks. Typography should feel technical and compact, with strong diagrammatic clarity.`
  },
  {
    slug: 'psychedelic-flower-power',
    name: 'Psychedelic Flower Power',
    category: 'Retro / Maximalist',
    tags: ['70s', 'psychedelic', 'flower power'],
    image: 'https://preview.redd.it/12-fabulous-notebooklm-infographic-slide-deck-graphic-styles-v0-7qz3mw3ql3dg1.png?auto=webp&crop=smart&s=f5a83fca94dd767830b2aec9d3a46862a6b237b8&width=640',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qbonx8/12_fabulous_notebooklm_infographic_slide_deck/',
    summary: 'Wavy frames, rainbow color, mushrooms, daisies, bubble lettering, and playful educational maximalism.',
    prompt: `Create an infographic in a psychedelic 70s flower-power style. Use wavy rainbow borders, peace-sign and mushroom motifs, bold black outlines, radiant warm color fields, bubble-style headings, and fluid compartmentalized framing instead of rigid grids. Keep it energetic, whimsical, and highly readable.`
  },
  {
    slug: 'versus-anime-hud',
    name: 'Versus Anime HUD',
    category: 'Pop Culture / Gaming',
    tags: ['anime', 'hud', 'versus'],
    image: 'https://preview.redd.it/12-fabulous-notebooklm-infographic-slide-deck-graphic-styles-v0-q1mntubnl3dg1.png?auto=webp&crop=smart&s=b0e0ef41ab3926eafb1c8a39c054370afce29fe0&width=640',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qbonx8/12_fabulous_notebooklm_infographic_slide_deck/',
    summary: 'Competitive split-screen treatment with game HUD bars, speed lines, elemental contrast, and manga drama.',
    prompt: `Create an infographic with a fighting-game versus HUD aesthetic. Use a split-screen layout, speed lines, cel-shaded illustration, health-bar style interface elements, gradient impact text, and strong warm-vs-cool contrast. The tone should be high-octane, competitive, and still function as an educational infographic.`
  },
  {
    slug: 'denim-patchwork-manual',
    name: 'Denim Patchwork Manual',
    category: 'Textured / Craft',
    tags: ['denim', 'skeuomorphic', 'craft'],
    image: 'https://preview.redd.it/12-fabulous-notebooklm-infographic-slide-deck-graphic-styles-v0-88d6vu3ql3dg1.png?auto=webp&crop=smart&s=1205a3d7a7a48b4281739218b63a9487d2dea186&width=640',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qbonx8/12_fabulous_notebooklm_infographic_slide_deck/',
    summary: 'Embroidery, rivets, fabric patches, and stitched arrows create a tactile workshop-manual look.',
    prompt: `Create an infographic with a tactile denim patchwork style. Use realistic denim fabric, stitched labels, embroidered headings, copper rivets, frayed edges, and modular compartments connected by sewn arrows. The result should feel handcrafted, durable, and instructional.`
  },
  {
    slug: 'ancient-papyrus-systems',
    name: 'Ancient Papyrus Systems',
    category: 'Historical / Allegorical',
    tags: ['papyrus', 'egyptian', 'historical'],
    image: 'https://preview.redd.it/12-fabulous-notebooklm-infographic-slide-deck-graphic-styles-v0-9ngv5vbnl3dg1.png?auto=webp&crop=smart&s=6f03a6cbd55483d86263a88fdc1ed7d02335b206&width=640',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qbonx8/12_fabulous-notebooklm-infographic-slide_deck/',
    summary: 'Ancient-world iconography, papyrus texture, framed panels, and technical ideas translated into allegorical visual language.',
    prompt: `Create an infographic in an ancient papyrus / Egyptian systems style. Use aged parchment texture, flat profile figures, hieroglyphic border framing, geometric panels, and symbolic objects standing in for technical concepts. Keep the layout instructional and organized, with dark ink outlines and modern readable captions.`
  },
  {
    slug: 'art-deco-noir-evaluation',
    name: 'Art Deco Noir Evaluation',
    category: 'Luxury / Art Deco',
    tags: ['art deco', 'gatsby', 'noir'],
    image: 'https://preview.redd.it/12-fabulous-notebooklm-infographic-slide-deck-graphic-styles-v0-32bomv3ql3dg1.png?auto=webp&crop=smart&s=7adaeb5f7a598922cde3350418eee76a96ce73c8&width=640',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qbonx8/12_fabulous_notebooklm_infographic_slide_deck/',
    summary: 'Black-and-gold luxury composition with ornamental borders, cinematic contrast, and symmetrical metaphorical framing.',
    prompt: `Create an infographic in luxurious Art Deco noir style. Use black velvet-like background, metallic gold geometry, symmetrical framing, elegant high-contrast serif headings, and a central metaphor supported by flanking panels. The design should feel opulent, cinematic, and authoritative.`
  },
  {
    slug: 'isometric-textbook-diagram',
    name: 'Isometric Textbook Diagram',
    category: 'Educational / Diagrammatic',
    tags: ['isometric', 'textbook', 'data visualization'],
    image: 'https://preview.redd.it/12-fabulous-notebooklm-infographic-slide-deck-graphic-styles-v0-mp85uvbnl3dg1.png?auto=webp&crop=smart&s=59b2db232da8365609776cf15f64fdf00c8172e0&width=640',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qbonx8/12_fabulous_notebooklm-infographic-slide_deck/',
    summary: 'Clean split-layout with explanatory text on one side and restrained isometric diagrams on the other.',
    prompt: `Create an educational infographic with textbook-clean isometric diagrams. Use soft neutral colors, dashed curve arrows, thin line work, hierarchical tree nodes, and an orderly two-column composition with explanatory text on the left and diagrams on the right.`
  },
  {
    slug: 'pastel-knolling-comparison',
    name: 'Pastel Knolling Comparison',
    category: 'Modern Minimal',
    tags: ['flat lay', 'pastel', 'split screen'],
    image: 'https://preview.redd.it/12-fabulous-notebooklm-infographic-slide-deck-graphic-styles-v0-d8k5re5ql3dg1.png?auto=webp&crop=smart&s=898e5362f757607baf6020a05016d80c7b2f558e&width=640',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qbonx8/12_fabulous_notebooklm_infographic_slide_deck/',
    summary: 'Top-down stationary flat lay with clean object arrangement and a problem-vs-solution comparison structure.',
    prompt: `Create an infographic as a pastel flat-lay knolling comparison. Use photoreal stationery, a top-down composition, soft diffuse shadows, careful alignment, and a 50/50 split-screen visual metaphor for problem vs solution. Keep typography clean and labels integrated into objects.`
  },
  {
    slug: 'holographic-isometric-flow',
    name: 'Holographic Isometric Flow',
    category: 'High-Tech / Cyber',
    tags: ['holographic', 'isometric', 'futuristic ui'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-ohbg124z1pcg1.png?auto=webp&format=png&s=a565e58b2af36d965dbc5c0118196bdd4ff7a846&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qbonx8/12_fabulous_notebooklm_infographic_slide_deck/',
    summary: 'Floating HUD panels, wireframe brains, and glowing data streams in layered isometric space.',
    prompt: `Create an infographic with a holographic isometric UI aesthetic. Use deep dark background, neon cyan accents, floating screens, wireframe models, layered depth, volumetric glow, and compact technical typography. The tone should feel visionary, sophisticated, and instructional.`
  },
  {
    slug: 'ghibli-narrative-map',
    name: 'Whimsical Narrative Map',
    category: 'Editorial / Illustration',
    tags: ['whimsical', 'watercolor', 'narrative'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-hk13pz1htpcg1.png?auto=webp&format=png&s=e7d18123cd34274c697d0eb4067ed2755cf1ad99&width=1677',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qbonx8/12_fabulous_notebooklm_infographic_slide_deck/',
    summary: 'Soft watercolor storytelling path with scenic collage and charming illustration-led structure.',
    prompt: `Create an infographic as a whimsical watercolor narrative map. Use soft illustrative scenes, organic pathways, gentle color transitions, storybook framing, and clear section clusters that guide the eye from left to right. It should feel magical and editorial, but remain functionally informative.`
  },
  {
    slug: 'sports-motion-playbook',
    name: 'Sports Motion Playbook',
    category: 'Pop Culture / Motion',
    tags: ['sports', 'motion lines', 'comic'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-42cij5kd5pcg1.png?auto=webp&format=png&s=6b8ab9ea299b662a8326168656e6d710418c282b&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qbonx8/12_fabulous_notebooklm_infographic_slide_deck/',
    summary: 'Athletic action framing with speed lines, metaphor icons, and diagonal forward motion.',
    prompt: `Create an infographic that blends sports-playbook energy with comic-book motion. Use a dark arena-like background, speed lines, forced perspective, athletic figurative poses, segmented lanes, and bold scorecard-like information blocks. Maintain strong readability and instructional hierarchy.`
  },
  {
    slug: 'terminal-ascii-noir',
    name: 'Terminal ASCII Noir',
    category: 'Retro Computing',
    tags: ['ascii', 'terminal', 'pixel art'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-bkflgkwuvpcg1.png?auto=webp&format=png&s=bc8f9eeda36ef8d26a90d0a13817353cee30cb89&width=1646',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qbonx8/12_fabulous_notebooklm_infographic_slide_deck/',
    summary: 'Green-on-black terminal mood with ASCII art, scanlines, bracket frames, and hacker-era diagram aesthetics.',
    prompt: `Create an infographic in retro terminal ASCII-noir style. Use black background, phosphor-green text, amber accent highlights, monospaced console typography, pixel-art iconography, binary rain details, dashed dividers, and bracketed frame elements. Make it feel cryptic, technical, and nostalgic.`
  },
  {
    slug: 'analytical-grid-report',
    name: 'Analytical Grid Report',
    category: 'Corporate / Clean',
    tags: ['analytical', 'professional', 'grid'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-ohbg124z1pcg1.png?auto=webp&format=png&s=a565e58b2af36d965dbc5c0118196bdd4ff7a846&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9vs84/5_practical-infographic-design-styles-for/',
    summary: 'Professional, precise layout for structured analysis and pedagogical explanation.',
    prompt: `Create an infographic with an analytical, structured report aesthetic. Use a clean light background, disciplined grid, restrained blue accent, precise section dividers, and clear sans-serif typography. The design should feel professional, pedagogical, and easy to scan.`
  },
  {
    slug: 'manga-instructional-comic',
    name: 'Manga Instructional Comic',
    category: 'Retro / Comic',
    tags: ['manga', 'storytelling', 'sketchnote'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-hk13pz1htpcg1.png?auto=webp&format=png&s=e7d18123cd34274c697d0eb4067ed2755cf1ad99&width=1677',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9vs84/5-practical-infographic-design-styles-for/',
    summary: 'Expressive comic-style sequencing with lightbulbs, jagged bubbles, and mood-pattern backgrounds.',
    prompt: `Create an infographic in manga instructional-comic style. Use jagged speech bubbles, dramatic emotional iconography, brushy emphasis text, abstract mood backgrounds, and a strong sense of narrative progression. Keep the layout educational and easy to follow.`
  },
  {
    slug: 'passport-travel-archive',
    name: 'Passport Travel Archive',
    category: 'Vintage / Editorial',
    tags: ['travel', 'passport ui', 'paper texture'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-42cij5kd5pcg1.png?auto=webp&format=png&s=6b8ab9ea299b662a8326168656e6d710418c282b&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9vs84/5-practical-infographic-design-styles-for/',
    summary: 'Paper-textured archive style with travel-document cues and typography-forward layout.',
    prompt: `Create an infographic with a retro travel archive / passport UI aesthetic. Use warm paper textures, documentation motifs, stamped sections, typography-heavy hierarchy, and a carefully curated editorial layout. It should feel archival, worldly, and highly organized.`
  },
  {
    slug: 'notebook-study-sheet',
    name: 'Notebook Study Sheet',
    category: 'Handmade / Casual',
    tags: ['notebook', 'handwritten', 'study notes'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-bkflgkwuvpcg1.png?auto=webp&format=png&s=bc8f9eeda36ef8d26a90d0a13817353cee30cb89&width=1646',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9vs84/5-practical-infographic-design-styles-for/',
    summary: 'Rule-lined paper, red underlines, coffee-ring imperfections, and mixed casual handwriting.',
    prompt: `Create an infographic as a handwritten notebook study sheet. Use ruled paper background, marker headings, mixed cursive/print body text, red ink underlines, margin artifacts, and a desktop-scan feel. Make it look authentic, informal, and useful.`
  },
  {
    slug: 'bauhaus-risograph-grid',
    name: 'Bauhaus Risograph Grid',
    category: 'Editorial / Modernist',
    tags: ['bauhaus', 'risograph', 'flat design'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-decp8yu37qcg1.png?auto=webp&format=png&s=0eb1ee379d0635043f60295ffca00b73e6b4abde&width=1542',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9vs84/5-practical-infographic-design-styles-for/',
    summary: 'Modernist educational composition with bold geometry, flat color, and poster-like discipline.',
    prompt: `Create an infographic in a Bauhaus risograph style. Use geometric shapes, bold sans-serif headings, flat spot-color fields, numbered sequences, and sharp educational structure. The look should feel modernist, graphic, and highly legible.`
  },
  {
    slug: 'chalkboard-workshop-guide',
    name: 'Chalkboard Workshop Guide',
    category: 'Handmade / Classroom',
    tags: ['chalkboard', 'hand-drawn', 'educational'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-bkflgkwuvpcg1.png?auto=webp&format=png&s=bc8f9eeda36ef8d26a90d0a13817353cee30cb89&width=1646',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9vs84/5-practical-infographic-design-styles-for/',
    summary: 'Dark slate background with chalk dust, hand-drawn borders, and lively teacher-board annotations.',
    prompt: `Create an infographic as a chalkboard workshop guide. Use dark slate texture, rough chalk strokes, hand-drawn arrows, banner labels, bright highlight colors, and sketched icons. The tone should be educational, warm, and handmade.`
  },
  {
    slug: 'bento-tech-product-sheet',
    name: 'Bento Tech Product Sheet',
    category: 'Modern UI',
    tags: ['bento', 'product sheet', 'minimal tech'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-decp8yu37qcg1.png?auto=webp&format=png&s=0eb1ee379d0635043f60295ffca00b73e6b4abde&width=1542',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9vs84/5-practical-infographic-design-styles-for/',
    summary: 'Rounded bento boxes, hero product image, big metrics, and premium minimalist tech presentation.',
    prompt: `Create an infographic as a premium bento-box tech product sheet. Use a white background, rounded squircles, large display typography, specification cards, minimal icons, subtle purple gradient accents, and spacious gutters. The design should feel premium, precise, and Apple-like.`
  }
];

const categories = Array.from(new Set(styles.map(style => style.category))).sort();