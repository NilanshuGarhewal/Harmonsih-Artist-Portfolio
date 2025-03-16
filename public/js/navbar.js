const closeMenu = document.querySelector(".close-menu");
const toggleMenu = document.querySelector(".toggle-menu");
const openMenu = document.querySelector(".open-menu");

const openClose = document.querySelector(".open-close");
const openCloseId = document.querySelector("#open-close");

closeMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");

  if (openClose.innerText == "MENU") {
    openClose.innerText = "Close";
  } else {
    openClose.innerText = "MENU";
  }

  if (openCloseId.innerText == "menu") {
    openCloseId.innerText = "close";
  } else {
    openCloseId.innerText = "menu";
  }
});

openMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
});

// -----------------------------------------------

// scrolling to a section

openMenu.addEventListener("click", () => {
  if (openClose.innerText == "MENU") {
    openClose.innerText = "Close";
  } else {
    openClose.innerText = "MENU";
  }

  if (openCloseId.innerText == "menu") {
    openCloseId.innerText = "close";
  } else {
    openCloseId.innerText = "menu";
  }
});

// -----------------------------------------------

// scrolling to a section

const goToAbout = document.querySelector(".go-to-about");
const goToFaq = document.querySelector(".go-to-faq");

const aboutSection = document.querySelector(".about-section");
const faqSection = document.querySelector(".faq-section");

goToAbout.addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

goToFaq.addEventListener("click", () => {
  faqSection.scrollIntoView({ behavior: "smooth" });
});

// -----------------------------------------------

// opening menu and choosing a section

const aGoToAbout = document.querySelector(".go-to-a-section");
const aGoToFaq = document.querySelector(".go-to-f-section");
const aGoToProject = document.querySelector(".go-to-b-section");
const aGoToHero = document.querySelector(".go-to-h-section");

function closeMenuFunction() {
  toggleMenu.classList.toggle("active");

  if (openClose.innerText == "MENU") {
    openClose.innerText = "Close";
  } else {
    openClose.innerText = "MENU";
  }

  if (openCloseId.innerText == "menu") {
    openCloseId.innerText = "close";
  } else {
    openCloseId.innerText = "menu";
  }
}

aGoToAbout.addEventListener("click", () => {
  closeMenuFunction();
  document
    .querySelector(".about-section")
    .scrollIntoView({ behavior: "smooth" });
});

aGoToFaq.addEventListener("click", () => {
  closeMenuFunction();
  document.querySelector(".faq-section").scrollIntoView({ behavior: "smooth" });
});

aGoToProject.addEventListener("click", () => {
  closeMenuFunction();
  document
    .querySelector(".project-section")
    .scrollIntoView({ behavior: "smooth" });
});

aGoToHero.addEventListener("click", () => {
  closeMenuFunction();
  document
    .querySelector(".name-container")
    .scrollIntoView({ behavior: "smooth" });
});
