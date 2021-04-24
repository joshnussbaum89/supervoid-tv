/* ============================================= */
/*              Variables                        */
/* ============================================= */

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
const hamburger = document.querySelector(".hamburger");
const toggleHamburger = () => {
  hamburger.classList.toggle("is-active");
};

/**
 * As user scrolls through "Work" section, the sub header changes
 */
const subHeadersChangeOnScroll = () => {
  const workItems = document.querySelectorAll(".work-item");
  const workTitle = document.querySelector(".work-title");
  const userLocation = window.scrollY;
  const workItemsArr = [...workItems];

  const workTitles = {
    0: "Music Videos",
    1: "Animation",
    2: "Livestream + Multi-cam Directing",
    3: "Pre-Visualization",
    4: "NOTCH",
    5: "Lighting Design + Programming",
    6: "Media Server Programming",
  };

  // Makes sure "Music Videos" appears when user clicks #work
  if (userLocation < 634) {
    workTitle.style.display = "none";
    workTitle.style.opacity = "0";
    workTitle.textContent = "";
  } else if (userLocation >= 634 && userLocation <= 762) {
    workTitle.style.display = "block";
    setTimeout(() => {
      workTitle.style.opacity = "1";
    }, 100);
    workTitle.textContent = workTitles[0];
  }

  // Display each sub header
  workItemsArr.forEach((work, index) => {
    if (userLocation >= work.offsetTop - 96) {
      workTitle.style.display = "block";
      workTitle.style.opacity = "1";
      workTitle.textContent = workTitles[index];
    }
  });
};

/* ============================================= */
/*              Event Listeners                  */
/* ============================================= */

// Mobile nav toggle
hamburger.addEventListener("click", toggleHamburger);
// Listen for user scrolls to dynamically change sub headers
document.addEventListener("scroll", subHeadersChangeOnScroll);
