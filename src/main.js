document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".accordion-header").forEach(button => {
      button.addEventListener("click", function () {
        const content = this.nextElementSibling;
        const icon = this.querySelector(".accordion-icon");
        
        content.classList.toggle("hidden");
        icon.textContent = content.classList.contains("hidden") ? "▶" : "▼";
      });
    });
  });