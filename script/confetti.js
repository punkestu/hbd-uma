const defaults = {
  spread: 360,
  ticks: 100,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
};

function shoot() {

  confetti({
    ...defaults,
    particleCount: 30,
    scalar: 2,
    shapes: ["text"],
    shapeOptions: {
      text: {
        value: ["💕️", "💓️", "❤️"],
      },
    },
  });
}