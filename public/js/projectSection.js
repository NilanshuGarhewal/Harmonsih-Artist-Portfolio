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
    typebeatView.style.display = "grid";
  } else {
    changeView.innerText = "View Typebeats";
    remixView.style.display = "grid";
    typebeatView.style.display = "none";
  }

  //   Change view
});

const goToProject = document.querySelectorAll(".span-add-fill");

const goToProject2 = document.querySelector(".go-to-project");

const projectSection = document.querySelector(".project-section");

goToProject.forEach((element) => {
  element.addEventListener("click", () => {
    projectSection.scrollIntoView({ behavior: "smooth" });
  });
});

goToProject2.addEventListener("click", () => {
  projectSection.scrollIntoView({ behavior: "smooth" });
});
