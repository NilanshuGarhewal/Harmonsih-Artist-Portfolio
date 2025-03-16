gsap.registerPlugin(ScrollTrigger);

const aboutInfo = new SplitType(".create-animation", { types: "words" });

gsap.from(".word", {
  scrollTrigger: {
    trigger: ".word",
    start: "top 70%",
    end: "top 20%",
    scrub: true,
    markers: false,
  },
  opacity: 0.2,
  stagger: 0.5,
});

gsap.to(".side-slide-animation", {
  scrollTrigger: {
    trigger: ".side-slide-animation",
    toggleActions: "restart pause reverse pause",
    start: "20% 80%",
    end: "bottom 40%",
    scrub: true,
    markers: false,
  },
  x: 0,
  opacity: 1,
  duration: 2,
});

gsap.to(".side-slide-animation-3", {
  scrollTrigger: {
    trigger: ".side-slide-animation-3",
    toggleActions: "restart pause reverse pause",
    start: "20% 80%",
    end: "bottom 40%",
    scrub: true,
    markers: false,
  },
  x: 0,
  opacity: 1,
  duration: 2,
});

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
