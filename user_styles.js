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

if (!categories.includes('Handmade / Casual')) categories.push('Handmade / Casual');
categories.sort();
['hand-drawn', 'educational', 'sketch-note', 'visual thinking', 'infographic'].forEach(tag => {
  if (!allTags.includes(tag)) allTags.push(tag);
});
allTags.sort();
