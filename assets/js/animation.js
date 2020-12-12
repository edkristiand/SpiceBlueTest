var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

let menu = document.querySelector('.sub-menu li .menu-item');

// menu.addEventListener('mouseover', function(){
//     let bg = document.querySelector('.hover-bg');
//     bg.style.transform='translate(-30%, 0px)';
// })

// menu.addEventListener('mouseout', function(){
//     let bg = document.querySelector('.hover-bg');
//     bg.style.transform='translate(103%, 0px)';
//     setTimeout(function(){
//         bg.style.transform='translate3d(-103%, 0px, 0px)';
//     }, 500)
    
// })

let menuIcon = document.getElementById('burger-menu-icon');
menuIcon.addEventListener('click', function(){
    let bg = document.getElementById('burger-menu');

    if(!document.querySelector('.is-open')) {
        bg.classList.add("is-open");
        bg.style.opacity='1';
        bg.style.transform='translateY(0)';
    }
});

let closeIcon = document.getElementById('burger-close-icon');
closeIcon.addEventListener('click', function(){
    let bg = document.getElementById('burger-menu');

    if(document.querySelector('.is-open')) {
        bg.classList.remove("is-open");
        bg.style.opacity='0';
        bg.style.transform='translateY(-100%)';
    }
});

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop);
}

loop();

function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();

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