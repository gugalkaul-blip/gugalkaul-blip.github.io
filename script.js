/* ==========================================================
   NAV TOGGLE (mobile)
   ========================================================== */
function initNav() {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ==========================================================
   GALLERY CARD BUILDER
   Falls back to a labeled placeholder block if the image
   file hasn't been uploaded yet, so the layout never breaks.
   ========================================================== */
function galleryCard(project, spanClass) {
  var a = document.createElement("a");
  a.className = "gallery-item " + (spanClass || "");
  a.href = "project.html?id=" + encodeURIComponent(project.id);

  var frame = document.createElement("div");
  frame.className = "frame";

  var img = document.createElement("img");
  img.alt = project.title;
  img.loading = "lazy";
  img.src = project.cover;
  img.onerror = function () {
    frame.innerHTML = '<div class="placeholder-art">' + project.title + "</div>";
  };
  frame.appendChild(img);
  a.appendChild(frame);

  var caption = document.createElement("div");
  caption.className = "gallery-caption";
  caption.innerHTML =
    "<span>" + project.title + "</span><span class='cat'>" + project.category + "</span>";
  a.appendChild(caption);

  return a;
}

/* ==========================================================
   HOMEPAGE — featured grid
   ========================================================== */
function renderFeatured() {
  var grid = document.getElementById("featured-grid");
  if (!grid) return;
  var featured = window.PROJECTS.filter(function (p) { return p.featured; });
  var spans = ["span-4", "span-2", "span-2", "span-4"];
  featured.forEach(function (p, i) {
    grid.appendChild(galleryCard(p, spans[i % spans.length]));
  });
}

/* ==========================================================
   WORK PAGE — full grid + category filter
   ========================================================== */
function renderWorkPage() {
  var grid = document.getElementById("work-grid");
  var filterBar = document.getElementById("filter-bar");
  if (!grid || !filterBar) return;

  var categories = ["All Work"];
  window.PROJECTS.forEach(function (p) {
    if (categories.indexOf(p.category) === -1) categories.push(p.category);
  });

  categories.forEach(function (cat, i) {
    var btn = document.createElement("button");
    btn.className = "filter-btn" + (i === 0 ? " is-active" : "");
    btn.type = "button";
    btn.textContent = cat;
    btn.addEventListener("click", function () {
      filterBar.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.remove("is-active");
      });
      btn.classList.add("is-active");
      draw(cat);
    });
    filterBar.appendChild(btn);
  });

  var spans = ["span-2", "span-3", "span-3", "span-2", "span-4", "span-2"];

  function draw(category) {
    grid.innerHTML = "";
    var list = category === "All Work"
      ? window.PROJECTS
      : window.PROJECTS.filter(function (p) { return p.category === category; });
    list.forEach(function (p, i) {
      grid.appendChild(galleryCard(p, spans[i % spans.length]));
    });
  }

  draw("All Work");
}

/* ==========================================================
   PROJECT PAGE — reads ?id= from the URL
   ========================================================== */
function renderProjectPage() {
  var root = document.getElementById("project-root");
  if (!root) return;

  var params = new URLSearchParams(window.location.search);
  var id = params.get("id");
  var project = window.PROJECTS.find(function (p) { return p.id === id; });

  if (!project) {
    root.innerHTML =
      '<div class="page-header wrap"><h1>Project not found</h1>' +
      '<p class="lede">That project may have been moved or renamed. ' +
      '<a href="work.html">Back to all work →</a></p></div>';
    return;
  }

  document.title = project.title + " — Portfolio";

  var heroFrame = document.querySelector("#project-hero-frame");
  var heroImg = document.createElement("img");
  heroImg.alt = project.title;
  heroImg.src = project.cover;
  heroImg.onerror = function () {
    heroFrame.innerHTML = '<div class="placeholder-art">' + project.title + "</div>";
  };
  heroFrame.appendChild(heroImg);

  document.getElementById("project-title").textContent = project.title;
  document.getElementById("meta-client").textContent = project.client;
  document.getElementById("meta-year").textContent = project.year;
  document.getElementById("meta-category").textContent = project.category;
  document.getElementById("project-description").textContent = project.description;

  var imagesWrap = document.getElementById("project-images");
  project.images.forEach(function (src) {
    var frame = document.createElement("div");
    frame.className = "frame";
    var img = document.createElement("img");
    img.loading = "lazy";
    img.alt = project.title + " detail";
    img.src = src;
    img.onerror = function () {
      frame.innerHTML = '<div class="placeholder-art">Image not uploaded yet</div>';
    };
    frame.appendChild(img);
    imagesWrap.appendChild(frame);
  });

  // Prev / next within the full list
  var all = window.PROJECTS;
  var idx = all.findIndex(function (p) { return p.id === id; });
  var prev = all[(idx - 1 + all.length) % all.length];
  var next = all[(idx + 1) % all.length];
  document.getElementById("prev-link").href = "project.html?id=" + prev.id;
  document.getElementById("prev-link").textContent = "← " + prev.title;
  document.getElementById("next-link").href = "project.html?id=" + next.id;
  document.getElementById("next-link").textContent = next.title + " →";
}

document.addEventListener("DOMContentLoaded", function () {
  initNav();
  renderFeatured();
  renderWorkPage();
  renderProjectPage();
});
