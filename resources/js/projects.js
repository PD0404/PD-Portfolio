let slideIndex = [1,1];
let slideId = ["slidesPortfolio", "slidesBuilder"]
showSlides(1, 0);
showSlides(1, 1);

function moveSlides(n, num) {
  showSlides(slideIndex[num] += n, num);
}

function showSlides(n, num) {
  let i;
  let slides = document.getElementsByClassName(slideId[num]);
  if (n > slides.length) {slideIndex[num] = 1}
  if (n < 1) {slideIndex[num] = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex[num]-1].style.display = "block";
}
