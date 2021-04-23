/* ============================================= */
/*              Variables                        */
/* ============================================= */
// initialize Animate on Scroll library
AOS.init();

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

  // Insure scroll animation works when user scrolls down page
  let scrollRef = 0;
  window.addEventListener("scroll", () => {
    // increase value up to 10, then refresh AOS
    scrollRef <= 10 ? scrollRef++ : AOS.refresh();
  });
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

const headerChangeOnScroll = () => {
  const workTitles = {
    0: "Music Videos",
    1: "Animation",
    2: "Livestream + Multi-cam Directing",
    3: "Pre-Visualization",
    4: "NOTCH",
    5: "Lighting Design + Programming",
    6: "Media Server Programming",
  };

  const workItems = document.querySelectorAll(".work-item");
  const workTitle = document.querySelector(".work-title");
  const userLocation = window.scrollY;
  const workItemsArr = [...workItems];

  workItemsArr.forEach((work) => {
    // console.log(userLocation, work.offsetTop);
    if (userLocation < 762) {
      workTitle.textContent = "";
    } else if (userLocation >= work.offsetTop) {
      workTitle.textContent = workTitles[work.getAttribute("data-key")];
    }
  });
};

/* ============================================= */
/*              Event Listeners                  */
/* ============================================= */

hamburger.addEventListener("click", toggleHamburger);
document.addEventListener("scroll", headerChangeOnScroll);
