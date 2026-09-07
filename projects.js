/*
  ============================================
  YOUR PROJECTS — edit this file to add work
  ============================================

  To add a new project:
  1. Drop your images into images/projects/ (name them something clear,
     e.g. "riverlight-cover.jpg", "riverlight-1.jpg", "riverlight-2.jpg")
  2. Copy one of the objects below, paste it above `];`, and fill in
     your own title, client, year, category, description and image paths.
  3. Set featured: true if you want it on the homepage (max ~4 featured
     looks best).
  4. Save the file and re-upload — GitHub Pages redeploys automatically.

  Category can be anything — the filter buttons on the Work page are
  built automatically from whatever categories appear below. Just spell
  each one the same way every time (e.g. always "Mural", not sometimes
  "Murals").

  A few notes on images by category, since these formats aren't all the
  same shape:
  - Packaging: product shots often work best square or close to it.
  - Menu Design: usually a tall/portrait crop (it's a printed page).
  - Mural: wide, since it's a wall — a panoramic photo reads best.
  The gallery grid and project page both adapt to whatever you upload,
  so there's nothing to configure — just use a photo that shows the
  work at its natural shape.
*/

window.PROJECTS = [
  {
    id: "marlowe-rye-packaging",
    title: "Marlowe & Rye",
    client: "Marlowe & Rye Distillery",
    year: "2026",
    category: "Packaging",
    featured: true,
    cover: "images/projects/marlowe-rye-cover.jpg",
    images: [
      "images/projects/marlowe-rye-1.jpg",
      "images/projects/marlowe-rye-2.jpg",
      "images/projects/marlowe-rye-3.jpg"
    ],
    description:
      "Label and carton design for a small-batch rye whiskey. The brief wanted something that looked at home on a bar shelf next to much older brands, so the illustration leans on engraving-style linework rather than anything overtly modern."
  },
  {
    id: "the-hearth-menu",
    title: "The Hearth",
    client: "The Hearth Restaurant",
    year: "2025",
    category: "Menu Design",
    featured: true,
    cover: "images/projects/the-hearth-cover.jpg",
    images: [
      "images/projects/the-hearth-1.jpg",
      "images/projects/the-hearth-2.jpg"
    ],
    description:
      "A seasonal menu redesign for a neighbourhood restaurant, with small hand-drawn studies of the dishes running down the margins instead of photography. Reprinted every season with new illustrations for the new dishes."
  },
  {
    id: "lower-fifth-mural",
    title: "Lower Fifth",
    client: "City Arts Commission",
    year: "2025",
    category: "Mural",
    featured: true,
    cover: "images/projects/lower-fifth-cover.jpg",
    images: [
      "images/projects/lower-fifth-1.jpg",
      "images/projects/lower-fifth-2.jpg",
      "images/projects/lower-fifth-3.jpg"
    ],
    description:
      "A 40-foot mural for an underpass on Lower Fifth, painted over three weeks with a small crew. The commission asked for something about the neighbourhood's history as a market street, so the piece is built around produce stalls rendered at a much larger-than-life scale."
  },
  {
    id: "wildhouse-brand",
    title: "Wildhouse",
    client: "Wildhouse Coffee Co.",
    year: "2025",
    category: "Branding",
    featured: true,
    cover: "images/projects/wildhouse-cover.jpg",
    images: [
      "images/projects/wildhouse-1.jpg",
      "images/projects/wildhouse-2.jpg"
    ],
    description:
      "A full visual identity for an independent roastery, built around a set of hand-drawn botanical marks that show up across packaging, signage and the menu boards."
  },
  {
    id: "salt-and-vine-packaging",
    title: "Salt & Vine",
    client: "Salt & Vine Foods",
    year: "2024",
    category: "Packaging",
    featured: false,
    cover: "images/projects/salt-and-vine-cover.jpg",
    images: [
      "images/projects/salt-and-vine-1.jpg",
      "images/projects/salt-and-vine-2.jpg"
    ],
    description:
      "Packaging for a small line of pickled vegetables, sold at farmers' markets before picking up a few regional grocery accounts. Each jar label features a different vegetable, illustrated whole and in cross-section."
  },
  {
    id: "paper-lantern-festival",
    title: "Paper Lantern Festival",
    client: "Self-initiated",
    year: "2024",
    category: "Personal Projects",
    featured: false,
    cover: "images/projects/paper-lantern-cover.jpg",
    images: [
      "images/projects/paper-lantern-1.jpg",
      "images/projects/paper-lantern-2.jpg",
      "images/projects/paper-lantern-3.jpg"
    ],
    description:
      "A personal series made after visiting a lantern festival — an exercise in painting light sources at night without letting everything turn into a silhouette."
  }
];
