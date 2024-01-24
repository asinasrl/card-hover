let cont = document.querySelector(".container");

let height = cont.clientHeight;
let width = cont.clientWidth;

cont.addEventListener("mousemove", (e) => {
  let x = e.layerX;
  let y = e.layerY;

  let yRotation = 20 * ((x - width / 2) / width);
  let xRotation = -20 * ((y - height / 2) / height);

  let value =
    "perspective(500px) scale(1.1) rotateX(" +
    xRotation +
    "deg) rotateY(" +
    yRotation +
    "deg)";

  cont.style.transform = value;
});

cont.addEventListener("mouseout", () => {
  cont.style.transform = `perspective(500px) scale(1) rotateX(0) rotateY(0)`;
});

cont.addEventListener("mousedown", function () {
  cont.style.transform = "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
});

cont.addEventListener("mouseup", function () {
  cont.style.transform = "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
});
