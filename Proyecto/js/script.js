const cards = document.querySelectorAll(".film-card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.borderColor = "rgba(212,176,138,0.45)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.borderColor = "rgba(255,255,255,0.08)";
  });
});

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  document.querySelector(".hero").style.backgroundPositionY =
    `${scroll * 0.4}px`;
});