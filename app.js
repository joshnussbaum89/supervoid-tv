/* ============================================= */
/*              Variables                        */
/* ============================================= */
const hamburger = document.querySelector(".hamburger");
const footer = document.querySelector("#footer");

/**
 * Initial loading screen
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
  const mobileNav = document.querySelector(".mobile-nav");

  hamburger.classList.toggle("is-active");
  if (hamburger.classList.contains("is-active")) {
    mobileNav.style.opacity = "1";
    mobileNav.style.width = "100%";
    hamburger.style.position = "fixed";
  } else {
    mobileNav.style.opacity = "0";
    mobileNav.style.width = "0%";
    hamburger.style.position = "inherit";
  }
};

/**
 * Remove mobile navigation overlay if window is wider than 768px
 */
const windowResizeWindowToggle = () => {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 768 && hamburger.classList.contains("is-active"))
    toggleHamburger();
};

/**
 * Remove mobile navigation overlay if user scrolls past 0
 */
const removeMobileNavOnScroll = () => {
  if (window.scrollY > 0 && hamburger.classList.contains("is-active"))
    toggleHamburger();
};

/**
 * As user scrolls through "Work" section, the sub header changes
 */
const subHeadersChangeOnScroll = () => {
  const work = document.querySelector("#work");
  const workItems = document.querySelectorAll(".work-item");
  const workTitle = document.querySelector(".work-title");
  const footerLocation = footer.offsetTop;

  // Location of user, #work section, and first element in "music videos"
  const workLocation = work.offsetTop;
  const musicVideosLocation = workItems[0].offsetTop;
  const userLocation = window.scrollY;

  // .work-item's NodeList as an Array
  const workItemsArr = [...workItems];

  // Header titles to compare with data-key in HTML
  const workTitles = {
    0: "Music Videos",
    1: "Animation",
    2: "Livestream + Multi-cam Directing",
    3: "Pre-Visualization",
    4: "NOTCH",
    5: "Lighting Design + Programming",
    6: "Media Server Programming",
  };

  // Make sure "Music Videos" appears when user clicks #work
  if (userLocation < workLocation) {
    workTitle.style.display = "none";
    workTitle.style.opacity = "0";
    workTitle.textContent = "";
  } else if (
    userLocation >= workLocation &&
    userLocation <= musicVideosLocation
  ) {
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
    // 14571.5
    if (userLocation >= footerLocation - 106) {
      workTitle.style.display = "none";
      workTitle.style.opacity = "0";
      workTitle.textContent = "";
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
// Listen for user scrolls to remove mobile nav if it's open
document.addEventListener("scroll", removeMobileNavOnScroll);
// Listen for window resize to remove mobile nav if it's open
window.addEventListener("resize", windowResizeWindowToggle);
