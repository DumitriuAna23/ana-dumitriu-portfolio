const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("mousemove", (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
    cursorGlow.style.opacity = "1";
  });

  document.addEventListener("mouseleave", () => {
    cursorGlow.style.opacity = "0";
  });
}

const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealItems.forEach((item) => {
  revealObserver.observe(item);
});

const portfolioNav = document.querySelector(".desktop-nav");

if (portfolioNav) {
  const navIndicator = portfolioNav.querySelector(".nav-indicator");
  const navLinks = [...portfolioNav.querySelectorAll("a[data-nav]")];

  const activeLink = navLinks.find(
    (link) => link.dataset.nav === "about"
  );

  function moveIndicator(link, animate = true) {
    if (!link || !navIndicator) {
      return;
    }

    const navRect = portfolioNav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();

    if (!animate) {
      navIndicator.classList.add("no-transition");
    }

    navIndicator.style.width = `${linkRect.width}px`;
    navIndicator.style.transform =
      `translateX(${linkRect.left - navRect.left}px)`;

    if (!animate) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          navIndicator.classList.remove("no-transition");
        });
      });
    }
  }

  requestAnimationFrame(() => {
    moveIndicator(activeLink, false);
  });

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      moveIndicator(link);
    });

    link.addEventListener("mouseleave", () => {
      moveIndicator(activeLink);
    });

    link.addEventListener("click", (event) => {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const destination = link.getAttribute("href");

      if (!destination) {
        return;
      }

      event.preventDefault();

      navLinks.forEach((item) => {
        item.classList.remove("is-active");
      });

      link.classList.add("is-active");
      moveIndicator(link);

      window.setTimeout(() => {
        window.location.href = destination;
      }, 240);
    });
  });

  window.addEventListener("resize", () => {
    moveIndicator(activeLink, false);
  });
}
