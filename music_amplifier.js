console.log("Welcome to Music Amplifier");
//initalize varible
let songIndex = 1;
let audioElement = new Audio(`songs/${songIndex}.mp3`);
let masterPlay = document.getElementById('masterPlay');
let masterSongName=document.getElementById('masterSongName');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { songName: "Ashayein", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Bekhayali", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Galliyan", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Jugnu", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Kar gayi chull", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Mehndi wale haath", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Srivalli", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Teri aakhon me", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Tu meri ki lagdi", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Tu aake dekh le", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audioElement.play();
//handle play/pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;


    }
})
// //listen events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    //  console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle'); 

    })


}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle'); 



    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>10){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle'); 
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=10){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle'); 
})