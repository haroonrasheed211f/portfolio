function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".section-container, .details-container, .section__text, .section__pic-container"
  );

  function isVisible(element) {
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }

  function scanDocument() {
    elements.forEach((element) => {
      if (isVisible(element)) {
        element.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", scanDocument);
  scanDocument(); // Initial check on load
});
