let parallaxElements = document.querySelectorAll(".parallax");

let x = 0;
let y = 0;

if (window.innerWidth > 600) {
  window.addEventListener("mousemove", (e) => {
    let x = e.clientX - window.innerWidth / 2;
    let y = e.clientY - window.innerHeight / 2;

    function update(cursorPosition) {
      parallaxElements.forEach((element) => {
        let speedX = element.getAttribute("speedx");
        let speedY = element.getAttribute("speedy");

        element.style.transform = `translateX(calc(-50% + ${
          -x * speedX
        }px)) translateY(calc(-50% + ${y * speedY}px)`;
      });
    }
    update(e.clientX);
  });
} else {
  document.querySelector(".info-screen").textContent =
    "To see this effect you need to open this page on your tablet or computer";
}
