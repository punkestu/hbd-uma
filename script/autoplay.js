const bgSound = document.getElementById("bg-sound");
const body = document.getElementsByTagName("body")[0];
const shade = document.getElementById("shade");
function play() {
  bgSound.play();
  body.classList.remove("h-screen");
  body.classList.remove("overflow-hidden");
  shade.classList.add("animate-fade");
  setTimeout(() => {
    shade.remove();
  }, 1000);
}
