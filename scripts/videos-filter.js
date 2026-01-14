document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".video-card");
  const searchInput = document.getElementById("video-search");

  let currentFilter = "all";
  let currentQuery = "";

  function applyFilters() {
    cards.forEach(card => {
      const type = card.dataset.type;
      const title = card.dataset.title || "";

      const matchFilter =
        currentFilter === "all" || type === currentFilter;

      const matchSearch =
        title.includes(currentQuery);

      if (matchFilter && matchSearch) {
        card.style.display = "block";
        card.classList.add("fade-in");
      } else {
        card.style.display = "none";
      }
    });
  }

  /* Filter buttons */
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      currentFilter = btn.dataset.filter;
      applyFilters();
    });
  });

  /* Search input */
  searchInput.addEventListener("input", (e) => {
    currentQuery = e.target.value.toLowerCase().trim();
    applyFilters();
  });
});
