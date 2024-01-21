console.log("welcome to js of spotify");

let play = document.querySelector("#play");
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let gif = document.querySelector("#gif");
let range = document.querySelector("#range");

let songitem = Array.from(document.getElementsByClassName("song"))

let audio = new Audio("Spotify Files/songs/1.mp3");

let songindex = 0;

let songs = [
  {
    songName: "Warriyo",
    filePath: "Spotify Files/songs/1.mp3",
    coverPath: "Spotify Files/covers/1.jpg",
  },
  {
    songName: "Chalo",
    filePath: "Spotify Files/songs/2.mp3",
    coverPath: "Spotify Files/covers/2.jpg",
  },
  {
    songName: "DEAF KEV",
    filePath: "Spotify Files/songs/3.mp3",
    coverPath: "Spotify Files/covers/3.jpg",
  },
  {
    songName: "Diffrent Heaven",
    filePath: "Spotify Files/songs/4.mp3",
    coverPath: "Spotify Files/covers/4.jpg",
  },
  {
    songName: "anji Heroes",
    filePath: "Spotify Files/songs/5.mp3",
    coverPath: "Spotify Files/covers/5.jpg",
  },
  {
    songName: "Rabba",
    filePath: "Spotify Files/songs/6.mp3",
    coverPath: "Spotify Files/covers/6.jpg",
  },
  {
    songName: "Sakhiyaan",
    filePath: "Spotify Files/songs/7.mp3",
    coverPath: "Spotify Files/covers/7.jpg",
  },
  {
    songName: "Bhula Dena",
    filePath: "Spotify Files/songs/8.mp3",
    coverPath: "Spotify Files/covers/8.jpg",
  },
  {
    songName: "Tumhari Kasam",
    filePath: "Spotify Files/songs/9.mp3",
    coverPath: "Spotify Files/covers/9.jpg",
  },
  {
    songName: "Na Jaana",
    filePath: "Spotify Files/songs/10.mp3",
    coverPath: "Spotify Files/covers/10.jpg",
  },
];

play.addEventListener("click", () => {
  console.log("play cliked");
  if (audio.paused || audio <= 0) {
    audio.play();
    play.classList.remove("fa-play-circle");
    play.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audio.pause();
    play.classList.remove("fa-pause-circle");
    play.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

audio.addEventListener("timeupdate", () => {
  console.log("time upadted");
  progress = parseInt((audio.currentTime / audio.duration) * 100);
  range.value = progress;
  console.log("progressing time.......");
});

range.addEventListener("change", () => {
  audio.currentTime = (range.value * audio.duration) / 100;
});


songitem.forEach( (ele, i)=>{
  console.log( ele , i );
  ele.getElementsByTagName("img")[0].src=songs[i].coverPath;
  ele.getElementsByClassName("songName")[0].innerText= songs[i].songName;
});

