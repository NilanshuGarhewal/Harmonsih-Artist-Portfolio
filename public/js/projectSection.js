gsap.registerPlugin(ScrollTrigger);

gsap.to(".side-slide-animation-2", {
  scrollTrigger: {
    trigger: ".side-slide-animation-2",
    toggleActions: "restart pause reverse pause",
    start: "20% 80%",
    end: "bottom 40%",
    scrub: true,
    markers: false,
  },
  x: 0,
  opacity: 1,
  duration: 4,
});

const changeView = document.querySelector(".p-view-remix");
const typebeatView = document.querySelector(".music-typebeat-details");
const remixView = document.querySelector(".music-remix-details");

changeView.addEventListener("click", () => {
  if (changeView.innerText == "View Typebeats") {
    changeView.innerText = "View Remix";
    remixView.style.display = "none";
    typebeatView.style.display = "block";
  } else {
    changeView.innerText = "View Typebeats";
    remixView.style.display = "block";
    typebeatView.style.display = "none";
  }

  //   Change view
});
