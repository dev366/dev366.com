const navToggle = document.querySelector(".nav-toggle");

if (navToggle) {
  const closeMenu = () => {
    document.body.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    document.body.classList.toggle("menu-open", !expanded);
    navToggle.setAttribute("aria-expanded", String(!expanded));
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      closeMenu();
    }
  });
}

const revealNodes = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window && revealNodes.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -5% 0px",
    }
  );

  revealNodes.forEach((node) => revealObserver.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}

const yearNode = document.getElementById("current-year");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}
