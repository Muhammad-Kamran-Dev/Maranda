// Navigation Code
const menu = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-btn");
const navList = document.querySelector("ul");

menu.addEventListener("click", () => {
  navList.classList.remove("close");
  navList.classList.remove("hidden");
});
closeBtn.addEventListener("click", () => {
  navList.classList.add("close");
});

// Gsap Animation Code
// Target the .page-1 element
const page1 = document.querySelector(".page-1");

// Create a GSAP timeline
const tl = gsap.timeline({ delay: 1 });

// Animation 1: Move the page out of the screen, and scale it down
tl.to(page1, {
  y: "100vh",
  duration: 0,
  scale: 0.5
});

// Animation 2: Scale the page back to the screen from the bottom and scale it down
tl.to(page1, {
  y: "0vh",
  delay: 0.2,
  scale: 0.5
});

// Animation 3:Scale the page  up and rotate it
tl.to(page1, {
  duration: 1,
  rotation: -360,
  scale: 1
});
