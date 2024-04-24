console.log("Welcome!");

let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let audioElement = new Audio("songs/day.mp3");

let albuminfo1 = document.getElementById("album-info1");
let albuminfo2 = document.getElementById("album-info2");

//playing song image===================
let playingSongImg = document.getElementById("playingSongImg");

let songs = [
  {
    songName: "Mahiye Jinna Sohna",
    artist: "Darshan Raval",
    filePath: "songs/1.mp3",
    coverPath: "./assets/card2img.jpeg",
  },
  {
    songName: "Mere pass tum hoo",
    artist: "NFAK",
    filePath: "songs/2.mp3",
    coverPath: "./assets/card3img.jpeg",
  },
  {
    songName: "Naa-Ready",
    artist: "Thalapathy",
    filePath: "songs/3.mp3",
    coverPath: "./assets/card4img.jpeg",
  },
  {
    songName: "True Story Bro",
    artist: "Triggered Insaan",
    filePath: "songs/4.mp3",
    coverPath: "./assets/card8img.jpg",
  },
  {
    songName: "Deep Focus",
    artist: "music",
    filePath: "songs/5.mp3",
    coverPath: "./assets/card7img.jpg",
  },
];

songs.forEach((element, i) => {
  // console.log(element, i);
});

//handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");

    albuminfo1.innerText = songs[songIndex - 1].songName;
    albuminfo2.innerText = songs[songIndex - 1].artist;
    playingSongImg.setAttribute("src", `${songs[songIndex - 1].coverPath}`);

    makeAllPlay();//user defined function 
  }
});

//running pogress bar
audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  let pogress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myPogressBar.value = pogress;
});

//seeking manually on pogress-bar
myPogressBar.addEventListener("change", () => {
  audioElement.currentTime = (myPogressBar.value * audioElement.duration) / 100;
});

//accessing the class
let nameIconPlay = document.querySelectorAll(".nameIconPlay");

function makeAllPlay() {
  for (element of nameIconPlay) {
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
  }
}

for (element of nameIconPlay) {
  console.log(element);
  element.addEventListener("click", (e) => {
    console.log(e.target);
    makeAllPlay(); // user define function

    songIndex = parseInt(e.target.id);

    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");

    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();

    albuminfo1.innerText = songs[songIndex - 1].songName;
    albuminfo2.innerText = songs[songIndex - 1].artist;
    // playingSongImg.src = songs[songIndex-1].coverPath;
    playingSongImg.setAttribute("src", `${songs[songIndex - 1].coverPath}`);

    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  });
}

//next button=================================================================
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 5) {
    songIndex = 1;
  } else {
    songIndex += 1;
  }

  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();

  albuminfo1.innerText = songs[songIndex - 1].songName;
  albuminfo2.innerText = songs[songIndex - 1].artist;
  playingSongImg.setAttribute("src", `${songs[songIndex - 1].coverPath}`);

  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
//previous button=============================================================
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 1) {
    songIndex = 1;
  } else {
    songIndex -= 1;
  }

  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();

  albuminfo1.innerText = songs[songIndex - 1].songName;
  albuminfo2.innerText = songs[songIndex - 1].artist;
  playingSongImg.setAttribute("src", `${songs[songIndex - 1].coverPath}`);

  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

// startFromFirst=====================================

let startFromFirst = document.querySelector("#startFromFirst");

startFromFirst.addEventListener("click", () => {
  audioElement.src = `songs/1.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  songIndex = 0;

  albuminfo1.innerText = songs[0].songName;
  albuminfo2.innerText = songs[0].artist;
  playingSongImg.setAttribute("src", "./assets/card2img.jpeg");
});

// volume=================================================

let volumeRange = document.getElementById("volume");

volumeRange.addEventListener("mousemove", function () {
  audioElement.volume = volumeRange.value / 100;
});

// like songs ==============================================

let heart = document.querySelector("#heart");

heart.addEventListener("click", () => {
  heart.classList.toggle("fa-solid");
  heart.classList.toggle("heart-red");
});

//shuffel==========================================

let shuffel = document.querySelector("#shuffel");

shuffel.addEventListener("click", ()=>{
  shuffel.classList.toggle("green")
});
