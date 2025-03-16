const cursorDot = document.querySelector(".curser-dot");
const cursorOutline = document.querySelector(".curser-border");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY; 

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});

document.querySelectorAll(".image-box").forEach(box => {
  const infoBox = box.querySelector(".info-box");
  
  box.addEventListener("mousemove", (e) => {
      const rect = box.getBoundingClientRect();
      let mouseX = e.clientX - rect.left;
      let mouseY = e.clientY - rect.top;

      // Offset slightly to the right and below the cursor
      infoBox.style.left = `${mouseX + 15}px`;
      infoBox.style.top = `${mouseY + 15}px`;

      // Make it visible with a smooth transition
      infoBox.style.opacity = "1";
      infoBox.style.transition = "opacity 0.1s ease, transform 0.05s ease-out";
  });

  box.addEventListener("mouseleave", () => {
      infoBox.style.opacity = "0"; // Hide smoothly
  });
});
