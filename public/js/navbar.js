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
