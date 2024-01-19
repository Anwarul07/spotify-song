console.log("welcome to js of spotify");

let play = document.querySelector("#play");
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let gif = document.querySelector("#gif");
let range = document.querySelector("#range");

let audio = new Audio("Spotify Files/songs/1.mp3");

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
