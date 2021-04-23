/* ============================================= */
/*              Variables                        */
/* ============================================= */

const hamburger = document.querySelector(".hamburger");

/**
 * IIFE for initial loading screen
 */
(() => {
  const app = document.querySelector(".App");
  const overlay = document.querySelector(".overlay");
  const overlayTitle = document.querySelector(".overlay h1");

  // Fade in overlay title
  setTimeout(() => {
    overlayTitle.style.opacity = "1";
  }, 750);

  // Fade in bottom border
  setTimeout(() => {
    overlayTitle.style.borderBottom = "2px solid #050505";
  }, 1500);

  // Make initial loading screen disapear
  setTimeout(() => {
    overlay.style.opacity = "0";
  }, 3000);

  // Remove overlay entirely
  // Introduce the rest of the App
  setTimeout(() => {
    overlay.style.display = "none";
    app.style.display = "block";
  }, 4000);
})();

/* ============================================= */
/*              Functions                        */
/* ============================================= */

/**
 * Hamburger nav listener
 */
const toggleHamburger = () => {
  hamburger.classList.toggle("is-active");
};

/* ============================================= */
/*              Event Listeners                  */
/* ============================================= */

hamburger.addEventListener("click", toggleHamburger);
