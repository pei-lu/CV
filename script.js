"use strict";

// The collection remains readable when JavaScript is unavailable.
const controls = document.querySelector(".library-controls");
const search = document.querySelector("#project-search");
const filters = [...document.querySelectorAll("[data-filter]")];
const projects = [...document.querySelectorAll(".project")];
const resultsLabel = document.querySelector("#results-label");
const emptyState = document.querySelector("#empty-state");
let activeFilter = "all";

const searchableProjects = projects.map((element) => ({
  element,
  categories: element.dataset.categories.split(" "),
  text: element.textContent.toLowerCase().replace(/\s+/g, " ")
}));

function updateProjects() {
  const terms = search.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
  let visibleCount = 0;

  searchableProjects.forEach(({ element, categories, text }) => {
    const matchesCategory = activeFilter === "all" || categories.includes(activeFilter);
    const matchesSearch = terms.every((term) => text.includes(term));
    element.hidden = !(matchesCategory && matchesSearch);
    if (!element.hidden) visibleCount += 1;
  });

  filters.forEach((button) => {
    const selected = button.dataset.filter === activeFilter;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  resultsLabel.textContent = visibleCount === projects.length
    ? `Showing all ${projects.length} projects`
    : `Showing ${visibleCount} of ${projects.length} projects`;
  emptyState.hidden = visibleCount !== 0;
}

function resetProjects() {
  activeFilter = "all";
  search.value = "";
  updateProjects();
}

filters.forEach((button) => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  updateProjects();
}));
search.addEventListener("input", updateProjects);
document.querySelector("#reset-filters").addEventListener("click", () => {
  resetProjects();
  search.focus();
});

controls.hidden = false;
resultsLabel.hidden = false;
updateProjects();
