
const music = document.querySelector('audio')
const play = document.getElementById('play');

play.addEventListener('click',()=>{
    music.play();
    play.classList.replace("fa-play",'fa-pause')
})
