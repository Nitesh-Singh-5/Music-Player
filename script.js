
const music = document.querySelector('audio')
const play = document.getElementById('play');
const img = document.getElementById('img');

play.addEventListener('click',()=>{
    music.play();
    play.classList.replace("fa-play",'fa-pause')
    img.classList.add('anime')
})
