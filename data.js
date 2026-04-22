const styles = [
  {
    slug: 'psychedelic-flower-power',
    name: 'Psychedelic Flower Power',
    category: 'Retro / Maximalist',
    tags: ['70s', 'psychedelic', 'flower power'],
    image: 'https://preview.redd.it/12-fabulous-notebooklm-infographic-slide-deck-graphic-styles-v0-7qz3mw3ql3dg1.png?auto=webp&crop=smart&s=f5a83fca94dd767830b2aec9d3a46862a6b237b8&width=640',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qbonx8/12_fabulous_notebooklm_infographic_slide_deck/',
    summary: 'Wavy rainbow borders, peace signs, daisies, mushrooms, and bold bubble typography.',
    prompt: 'Create a NotebookLM infographic in psychedelic 70s flower-power style with wavy rainbow borders, peace symbols, mushrooms, daisies, bold black outlines, fluid compartment frames, and chunky bubble headings.'
  },
  {
    slug: 'versus-anime-hud',
    name: 'Versus Anime HUD',
    category: 'Pop Culture / Gaming',
    tags: ['anime', 'hud', 'versus'],
    image: 'https://preview.redd.it/12-fabulous-notebooklm-infographic-slide-deck-graphic-styles-v0-q1mntubnl3dg1.png?auto=webp&crop=smart&s=b0e0ef41ab3926eafb1c8a39c054370afce29fe0&width=640',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qbonx8/12_fabulous_notebooklm_infographic_slide_deck/',
    summary: 'Split-screen competitive layout with manga energy, speed lines, and game UI framing.',
    prompt: 'Create a NotebookLM infographic with a fighting-game versus HUD look: split-screen composition, speed lines, cel-shaded illustration, impact bursts, health-bar UI, strong warm-vs-cool contrast, and high-energy manga typography.'
  },
  {
    slug: 'denim-patchwork-manual',
    name: 'Denim Patchwork Manual',
    category: 'Textured / Craft',
    tags: ['denim', 'skeuomorphic', 'craft'],
    image: 'https://preview.redd.it/12-fabulous-notebooklm-infographic-slide-deck-graphic-styles-v0-88d6vu3ql3dg1.png?auto=webp&crop=smart&s=1205a3d7a7a48b4281739218b63a9487d2dea186&width=640',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qbonx8/12_fabulous_notebooklm_infographic_slide_deck/',
    summary: 'Realistic denim fabric, stitched labels, frayed edges, and copper rivets.',
    prompt: 'Create a NotebookLM infographic in tactile denim patchwork style with realistic denim texture, stitched labels, embroidered headings, copper rivets, frayed borders, and sewn directional arrows.'
  },
  {
    slug: 'ancient-papyrus-systems',
    name: 'Ancient Papyrus Systems',
    category: 'Historical / Allegorical',
    tags: ['papyrus', 'egyptian', 'historical'],
    image: 'https://preview.redd.it/12-fabulous-notebooklm-infographic-slide-deck-graphic-styles-v0-9ngv5vbnl3dg1.png?auto=webp&crop=smart&s=6f03a6cbd55483d86263a88fdc1ed7d02335b206&width=640',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qbonx8/12_fabulous_notebooklm_infographic_slide_deck/',
    summary: 'Papyrus grain, hieroglyphic borders, flat profile figures, and symbolic technical storytelling.',
    prompt: 'Create a NotebookLM infographic in ancient papyrus / Egyptian systems style with aged parchment texture, flat profile figures, hieroglyphic borders, framed panels, dark ink outlines, and symbolic objects representing technical concepts.'
  },
  {
    slug: 'art-deco-noir-evaluation',
    name: 'Art Deco Noir Evaluation',
    category: 'Luxury / Art Deco',
    tags: ['art deco', 'gatsby', 'noir'],
    image: 'https://preview.redd.it/12-fabulous-notebooklm-infographic-slide-deck-graphic-styles-v0-32bomv3ql3dg1.png?auto=webp&crop=smart&s=7adaeb5f7a598922cde3350418eee76a96ce73c8&width=640',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qbonx8/12_fabulous_notebooklm_infographic_slide_deck/',
    summary: 'Black-and-gold cinematic luxury with ornate frames and symmetrical structure.',
    prompt: 'Create a NotebookLM infographic in luxurious Art Deco noir style with black velvet background, metallic gold geometry, symmetrical framing, high-contrast serif headings, ornamental borders, and cinematic contrast.'
  },
  {
    slug: 'isometric-textbook-diagram',
    name: 'Isometric Textbook Diagram',
    category: 'Educational / Diagrammatic',
    tags: ['isometric', 'textbook', 'diagram'],
    image: 'https://preview.redd.it/12-fabulous-notebooklm-infographic-slide-deck-graphic-styles-v0-mp85uvbnl3dg1.png?auto=webp&crop=smart&s=59b2db232da8365609776cf15f64fdf00c8172e0&width=640',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qbonx8/12_fabulous_notebooklm_infographic_slide_deck/',
    summary: 'Structured split layout with clean isometric diagrams and clear educational hierarchy.',
    prompt: 'Create a NotebookLM infographic with textbook-clean isometric diagrams, thin line work, dashed curve arrows, hierarchical nodes, and a balanced two-column explanatory layout.'
  },
  {
    slug: 'pastel-knolling-comparison',
    name: 'Pastel Knolling Comparison',
    category: 'Modern Minimal',
    tags: ['flat lay', 'pastel', 'comparison'],
    image: 'https://preview.redd.it/12-fabulous-notebooklm-infographic-slide-deck-graphic-styles-v0-d8k5re5ql3dg1.png?auto=webp&crop=smart&s=898e5362f757607baf6020a05016d80c7b2f558e&width=640',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qbonx8/12_fabulous_notebooklm_infographic_slide_deck/',
    summary: 'Top-down desk objects with gentle shadows and a clean problem-vs-solution split.',
    prompt: 'Create a NotebookLM infographic as a pastel flat-lay knolling comparison with photoreal stationery, top-down composition, soft shadows, careful alignment, and a clean left-versus-right visual metaphor.'
  },
  {
    slug: 'holographic-isometric-flow',
    name: 'Holographic Isometric Flow',
    category: 'High-Tech / Cyber',
    tags: ['holographic', 'isometric', 'ui'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-ohbg124z1pcg1.png?auto=webp&format=png&s=a565e58b2af36d965dbc5c0118196bdd4ff7a846&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9vs84/5_practical_infographic_design_styles_for/',
    summary: 'Deep dark background, floating panels, neon cyan accents, and layered isometric flow.',
    prompt: 'Create a NotebookLM infographic with a holographic isometric UI aesthetic: dark backdrop, neon cyan accents, floating screens, wireframe structures, layered depth, and sleek analytical typography.'
  },
  {
    slug: 'bauhaus-risograph-grid',
    name: 'Bauhaus Risograph Grid',
    category: 'Editorial / Modernist',
    tags: ['bauhaus', 'risograph', 'flat design'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-decp8yu37qcg1.png?auto=webp&format=png&s=0eb1ee379d0635043f60295ffca00b73e6b4abde&width=1542',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9vs84/5_practical_infographic_design_styles_for/',
    summary: 'Bold geometry, flat spot color, numbered sequences, and poster-grade modernism.',
    prompt: 'Create a NotebookLM infographic in Bauhaus risograph style with geometric shapes, bold sans-serif headings, flat spot-color blocks, numbered sequences, and disciplined educational structure.'
  },
  {
    slug: 'manga-instructional-comic',
    name: 'Manga Instructional Comic',
    category: 'Retro / Comic',
    tags: ['manga', 'storytelling', 'comic'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-hk13pz1htpcg1.png?auto=webp&format=png&s=e7d18123cd34274c697d0eb4067ed2755cf1ad99&width=1677',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9vs84/5_practical_infographic_design_styles_for/',
    summary: 'Expressive comic sequencing with bubbles, mood backgrounds, and brushy emphasis.',
    prompt: 'Create a NotebookLM infographic in manga instructional-comic style with jagged speech bubbles, emotional iconography, abstract mood backgrounds, dramatic emphasis text, and strong visual storytelling.'
  },
  {
    slug: 'passport-travel-archive',
    name: 'Passport Travel Archive',
    category: 'Vintage / Editorial',
    tags: ['travel', 'passport ui', 'paper texture'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-42cij5kd5pcg1.png?auto=webp&format=png&s=6b8ab9ea299b662a8326168656e6d710418c282b&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9vs84/5_practical_infographic_design_styles_for/',
    summary: 'Warm paper texture with passport/document motifs and typography-led layout.',
    prompt: 'Create a NotebookLM infographic with a retro travel archive / passport UI aesthetic using warm paper texture, document motifs, stamped sections, strong typography, and a tidy editorial layout.'
  },
  {
    slug: 'notebook-study-sheet',
    name: 'Notebook Study Sheet',
    category: 'Handmade / Casual',
    tags: ['notebook', 'handwritten', 'analogue'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-bkflgkwuvpcg1.png?auto=webp&format=png&s=bc8f9eeda36ef8d26a90d0a13817353cee30cb89&width=1646',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9vs84/5_practical_infographic_design_styles_for/',
    summary: 'Ruled paper, arrows, coffee-ring artifacts, and casual handwritten explanation.',
    prompt: 'Create a NotebookLM infographic as a handwritten notebook study sheet with ruled paper, marker headings, red underlines, arrows, coffee-ring artifacts, mixed print handwriting, and an authentic sketch-note feel.'
  },
  {
    slug: 'blueprint-flow-board',
    name: 'Blueprint Flow Board',
    category: 'Technical / Blueprint',
    tags: ['blueprint', 'flow', 'industrial'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-decp8yu37qcg1.png?auto=webp&format=png&s=0eb1ee379d0635043f60295ffca00b73e6b4abde&width=1542',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9vs84/5_practical_infographic_design_styles_for/',
    summary: 'Grid overlay, gear motifs, ticks, CAD footer details, and structured flow blocks.',
    prompt: 'Create a NotebookLM infographic in technical blueprint flow-board style with a white square mesh grid, CAD-like layout, mechanical motifs, flow connectors, technical borders, and industrial process clarity.'
  },
  {
    slug: 'clay-stop-motion-explainer',
    name: 'Clay Stop-Motion Explainer',
    category: 'Textured / Craft',
    tags: ['clay', 'stop motion', 'playful'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-bkflgkwuvpcg1.png?auto=webp&format=png&s=bc8f9eeda36ef8d26a90d0a13817353cee30cb89&width=1646',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9vs84/5_practical_infographic_design_styles_for/',
    summary: 'Plasticine characters, rounded edges, matte clay texture, and stop-motion warmth.',
    prompt: 'Create a NotebookLM infographic in clay stop-motion style with plasticine characters, rounded arrows, matte clay textures, slight surface imperfections, and a playful approachable explanatory layout.'
  },
  {
    slug: 'chalkboard-workshop-guide',
    name: 'Chalkboard Workshop Guide',
    category: 'Handmade / Classroom',
    tags: ['chalkboard', 'hand-drawn', 'educational'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-bkflgkwuvpcg1.png?auto=webp&format=png&s=bc8f9eeda36ef8d26a90d0a13817353cee30cb89&width=1646',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9vs84/5_practical_infographic_design_styles_for/',
    summary: 'Dark slate background, chalk dust, ribbon banners, and sketched icons.',
    prompt: 'Create a NotebookLM infographic as a chalkboard workshop guide with slate texture, rough chalk lines, ribbon banners, doodle ornaments, hatched icons, and bright underlined emphasis.'
  },
  {
    slug: 'bento-tech-product-sheet',
    name: 'Bento Tech Product Sheet',
    category: 'Modern UI',
    tags: ['bento', 'product sheet', 'premium'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-decp8yu37qcg1.png?auto=webp&format=png&s=0eb1ee379d0635043f60295ffca00b73e6b4abde&width=1542',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9vs84/5_practical_infographic_design_styles_for/',
    summary: 'Rounded squircles, hero product shot, big metrics, and premium minimalist spacing.',
    prompt: 'Create a NotebookLM infographic as a premium bento-box tech product sheet with rounded container cards, large metrics, minimal iconography, generous white space, and a precise modern product aesthetic.'
  },
  {
    slug: 'retro-comic-blueprint',
    name: 'Retro Comic Blueprint',
    category: 'Retro / Comic',
    tags: ['comic', 'halftone', 'heroic'],
    image: 'https://preview.redd.it/7x-fantastic-notebooklm-infographics-styles-set-v0-yk677v1gvkcg1.png?auto=webp&format=png&s=892bddb921b9a4a58ec3c3fa433fc162edc711e4&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9e3kw/7x_fantastic_notebooklm_infographics_styles_set/',
    summary: 'Bright pop-art energy with halftone dots, speech bubbles, and heavy outlines.',
    prompt: 'Create a NotebookLM infographic in retro comic-book style with bold outlines, halftone shading, speech bubbles, action panels, and an energetic, highly legible educational layout.'
  },
  {
    slug: 'engineering-blueprint-schematic',
    name: 'Engineering Blueprint Schematic',
    category: 'Technical / Blueprint',
    tags: ['blueprint', 'schematic', 'engineering'],
    image: 'https://preview.redd.it/7x-fantastic-notebooklm-infographics-styles-set-v0-qbpa4d7rvkcg1.png?auto=webp&format=png&s=2ab2315cd99726be5d75f41c6bd8aa008809a982&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9e3kw/7x_fantastic_notebooklm_infographics_styles_set/',
    summary: 'Exploded-view diagrams, line precision, and industrial schematic clarity.',
    prompt: 'Create a NotebookLM infographic in engineering blueprint schematic style with crisp vector line work, exploded views, technical callouts, condensed sans-serif labels, and a precise industrial feel.'
  },
  {
    slug: 'thermal-insight-tech',
    name: 'Thermal Insight Tech',
    category: 'High-Tech / Cyber',
    tags: ['thermal', 'cyber', 'surveillance'],
    image: 'https://preview.redd.it/7x-fantastic-notebooklm-infographics-styles-set-v0-u57emw5uvkcg1.png?auto=webp&format=png&s=fa838f975213bafa3d1e3f5a83e1c74f8c492587&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9e3kw/7x_fantastic_notebooklm_infographics_styles_set/',
    summary: 'Infrared palette, emissive gradients, and futuristic instrumentation.',
    prompt: 'Create a NotebookLM infographic with a thermal imaging cyber-tech look using emissive heat-map gradients, dark background fields, symmetrical panels, HUD overlays, and bold uppercase technical typography.'
  },
  {
    slug: 'neumorphic-tech-schematic',
    name: 'Neumorphic Tech Schematic',
    category: 'Modern UI',
    tags: ['neumorphism', 'soft shadow', 'corporate'],
    image: 'https://preview.redd.it/7x-fantastic-notebooklm-infographics-styles-set-v0-apmgajqxvkcg1.png?auto=webp&format=png&s=e701dcb743d7590a0653c438a49fbe07be41911b&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9e3kw/7x_fantastic_notebooklm_infographics_styles_set/',
    summary: 'Rounded UI blocks, subtle depth, soft shadows, and polished enterprise symmetry.',
    prompt: 'Create a NotebookLM infographic in neumorphic tech schematic style with soft shadows, rounded panels, subtle depth, center-weighted symmetry, and a polished corporate-tech feel.'
  },
  {
    slug: 'sumi-e-tech-scroll',
    name: 'Sumi-e Tech Scroll',
    category: 'Artistic / Cultural',
    tags: ['ink wash', 'parchment', 'refined'],
    image: 'https://preview.redd.it/7x-fantastic-notebooklm-infographics-styles-set-v0-wqiknfn2wkcg1.png?auto=webp&format=png&s=4f233530e1712b1f5a029b6b7c94af4cdc49dbd9&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9e3kw/7x_fantastic_notebooklm_infographics_styles_set/',
    summary: 'Ink-wash elegance fused with disciplined diagrams and parchment restraint.',
    prompt: 'Create a NotebookLM infographic blending sumi-e ink wash and modern explanation with parchment texture, restrained color, elegant serif typography, and brush-led diagram framing.'
  },
  {
    slug: 'steampunk-nebula-explorer',
    name: 'Steampunk Nebula Explorer',
    category: 'Vintage / Sci-Fi',
    tags: ['steampunk', 'retro-futurism', 'space'],
    image: 'https://preview.redd.it/7x-fantastic-notebooklm-infographics-styles-set-v0-wx9opco7wkcg1.png?auto=webp&format=png&s=01356243803563f52a23fdff60951ea1e5a68fbe&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9e3kw/7x_fantastic_notebooklm_infographics_styles_set/',
    summary: 'Brass machinery, cosmic contrast, and Victorian retro-futurist drama.',
    prompt: 'Create a NotebookLM infographic in steampunk retro-futurist space style with brass mechanical motifs, pipes, gears, vintage condensed slab-serif text, layered collage structure, and cinematic warm-versus-cool contrast.'
  },
  {
    slug: 'pcb-schematic-architecture',
    name: 'PCB Schematic Architecture',
    category: 'Technical / Blueprint',
    tags: ['pcb', 'electronics', 'circuit'],
    image: 'https://preview.redd.it/7x-fantastic-notebooklm-infographics-styles-set-v0-i2l5579awkcg1.png?auto=webp&format=png&s=08b2c29a95dbb738366368392d91d203a8d3ef0f&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9e3kw/7x_fantastic_notebooklm_infographics_styles_set/',
    summary: 'Board-like composition with copper traces, nodes, and dense circuit logic.',
    prompt: 'Create a NotebookLM infographic with a PCB schematic architecture look using a board-like background, copper trace connectors, integrated-circuit nodes, compact labeling, and strong diagrammatic clarity.'
  },
  {
    slug: 'architectural-comparison-schematic',
    name: 'Architectural Comparison Schematic',
    category: 'Technical / Blueprint',
    tags: ['architectural', 'comparison', 'line art'],
    image: 'https://preview.redd.it/7x-fantastic-notebooklm-infographics-styles-set-v0-qbpa4d7rvkcg1.png?auto=webp&format=png&s=2ab2315cd99726be5d75f41c6bd8aa008809a982&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9e3kw/7x_fantastic_notebooklm_infographics_styles_set/',
    summary: 'Technical line art, dimension markers, floor-plan symbols, and split comparison flow.',
    prompt: 'Create a NotebookLM infographic in architectural comparison schematic style with technical line art, dimension markers, architectural symbols, isometric detail inserts, and a balanced split-screen comparison layout.'
  },
  {
    slug: 'kawaii-candy-clouds',
    name: 'Kawaii Candy Clouds',
    category: 'Cute / Decorative',
    tags: ['kawaii', 'pastel', 'girly'],
    image: 'https://preview.redd.it/7x-fantastic-notebooklm-infographics-styles-set-v0-yk677v1gvkcg1.png?auto=webp&format=png&s=892bddb921b9a4a58ec3c3fa433fc162edc711e4&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9e3kw/7x_fantastic_notebooklm_infographics_styles_set/',
    summary: 'Pink base, rainbow gradients, fluffy clouds, stars, candies, and mascot cuteness.',
    prompt: 'Create a NotebookLM infographic in kawaii candy-cloud style with pastel pink base, rainbow gradients, fluffy clouds, stars, hearts, candy motifs, rounded balloon typography, and cheerful decorative framing.'
  },
  {
    slug: 'voxel-pastel-gameboard',
    name: 'Voxel Pastel Gameboard',
    category: 'Cute / Gameful',
    tags: ['voxel', 'pastel', 'gamification'],
    image: 'https://preview.redd.it/7x-fantastic-notebooklm-infographics-styles-set-v0-apmgajqxvkcg1.png?auto=webp&format=png&s=e701dcb743d7590a0653c438a49fbe07be41911b&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1q9e3kw/7x_fantastic_notebooklm_infographics_styles_set/',
    summary: 'Friendly pastel voxel/isometric composition with game-like progression logic.',
    prompt: 'Create a NotebookLM infographic in pastel voxel gameboard style with blocky isometric forms, soft rounded typography, cheerful gamified progression, pastel color blocks, and approachable educational structure.'
  },
  {
    slug: 'ukiyoe-kaiju-strategy',
    name: 'Ukiyo-e Kaiju Strategy',
    category: 'Artistic / Cultural',
    tags: ['ukiyoe', 'woodblock', 'kaiju'],
    image: 'https://preview.redd.it/12-fabulous-notebooklm-infographic-slide-deck-graphic-styles-v0-9ngv5vbnl3dg1.png?auto=webp&crop=smart&s=6f03a6cbd55483d86263a88fdc1ed7d02335b206&width=640',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qactmc/9_creative_notebooklm_infographics_slide_deck/',
    summary: 'Woodblock revival with Great Wave energy, brush outlines, and mythic narrative framing.',
    prompt: 'Create a NotebookLM infographic in ukiyo-e kaiju strategy style with washi-paper grain, bold brush outlines, Great Wave motifs, woodblock-inspired color blocking, and a structured narrative triptych.'
  },
  {
    slug: 'crt-hacker-terminal',
    name: 'CRT Hacker Terminal',
    category: 'Retro Computing',
    tags: ['crt', 'hacker', 'glitch'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-bkflgkwuvpcg1.png?auto=webp&format=png&s=bc8f9eeda36ef8d26a90d0a13817353cee30cb89&width=1646',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qactmc/9_creative_notebooklm_infographics_slide_deck/',
    summary: 'Pixel monospace, CRT glow, terminal framing, and retro-futurist hacker tension.',
    prompt: 'Create a NotebookLM infographic in CRT hacker terminal style with phosphor glow, pixel monospace text, scanline feel, glitch details, red or green terminal UI framing, and retro-futurist data density.'
  },
  {
    slug: 'botanical-scientific-plate',
    name: 'Botanical Scientific Plate',
    category: 'Vintage / Editorial',
    tags: ['botanical', 'scientific illustration', 'academic'],
    image: 'https://preview.redd.it/12-fabulous-notebooklm-infographic-slide-deck-graphic-styles-v0-mp85uvbnl3dg1.png?auto=webp&crop=smart&s=59b2db232da8365609776cf15f64fdf00c8172e0&width=640',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qactmc/9_creative_notebooklm_infographics_slide_deck/',
    summary: 'Parchment, fine botanical linework, vine borders, and scholarly serif typography.',
    prompt: 'Create a NotebookLM infographic in vintage botanical scientific plate style with parchment tone, delicate linework, leafy borders, old-style serif typography, and academic annotation structure.'
  },
  {
    slug: 'belle-epoque-lithograph',
    name: 'Belle Époque Lithograph',
    category: 'Vintage / Editorial',
    tags: ['belle epoque', 'lithograph', 'historical'],
    image: 'https://preview.redd.it/12-fabulous-notebooklm-infographic-slide-deck-graphic-styles-v0-32bomv3ql3dg1.png?auto=webp&crop=smart&s=7adaeb5f7a598922cde3350418eee76a96ce73c8&width=640',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qactmc/9_creative_notebooklm_infographics_slide_deck/',
    summary: 'Sepia intellectual poster feel with aristocratic elegance and print-era authority.',
    prompt: 'Create a NotebookLM infographic in Belle Époque lithograph style with soft parchment tones, sepia body text, terracotta title accents, elegant framing, historical poster composition, and refined editorial hierarchy.'
  },
  {
    slug: 'retro-intellectual-print',
    name: 'Retro Intellectual Print',
    category: 'Vintage / Editorial',
    tags: ['lo-fi print', 'retro intellectual', 'nostalgic'],
    image: 'https://preview.redd.it/12-fabulous-notebooklm-infographic-slide-deck-graphic-styles-v0-d8k5re5ql3dg1.png?auto=webp&crop=smart&s=898e5362f757607baf6020a05016d80c7b2f558e&width=640',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qactmc/9_creative_notebooklm_infographics_slide_deck/',
    summary: 'Approachable lo-fi print treatment for complex ideas using nostalgic editorial cues.',
    prompt: 'Create a NotebookLM infographic in retro-intellectual print style with soft print texture, restrained palette, tactile paper feel, approachable editorial blocks, and nostalgic pre-digital diagram logic.'
  },
  {
    slug: 'clean-tech-futurist',
    name: 'Clean Tech Futurist',
    category: 'Corporate / Clean',
    tags: ['minimal tech', 'future clean', 'flat design'],
    image: 'https://preview.redd.it/12-fabulous-notebooklm-infographic-slide-deck-graphic-styles-v0-mp85uvbnl3dg1.png?auto=webp&crop=smart&s=59b2db232da8365609776cf15f64fdf00c8172e0&width=640',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qactmc/9_creative_notebooklm_infographics_slide_deck/',
    summary: 'Minimal clean-tech presentation with futuristic flat-design restraint.',
    prompt: 'Create a NotebookLM infographic in clean-tech futurist style with minimalist structure, precise flat design, restrained palette, crisp sans-serif typography, and a polished product-facing aesthetic.'
  },
  {
    slug: 'monochrome-manga-action',
    name: 'Monochrome Manga Action',
    category: 'Retro / Comic',
    tags: ['manga', 'monochrome', 'dynamic'],
    image: 'https://preview.redd.it/12-fabulous-notebooklm-infographic-slide-deck-graphic-styles-v0-q1mntubnl3dg1.png?auto=webp&crop=smart&s=b0e0ef41ab3926eafb1c8a39c054370afce29fe0&width=640',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qfd9yr/8_incredible_notebooklm_infographic_styles/',
    summary: 'Black-and-white manga pacing with speed lines, screentones, and impact typography.',
    prompt: 'Create a NotebookLM infographic in monochrome manga action style with speed lines, halftone dots, cross-hatching, jagged speech bubbles, impact bursts, and dynamic top-down panel flow.'
  },
  {
    slug: 'radial-corporate-journey',
    name: 'Radial Corporate Journey',
    category: 'Corporate / Clean',
    tags: ['corporate', 'radial', 'process flow'],
    image: 'https://preview.redd.it/12-fabulous-notebooklm-infographic-slide-deck-graphic-styles-v0-mp85uvbnl3dg1.png?auto=webp&crop=smart&s=59b2db232da8365609776cf15f64fdf00c8172e0&width=640',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qfd9yr/8_incredible_notebooklm_infographic_styles/',
    summary: 'Semi-circular milestone arc with numbered steps and clean corporate clarity.',
    prompt: 'Create a NotebookLM infographic in radial corporate journey style with a semi-circular timeline, numbered milestone segments, flat vector icons, centered process arc, and clean corporate labels.'
  },
  {
    slug: 'neon-glassmorphic-flow',
    name: 'Neon Glassmorphic Flow',
    category: 'High-Tech / Cyber',
    tags: ['glassmorphism', 'neon', 'dark mode'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-ohbg124z1pcg1.png?auto=webp&format=png&s=a565e58b2af36d965dbc5c0118196bdd4ff7a846&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qfd9yr/8_incredible_notebooklm_infographic_styles/',
    summary: 'Dark-mode flowchart with glowing borders, rounded containers, and glassy neon depth.',
    prompt: 'Create a NotebookLM infographic in neon glassmorphic flow style with glowing rounded containers, dark ambient background, subtle circuit patterns, cyan and purple edge light, and a structured top-to-bottom process flow.'
  },
  {
    slug: 'fractal-neon-recursion',
    name: 'Fractal Neon Recursion',
    category: 'High-Tech / Abstract',
    tags: ['fractal', 'mathematical', 'neon'],
    image: 'https://preview.redd.it/5-practical-infographic-design-styles-for-notebooklm-vol-2-v0-ohbg124z1pcg1.png?auto=webp&format=png&s=a565e58b2af36d965dbc5c0118196bdd4ff7a846&width=2752',
    source: 'https://www.reddit.com/r/notebooklm/comments/1qbonx8/12_fabulous_notebooklm_infographic_slide_deck/',
    summary: 'Recursive spirals, glowing filaments, and cyber-psychedelic mathematical drama.',
    prompt: 'Create a NotebookLM infographic in fractal neon recursion style with Mandelbrot-like spirals, glowing filaments, dark negative space, smooth gradient luminescence, and elegant minimal technical typography.'
  }
];

const categories = Array.from(new Set(styles.map(style => style.category))).sort();
const allTags = Array.from(new Set(styles.flatMap(style => style.tags))).sort();