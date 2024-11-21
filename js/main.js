const arrow = document.getElementById("arrow_svg");

window.addEventListener("scroll", () => {
  if (window.scrollY != 0) {
    arrow.classList.remove("hide");
  } else {
    arrow.classList.add("hide");
  }
});

arrow.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
