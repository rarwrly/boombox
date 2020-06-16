function Track(title, artist, source) {
    this.title = title
    this.artist = artist
    this.source = source
}

let Track1 = new Track('Genocide','Silent Carrion','silentCarrion/01Genocide.mp3');
let Track2 = new Track('Death Is Our Only God','Silent Carrion','silentCarrion/02DeathIsOurOnlyGod.mp3');
let Track3 = new Track('The Harvest','Silent Carrion','silentCarrion/03TheHarvest.mp3');

let trackList = [Track1, Track2, Track3]


var myAudio = new Audio();

function Boombox (trackList) {
    
    this.currentSong = 0
    this.songs = trackList;

    this.playSongs = function () { console.log(myAudio.src)
        if (!myAudio.paused || !myAudio.src){
                myAudio.src = this.songs[this.currentSong].source;
            }
        myAudio.play()
        document.getElementById('trackName').innerHTML = '<marquee>'+this.songs[this.currentSong].title + ' by '+ this.songs[this.currentSong].artist+'</marquee>'
    }
    this.pauseSongs = function () {
        myAudio.pause()
        
    }
    
    this.nextSong = function () {
        this.currentSong++
        myAudio.src = this.songs[this.currentSong].source
        myAudio.play()
        document.getElementById('trackName').innerHTML = '<marquee>'+this.songs[this.currentSong].title + ' by '+ this.songs[this.currentSong].artist+'</marquee>'
    }
    this.previousSong = function () {
        this.currentSong--
        myAudio.src = this.songs[this.currentSong].source
        myAudio.play()
        document.getElementById('trackName').innerHTML = '<marquee>'+this.songs[this.currentSong].title + ' by '+ this.songs[this.currentSong].artist+'</marquee>'
    }
    this.stopSongs = function () {
        myAudio.src = this.songs[this.currentSong].source
        myAudio.pause()
    }
    this.shuffleSongs = function (){
        console.log('current song' + this.currentSong)
        let shuffle = undefined;
        do{
            shuffle = Math.floor(Math.random()* trackList.length)
            console.log(' shuffle '+ shuffle)
        }
        while (this.currentSong == shuffle)
        this.currentSong = shuffle
        this.playSongs ()
    }
}

var music = new Boombox(trackList)

let playButton = document.getElementById('playButton')
let pauseButton = document.getElementById('pauseButton')
let nextButton = document.getElementById('nextButton')
let previousButton = document.getElementById('previousButton')
let stopButton = document.getElementById('stopButton')
let shuffleButton =document.getElementById('shuffleButton')

playButton.addEventListener("click", function() {
    music.playSongs()
})
pauseButton.addEventListener("click", function() {
    music.pauseSongs()
})
nextButton.addEventListener("click", function() {
    music.nextSong()
})
previousButton.addEventListener("click", function() {
    music.previousSong()
})
stopButton.addEventListener("click", function() {
    music.stopSongs()
})
shuffleButton.addEventListener("click", function() {
    music.shuffleSongs()
})
myAudio.addEventListener("ended", function() {
    music.nextSong()
})




