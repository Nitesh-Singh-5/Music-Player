
const music = document.querySelector('audio')
const play = document.getElementById('play');
const img = document.getElementById('img');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const songs = [
  {  
    name: "libbas",
    title: "Libbas",
    artist:"kaka",
   },
   {  
    name: "Temporary Pyar",
    title: "Temporary Pyar",
    artist:"kaka",
   },
   {  
    name: "Keh Len De",
    title: "Keh Len De",
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

// changing the music Data

const loadSongs = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = "music/"+ songs.name + '.mp3';
  img.src = 'images/'+ songs.name+'.jpg';
};

loadSongs(songs[2]);