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

const projectNav = document.querySelector(".desktop-nav");

if (projectNav) {

  const navIndicator =
    projectNav.querySelector(".nav-indicator");

  const navLinks =
    [...projectNav.querySelectorAll("a[data-nav]")];


  function moveProjectNavIndicator(link) {

    if (
      !link ||
      !navIndicator
    ) {
      return;
    }

    const navRect =
      projectNav.getBoundingClientRect();

    const linkRect =
      link.getBoundingClientRect();

    navIndicator.style.width =
      `${linkRect.width}px`;

    navIndicator.style.transform =
      `translateX(${linkRect.left - navRect.left}px)`;

    navIndicator.classList.add(
      "is-visible"
    );

  }


  function hideProjectNavIndicator() {

    if (!navIndicator) {
      return;
    }

    navIndicator.classList.remove(
      "is-visible"
    );

  }


  navLinks.forEach((link) => {

    link.addEventListener(
      "mouseenter",
      () => {
        moveProjectNavIndicator(link);
      }
    );


    link.addEventListener(
      "focus",
      () => {
        moveProjectNavIndicator(link);
      }
    );


    link.addEventListener(
      "click",
      (event) => {

        if (
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }

        const destination =
          link.getAttribute("href");

        if (!destination) {
          return;
        }

        event.preventDefault();

        moveProjectNavIndicator(link);

        window.setTimeout(() => {
          window.location.href =
            destination;
        }, 240);

      }
    );

  });


  projectNav.addEventListener(
    "mouseleave",
    hideProjectNavIndicator
  );


  projectNav.addEventListener(
    "focusout",
    (event) => {

      if (
        !projectNav.contains(
          event.relatedTarget
        )
      ) {
        hideProjectNavIndicator();
      }

    }
  );

}

