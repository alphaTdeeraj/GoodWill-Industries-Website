const slideshow = document.querySelectorAll('[data-component="slideshow"]')[0];

//this function creates a slideshow of the images
const slides = document.querySelectorAll(
  `#${slideshow.id} [role="list"] .slide`
);

let index = 0,
  time = 2000;
slides[index].classList.add("active");

setInterval(() => {
  slides[index].classList.remove("active");

  index++;
  if (index === slides.length) index = 0;

  slides[index].classList.add("active");
}, time);
