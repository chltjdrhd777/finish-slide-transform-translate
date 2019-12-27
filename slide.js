const forestSlide = document.querySelector('.forest-slide');
const forestImages = document.querySelectorAll('.forest-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = forestImages[0].clientWidth;

forestSlide.style.transform = 'translateX(' + (-size*counter)+'px)';

function go(){
  if(counter>= forestImages.length -1 ) return;
  forestSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  forestSlide.style.transform = 'translateX(' + (-size*counter)+'px)';
}

function goBack(){
  if(counter<= 0) return;
  forestSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  forestSlide.style.transform = 'translateX(' + (-size*counter)+'px)';
}

function reset(){
  if(forestImages[counter].id === 'lastClone'){
    forestSlide.style.transition = "none";
    counter = forestImages.length -2;
    forestSlide.style.transform = 'translateX(' + (-size*counter)+'px)';
 }
    if(forestImages[counter].id === 'firstClone'){
      forestSlide.style.transition = "none";
      counter = forestImages.length -counter;
      forestSlide.style.transform = 'translateX(' + (-size*counter)+'px)';
 }
}
prevBtn.addEventListener('click', goBack);
nextBtn.addEventListener('click', go);
forestSlide.addEventListener('transitionend', reset);
console.log(counter);
