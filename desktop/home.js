/* =========================================================
   CURSOR GLOW
   ========================================================= */

const cursorGlow =
  document.querySelector(".cursor-glow");


if (cursorGlow) {

  window.addEventListener(
    "mousemove",
    (event) => {

      cursorGlow.style.left =
        `${event.clientX}px`;

      cursorGlow.style.top =
        `${event.clientY}px`;

      cursorGlow.style.opacity =
        "1";

    }
  );


  document.addEventListener(
    "mouseleave",
    () => {

      cursorGlow.style.opacity =
        "0";

    }
  );

}



/* =========================================================
   HERO PARALLAX
   ========================================================= */

const heroVisual =
  document.querySelector(".hero-visual");


const parallaxCards =
  document.querySelectorAll(".parallax-card");


if (
  heroVisual &&
  window.matchMedia("(pointer: fine)").matches
) {

  heroVisual.addEventListener(
    "mousemove",
    (event) => {

      const bounds =
        heroVisual.getBoundingClientRect();


      const x =
        (
          event.clientX -
          bounds.left
        ) /
        bounds.width -
        0.5;


      const y =
        (
          event.clientY -
          bounds.top
        ) /
        bounds.height -
        0.5;


      parallaxCards.forEach(
        (card) => {

          const depth =
            Number(
              card.dataset.depth ||
              8
            );


          card.style.transform =
            `
              translate(
                ${x * depth}px,
                ${y * depth}px
              )
            `;

        }
      );

    }
  );


  heroVisual.addEventListener(
    "mouseleave",
    () => {

      parallaxCards.forEach(
        (card) => {

          card.style.transform =
            "translate(0, 0)";

        }
      );

    }
  );

}



/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealItems =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );


            revealObserver.unobserve(
              entry.target
            );

          }

        }
      );

    },
    {
      threshold: 0.12
    }
  );


revealItems.forEach(
  (item) => {

    revealObserver.observe(item);

  }
);



/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuButton =
  document.querySelector(".menu-button");


const navigation =
  document.querySelector(".desktop-nav");


if (
  menuButton &&
  navigation
) {

  menuButton.addEventListener(
    "click",
    () => {

      const isOpen =
        navigation.classList.toggle(
          "mobile-open"
        );


      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );


      menuButton.textContent =
        isOpen
          ? "Close"
          : "Menu";

    }
  );

}
const nav = document.querySelector(".desktop-nav");

if (nav) {

  const indicator =
    nav.querySelector(".nav-indicator");

  const links =
    [...nav.querySelectorAll("a[data-nav]")];

  const currentPath =
    window.location.pathname;


  function getActiveNav() {

    if (
      currentPath === "/" ||
      currentPath === "/index.html"
    ) {
      return "home";
    }

    if (
      currentPath.startsWith("/projects/")
    ) {
      return "projects";
    }

    if (
      currentPath.startsWith("/work/")
    ) {
      return "work";
    }

    if (
      currentPath.startsWith("/about/")
    ) {
      return "about";
    }

    if (
      currentPath.startsWith("/education/")
    ) {
      return "education";
    }

    if (
      currentPath.startsWith("/cover-letter/")
    ) {
      return "letter";
    }

    if (
      currentPath.startsWith("/contact/")
    ) {
      return "contact";
    }

    return "home";
  }


  function moveIndicator(link) {

    if (
      !link ||
      !indicator
    ) {
      return;
    }

    const navRect =
      nav.getBoundingClientRect();

    const linkRect =
      link.getBoundingClientRect();

    const offsetX =
      linkRect.left -
      navRect.left;

    indicator.style.width =
      `${linkRect.width}px`;

    indicator.style.transform =
      `translateX(${offsetX}px)`;
  }


  const activeName =
    getActiveNav();

  const activeLink =
    links.find(
      link =>
        link.dataset.nav === activeName
    );

  if (activeLink) {

    activeLink.classList.add(
      "is-active"
    );

    requestAnimationFrame(() => {
      moveIndicator(activeLink);
    });

  }


  links.forEach(link => {

    link.addEventListener(
      "mouseenter",
      () => {
        moveIndicator(link);
      }
    );


    link.addEventListener(
      "mouseleave",
      () => {
        moveIndicator(activeLink);
      }
    );

  });


  window.addEventListener(
    "resize",
    () => {
      moveIndicator(activeLink);
    }
  );

}