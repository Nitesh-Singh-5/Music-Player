const music = document.querySelector('audio')
const play = document.getElementById('play');
const img = document.getElementById('img');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let progress = document.getElementById('progress')
let total_duration = document.getElementById('duration');
let current_time = document.getElementById('current_time')

const progress_div = document.getElementById('progress_div')

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
songIndex = 0;

// loadSongs(songs[2]);

const nextSong = ()=>{
  songIndex = (songIndex+1) % songs.length;
  loadSongs(songs[songIndex]);
  playMusic();
}

const prevSong = ()=>{
  songIndex = (songIndex-1 + songs.length) % songs.length;
  loadSongs(songs[songIndex]);
  playMusic();
}

// Progress js works

music.addEventListener('timeupdate',(event) =>{
  // console.log(event);
  const{currentTime,duration} = event.srcElement;
  // console.log(currentTime);
  // console.log(duration);

  let progress_time = (currentTime/duration)*100;
  progress.style.width = `${progress_time}%`;

  // music duration update

  let min_duration = Math.floor(duration/60);
  let sec_duration = Math.floor(duration%60);
  // console.log(min_duration);
  // console.log(sec_duration);

  let tot_duration = `${min_duration}:${sec_duration}`;
  if(duration){
    total_duration.textContent = `${tot_duration}`
  }

  // current duration update
  
  let min_currentTime = Math.floor(currentTime/60);
  let sec_currentTime = Math.floor(currentTime%60);

  if(sec_currentTime<10){
    sec_currentTime = `0${sec_currentTime}`;
  }
  let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
  current_time.textContent = `${tot_currentTime}`
})

// progress on click in progress bar

progress_div.addEventListener('click',(event)=>{
  // console.log(event);
  const{duration} = music;

  let move_progress = (event.offsetX/event.srcElement.clientWidth)*duration;
  
  music.currentTime = move_progress;
})


//if music ended next song function
music.addEventListener("ended",nextSong);
next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);