console.log("Welcome to Music Amplifier");
//initalize varible
let songIndex = 1;
let audioElement = new Audio(`/list/${songIndex}.mp3`);
let masterPlay = document.getElementById('masterPlay');
let masterSongName=document.getElementById('masterSongName');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { songName: "Khariyat", filePath:"/list/1.mp3", coverPath: "/list/1_cover.jpg" },
    { songName: "Rait Zara Si", filePath: "/list/2.mp3", coverPath: "/list/2_cover.jpg" },
    { songName: "Tera Fitoor", filePath: "/list/3.mp3", coverPath: "/list/3_cover.jpg" },
    { songName: "Kesariya", filePath: "/list/4.mp3", coverPath: "/list/4_cover.jpg" },
    { songName: "Desh Mere", filePath: "/list/5.mp3", coverPath: "/list/5_cover.jpg" },
    { songName: "O meri laila * dekho ek khaab", filePath: "/list/6.mp3", coverPath: "/list/6_cover.jpg" },
    { songName: "Dekhte dekhte", filePath: "/list/7.mp3", coverPath: "/list/7_cover.jpg" },
    { songName: "Phali dafa", filePath: "/list/8.mp3", coverPath: "/list/8_cover.jpg" },
    { songName: "Wo lamhein wo baatein", filePath: "/list/9.mp3", coverPath: "/list/9_cover.jpg" },
    { songName: "Jab koi baat-DJ", filePath: "/list/10.mp3", coverPath: "/list/10_cover.jpg" },
    { songName: "Ishare Tere", filePath: "/list/11.mp3", coverPath: "/list/11_cover.jpg" },
    { songName: "Patola", filePath: "/list/12.mp3", coverPath: "/list/12_cover.jpg" },
    { songName: "Lahore", filePath: "/list/13.mp3", coverPath: "/list/13_cover.jpg" },
    { songName: "High rated gabru", filePath: "/list/14.mp3", coverPath: "/list/14_cover.jpg" },
    { songName: "Suit Suit", filePath: "/list/15.mp3", coverPath: "/list/15_cover.jpg" },
    { songName: "O saki saki", filePath: "/list/16.mp3", coverPath: "/list/16_cover.jpg" },
    { songName: "Dil ko kara aaya", filePath: "/list/17.mp3", coverPath: "/list/17_cover.jpg" },
    { songName: "Bijlee bijlee", filePath: "/list/18.mp3", coverPath: "/list/18_cover.jpg" },
    { songName: "Titilan warga", filePath: "/list/19.mp3", coverPath: "/list/19_cover.jpg" },
    { songName: "Dance like", filePath: "/list/20.mp3", coverPath: "/list/20_cover.jpg" },
    { songName: "Kya baat he", filePath: "/list/21.mp3", coverPath: "/list/21_cover.jpg" },
    { songName: "Naah", filePath: "/list/22.mp3", coverPath: "/list/22_cover.jpg" },
    { songName: "Tera naam", filePath: "/list/23.mp3", coverPath: "/list/23_cover.jpg" },
    { songName: "Tera ban jauga", filePath: "/list/24.mp3", coverPath: "/list/24_cover.jpg" },
    { songName: "Jugnu", filePath: "/list/25.mp3", coverPath: "/list/25_cover.jpg" },
    { songName: "Bachpan ka pyar", filePath: "/list/26.mp3", coverPath: "/list/26_cover.jpg" },
    { songName: "Kar gayi chull", filePath: "/list/27.mp3", coverPath: "/list/27_cover.jpg" },
    { songName: "Galliyan", filePath: "/list/28.mp3", coverPath: "/list/28_cover.jpg" },
    { songName: "Achyutam Keshavam", filePath: "/list/29.mp3", coverPath: "/list/29_cover.jpg" },
    { songName: "Sukhkarta Dukhakarta", filePath: "/list/30.mp3", coverPath: "/list/30_cover.jpg" },
    { songName: "Deva Shri Ganesha", filePath: "/list/31.mp3", coverPath: "/list/31_cover.jpg" },
    { songName: "Meri ma ke barabar koi nahi", filePath: "/list/32.mp3", coverPath: "/list/32_cover.jpg" },
    { songName: "mera bhola he bhandari", filePath: "/list/33.mp3", coverPath: "/list/33_cover.jpg" },
    { songName: "Aashaayen", filePath: "/list/34.mp3", coverPath: "/list/34_cover.jpg" },
    { songName: "Aarambh he prachand", filePath: "/list/35.mp3", coverPath: "/list/35_cover.jpg" },
    { songName: "Bhaag mikha bhaag", filePath: "/list/36.mp3", coverPath: "/list/36_cover.jpg" },
    { songName: "Kuch Kariye", filePath: "/list/37.mp3", coverPath: "/list/37_cover.jpg" },


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
        audioElement.src=`/list/${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle'); 



    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=37){
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`/list/${songIndex}.mp3`;
    audioElement.currentTime=0;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle'); 
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=37;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`/list/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle'); 
})