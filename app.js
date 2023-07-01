/*--barra del nav--*/
window.addEventListener('scroll',function(){
   var header = document.querySelector('header');
   header.classList.toggle('sticky',window.scrollY > 0);
});

/*-- filtro de juegos --*/
let list = document.querySelectorAll('.list');
let card = document.querySelectorAll ('.card');
for(let i = 0; i<list.length; i++){
  list[i].addEventListener('click',function() {
   for(let j=0; j<list.length; j++){
    list[j].classList.remove('active');
   }
   this.classList.add('active');
   
   let dataFilter = this.getAttribute('data-filter');

   for(let k=0; k<card.length; k++){
    card[k].classList.remove('active');
    card[k].classList.add('hide');
    for (let k = 0; k < card.length; k++) {
      card[k].classList.remove('active');
      
      if (card[k].getAttribute('data-item') == dataFilter || dataFilter == 'All') {
        card[k].classList.remove('hide');
        card[k].classList.add('active');
      } else {
        card[k].classList.add('hide');
      }
    }
        }
   }
  )}
/*---slider ---*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); /*contar segundos de slider*/
}