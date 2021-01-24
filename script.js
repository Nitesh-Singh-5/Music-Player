
const music = document.querySelector('audio')
const play = document.getElementById('play');
const img = document.getElementById('img');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const songs = [
  {  
    name: "Nitesh",
    tittle: "Libbas",
    artist:"kaka",
   },
   {  
    name: "Nitesh",
    tittle: "temporary pyar",
    artist:"kaka",
   },
   {  
    name: "Nitesh",
    tittle: "Keh len de",
    artist:"kaka",
   }
]

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
  isPlaying ? pauseMusic() : playMusic();
})

changing 