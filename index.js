const burger = document.getElementById("burger-container");
const closeContainer = document.getElementById("close-container");

burger.addEventListener("click", () => {
  closeContainer.style.opacity = Math.abs(closeContainer.style.opacity - 1);
});
