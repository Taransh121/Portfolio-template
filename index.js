// const project1 = document.getElementById("project1");
// const project2 = document.getElementById("project2");
// const project3 = document.getElementById("project3");
// const project4 = document.getElementById("project4");
// const project5 = document.getElementById("project5");
// const project6 = document.getElementById("project6");
// project1.addEventListener("click", (e) => {
//     e.preventDefault();
//     // window.open('https://github.com/Taransh121/NEWSAPP', '_blank');
// })
// project2.addEventListener("click", (e) => {
//     e.preventDefault();
//     window.open('https://taransh121.github.io/Tic-Tac-toe/', '_blank');
// })
// project3.addEventListener("click", (e) => {
//     e.preventDefault();
//     window.open('https://taransh121.github.io/Calculator/', '_blank');
// })
// project4.addEventListener("click", (e) => {
//     e.preventDefault();
//     window.open('https://github.com/Taransh121/inotebook', '_blank');
// })
// project5.addEventListener("click", (e) => {
//     e.preventDefault();
//     window.open('https://taransh121.github.io/MakeuppWebsite/', '_blank');
// })
// project6.addEventListener("click", (e) => {
//     e.preventDefault();
//     window.open('https://taransh121.github.io/CLOUD-PROJECT/', '_blank');
// })
const myrole = document.getElementById("myrole")
var1 = " Web Developer.";
var2 = " Professional Coder.";
var3 = " Designer."

var Temp = true

setInterval(() => {
    myrole.innerHTML = Temp ? var1 : var2;
    Temp = !Temp
}, 2000)

//Modal
// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//     myInput.focus()
// })




//Slideshow
var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
}