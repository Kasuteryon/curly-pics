// DETECTA VIEWPORT PARA CSS ANIMATIONS ^u^
window.addEventListener('scroll', () =>{
    let nav = document.querySelector('nav');
  
    if (window.scrollY > 100)
    {
      //nav.classList.remove('fixed-top');

      nav.classList.add('navbar-white');
    }else{
      nav.classList.remove('navbar-white');
      
      //nav.classList.add('fixed-top');
    }
    
  });

let scroll = window.requestAnimationFrame || ((callback) =>{
    window.setTimeout(callback, 1000/6)
});

let elementsToShow = document.querySelectorAll('.show-on-scroll');

const loop = () => {
    elementsToShow.forEach((element) => {
        if (isElementInViewport(element)){
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop);
};

loop();

function isElementInViewport(el) {
    
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  let rect = el.getBoundingClientRect();

  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}