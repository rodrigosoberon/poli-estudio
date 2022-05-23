let slideIndex = 0;

showSlides();

// * Función para slideShow
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); //? Ajustar tiempo de slideShow
}

// * Navbar vertical
function openNav() {
  document.getElementById("mySidenav").style.width = "250px"; //? Ancho del navbar
  document.getElementById("icono-menu").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("icono-menu").style.display = "block";
}
