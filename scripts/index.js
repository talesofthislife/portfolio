window.onload = function(){
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('overlay-down');
    setTimeout(function(){
        overlay.classList.remove('overlay-down');
        overlay.classList.add('overlay-up');
        
    },900)
}
