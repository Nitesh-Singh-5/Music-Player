
const music = document.querySelector('audio')
const play = document.getElementById('play');
const img = document.getElementById('img');

isPlaying = false;

const playMusic=()=>{
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play",'fa-pause')
    img.classList.add('anime')
}

// for pause function
const pauseMusic=()=>{
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause",'fa-play')
    img.classList.remove('anime');
}

play.addEventListener('click',()=>{
    if(isPlaying){
        pauseMusic();      
    }else{
        playMusic();
    }
})