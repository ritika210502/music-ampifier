console.log("Welcome to Music Amplifier");
//initalize varible
let songIndex = 1;
let audioElement = new Audio(`/punjabi/${songIndex}.mp3`);
let masterPlay = document.getElementById('masterPlay');
let masterSongName=document.getElementById('masterSongName');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { songName: "Kya baat he", filePath:"/punjabi/1.mp3", coverPath: "/punjabi/1_cover.jpg" },
    { songName: "Patola", filePath: "/punjabi/2.mp3", coverPath: "/punjabi/2_cover.jpg" },
    { songName: "Lahore", filePath: "/punjabi/3.mp3", coverPath: "/punjabi/3_cover.jpg" },
    { songName: "High rated gabru", filePath: "/punjabi/4.mp3", coverPath: "/punjabi/4_cover.jpg" },
    { songName: "Suit suit", filePath: "/punjabi/5.mp3", coverPath: "/punjabi/5_cover.jpg" },
    { songName: "Naah", filePath:"/punjabi/6.mp3", coverPath: "/punjabi/6_cover.jpg" },

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
        audioElement.src=`/punjabi/${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle'); 



    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`/punjabi/${songIndex}.mp3`;
    audioElement.currentTime=0;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle'); 
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=7;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`/punjabi/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle'); 
})