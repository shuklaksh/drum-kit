document.addEventListener('keydown',play);
const keys = document.querySelectorAll('.box');
keys.forEach(key => key.addEventListener('transitionend',removeClass));
    

function play(e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const box = document.querySelector(`div[data-key = "${e.keyCode}"]`);
    if (!audio) return;
    box.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function removeClass(e){
    this.classList.remove('playing');
}