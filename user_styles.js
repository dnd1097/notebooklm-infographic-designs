styles.push({
  slug: 'hand-drawn-camera-infographic',
  name: 'Hand-Drawn Camera Explainer',
  category: 'Handmade / Casual',
  tags: ['hand-drawn', 'educational', 'sketch-note', 'visual thinking', 'infographic'],
  image: 'assets/hand-drawn-camera-infographic.png',
  source: 'user-provided',
  summary: 'Workshop-style hand-drawn infographic using panel-based layout and visual metaphors to explain technical features.',
  prompt: `Overall Design Settings:

Tone: "Educational, pragmatic, authoritative yet approachable, workshop-style, clarity-focused."

Visual Identity:

Background Color: "#EEF1F3"

Text Color: "#1B2A41"

Accent Color: "#B93A2B"

Image Style:

Features: "Hand-drawn conceptual diagrams (funnels, icebergs, venn diagrams, levers), numbered panel layout, visual metaphors simplifying complex abstract concepts."

Texture: "Analog paper grain, marker stroke imperfections, slightly wobbly ink lines, hand-colored fill aesthetic."

Composition: "Strict 2-column grid system divided into 8 distinct rectangular panels, high information density with clear separation boundaries."

Lighting: "Flat, uniform scanning light, no dramatic shadows, emphasis on clarity and 2D diagrammatic representation."

Line Weight: "Medium-thick marker lines for outlines, thinner pen lines for text."

Fill Style: "Soft, pastel marker shading with slight unevenness to simulate hand-coloring."

Visual Metaphors: "Prisms, funnels, levers, cycles, icebergs."

Typography:

Heading: "Hand-Lettered Bold Caps (Marker Style)"

Body Font: "Neat, hand-printed sans-serif."

Hierarchy Approach: "Red marker for titles/headers, Blue/Black ink for body text and prompts."

Emphasis: "Underlining and boxing used for key terms."

Categories:

Tags: ["Hand-Drawn", "Educational", "Sketch-Note", "Visual Thinking", "Infographic"]`
});

styles.push({
  slug: 'classical-european-romantic-infographic',
  name: 'Classical European Romantic Infographic',
  category: 'Artistic / Classical',
  tags: ['rococo', 'whimsical', 'narrative infographic', 'pastel', 'romantic'],
  image: 'assets/classical-european-romatic-infographic.png',
  source: 'user-provided',
  summary: 'Rococo-inspired narrative infographic with cherubs, ribbons, and soft watercolor aesthetics.',
  prompt: `Overall Design Settings:

Tone: "Elegant, dreamy, educational, soft, and whimsical with a classical European romantic influence."

Visual Identity:

Background Color: "#FDF6F0"

Text Color: "#6B4C40"

Accent Color: "#EBC97A"

Secondary Colors: ["#E88CA0", "#BFE3F2", "#FADadd", "#FFFFFF", "#D96C75"]

Image Style:

Features: "Classical cherubs (putti), blooming roses, flowing golden ribbons acting as directional guides, seashells, pearls, and allegorical character vignettes."

Texture: "Soft watercolor wash, smooth gradients, ethereal glow, matte paper finish."

Composition: "S-curve narrative path connecting three distinct stages, balanced asymmetry, framed by decorative floral corners."

Lighting: "Soft and diffuse ambient lighting with magical, glowing highlights emitting from key objects (mirror, book)."

Line Work: "Delicate, warm-colored outlines (browns and deep pinks) rather than harsh black."

Motifs: "Victorian fantasy elements: ribbons, jewels, flowers, and classical mythology references."

Typography:

Heading: "Elegant Serif (Mincho style)"

Body: "Soft Rounded Sans-serif or clean Handwriting style"

Formatting: "Gold or Rose colored headers, Dark Brown body text for warmth and readability"

Categories:

Tags: ["Rococo", "Whimsical", "Narrative Infographic", "Pastel", "Romantic"]`
});

styles.push({
  slug: 'industrial-workbench-schematic-infographic',
  name: 'Industrial Workbench Schematic',
  category: 'Technical / Industrial',
  tags: ['industrial','skeuomorphic','engineering','hardware','tactile'],
  image: 'assets/industrial-workbench-schematic-infographic.png',
  source: 'user-provided',
  summary: 'Photorealistic hardware infographic integrated with circuit schematic overlays in a workshop setting.',
  prompt: `Overall Tone: Precision Engineering, Rugged Reliability, Technical Authority, Hardware-Focused

Colors: Background #cfd3d6, Text #1f1f1f, Accent #ffc107

Image Style: Photorealistic hardware components integrated with 2D schematic diagrams (PCB traces), metallic plaque substrate, workshop tools framing the scene.

Texture: Brushed aluminum, scratched metal, rubber cable insulation, matte plastic, industrial grit.

Composition: Central information plate screwed onto a dirty work surface, framed by disorganized tools (calipers, cables) acting as a border; internal layout uses circuit lines to guide the eye between modular sections.

Lighting: Cool, diffuse overhead workshop lighting creating realistic soft drop shadows under 3D elements; subtle glowing effects on yellow LED/circuit indicators.

Typography Style: DIN Condensed or Impact (Industrial Sans-Serif), Uppercase

Categories: Industrial, Skeuomorphic, Engineering, Hardware, Tactile

Instruction: Create a high-fidelity infographic matching the visual DNA of "Industrial Workbench Schematic".

Reference extracted metadata for exact aesthetic and structural adherence.`
});

if (!categories.includes('Handmade / Casual')) categories.push('Handmade / Casual');
if (!categories.includes('Artistic / Classical')) categories.push('Artistic / Classical');
if (!categories.includes('Technical / Industrial')) categories.push('Technical / Industrial');
categories.sort();

['hand-drawn','educational','sketch-note','visual thinking','infographic','rococo','whimsical','narrative infographic','pastel','romantic','industrial','skeuomorphic','engineering','hardware','tactile'].forEach(tag => {
  if (!allTags.includes(tag)) allTags.push(tag);
});
allTags.sort();