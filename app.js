/* ============================================= */
/*              Variables                        */
/* ============================================= */
const app = document.querySelector(".App");
const overlay = document.querySelector(".overlay");
const overlayAnimation = document.querySelector(".overlay-animation");
const overlayTv = document.querySelector(".overlay-tv");
const hamburger = document.querySelector(".hamburger");
const footer = document.querySelector("#contact");

/* ============================================= */
/*              Functions                        */
/* ============================================= */

// Disable animation on Safari
if (
  navigator.userAgent.includes("Safari") &&
  !navigator.userAgent.includes("Chrome")
) {
  overlay.style.display = "none";
  app.style.display = "block";
}
/**
 * Once page is fully loaded, display TV animation
 */
const loadingScreenAnimation = () => {
  // Fade in overlay title
  setTimeout(() => {
    overlay.style.opacity = "1";
  }, 100);
  // Make initial loading screen disapear
  setTimeout(() => {
    clearInterval();
    overlay.style.opacity = "0";
  }, 5000);
  // Remove overlay entirely
  setTimeout(() => {
    overlay.style.display = "none";
    app.style.display = "block";
  }, 6000);
};

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
    0: "Livestream + Multi-cam Directing",
    1: "Lighting Design + Programming",
    2: "NOTCH",
    3: "Animation",
    4: "Music Videos",
    5: "Pre-Visualization",
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
    if (userLocation >= work.offsetTop - 334) {
      workTitle.style.display = "block";
      workTitle.style.opacity = "1";
      workTitle.textContent = workTitles[index];
    }
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

// Loading screen animation when plage loads
window.addEventListener("load", loadingScreenAnimation);
// Mobile nav toggle
hamburger.addEventListener("click", toggleHamburger);
// Listen for user scrolls to dynamically change sub headers
document.addEventListener("scroll", subHeadersChangeOnScroll);
// Listen for user scrolls to remove mobile nav if it's open
document.addEventListener("scroll", removeMobileNavOnScroll);
// Listen for window resize to remove mobile nav if it's open
window.addEventListener("resize", windowResizeWindowToggle);
