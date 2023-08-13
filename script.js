let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : 'images/adiye.jpg',
        name : 'Adiyae Azhagae',
        artist : 'justin prabhakaran',
        music : 'music/Adiyae Azhagae.mp3'
    },
    {
        img : 'images/Alleyes.jpg',
        name : 'All Eyez On Me',
        artist : 'DNDM',
        music : 'music/All Eyez On Me - Gangsta Remix.mp3'
    },
    {
        img : 'images/girlsame.jpg',
        name : 'All girl are the same',
        artist : ' juice WRLD',
        music : 'music/All Girls Are The Same.mp3'
    },
    {
        img : 'images/badboys.jpg',
        name : 'Bad Boys',
        artist : 'Inner circel',
        music : 'music/Bad Boys (Theme from COPS).mp3'
    },{
        img : 'images/BlindingLights.jpg',
        name : 'Blinding Lights',
        artist : 'The weekend',
        music : 'music/Blinding Lights.mp3'
    },{
        img : 'images/BrazilianPhonk.jpg',
        name : 'Brazilian Phonk',
        artist : 'slow boy',
        music : 'music/Brazilian Phonk Mano - Super Slowed.mp3'
    },{
        img : 'images/COWBELLWARRIOR.jpg',
        name : 'COWBELL WARRIOR',
        artist : 'SXMPRA',
        music : 'music/COWBELL WARRIOR!.mp3'
    },{
        img : 'images/Džanum.jpg',
        name : 'Džanum',
        artist : 'Teya dora',
        music : 'music/Džanum.mp3'
    },{
        img : 'images/Formula.jpg',
        name : 'Formula',
        artist : 'Labrinth',
        music : 'music/Formula.mp3'
    },{
        img : 'images/Giving.jpg',
        name : 'Giving Me',
        artist : 'Jazzy',
        music : 'music/Giving Me.mp3'
    },{
        img : 'images/Hey.jpg',
        name : 'Hey Nima',
        artist : 'Fejo',
        music : 'music/Hey Nima.mp3'
    },{
        img : 'images/i.jpeg',
        name : 'I Aint Worried',
        artist : 'One republic',
        music : 'music/I Aint Worried.mp3'
    },{
        img : 'images/Jericho.jpg',
        name : 'Jericho ',
        artist : 'iniko',
        music : 'music/Jericho.mp3'
    },{
        img : 'images/Limbo.jpg',
        name : 'Limbo',
        artist : 'Freddie dredd',
        music : 'music/Limbo.mp3'
    },{
        img : 'images/Moongil.jpg',
        name : 'Moongil Thottam',
        artist : 'A,R Rahman',
        music : 'music/Moongil Thottam.mp3'
    },{
        img : 'images/Myself.jpg',
        name : ' Myself',
        artist : 'Bazzi',
        music : 'music/Myself.mp3'
    },{
        img : 'images/pense.jpg',
        name : 'Ny pense plus',
        artist : 'Tayc',
        music : 'music/Ny pense plus.mp3'
    },{
        img : 'images/Paro.jpg',
        name : ' Paro',
        artist : 'Nej',
        music : 'music/Paro - Speed Up.mp3'
    },{
        img : 'images/Perfect.jpg',
        name : 'Perfect ',
        artist : 'Ed Sheeran',
        music : 'music/Perfect.mp3'
    },{
        img : 'images/Psycho.jpg',
        name : 'Psycho Kanmani',
        artist : 'havoc brothers',
        music : 'music/Psycho Kanmani.mp3'
    },{
        img : 'images/Ranam.jpg',
        name : ' Ranam',
        artist : 'Ajaey shravan',
        music : 'music/Ranam - Title Track.mp3'
    },{
        img : 'images/Say.jpg',
        name : ' Say YesTo Heaven',
        artist : 'swanxe',
        music : 'music/Say YesTo Heaven.mp3'
    },{
        img : 'images/Sudden.jpg',
        name : 'Sudden Delight',
        artist : 'Santhosh Narayanan',
        music : 'music/Sudden Delight.mp3'
    },{
        img : 'images/Superman.jpg',
        name : ' Superman',
        artist : 'Eminem',
        music : 'music/Superman.mp3'
    },{
        img : 'images/Swim.jpg',
        name : 'Swim ',
        artist : 'Chase atlantic',
        music : 'music/Swim.mp3'
    },{
        img : 'images/Those.jpg',
        name : 'Those Eyes',
        artist : 'New west',
        music : 'music/Those Eyes.mp3'
    },{
        img : 'images/Till.jpg',
        name : 'Till I Collapse',
        artist : 'Eminem',
        music : 'music/Till I Collapse.mp3'
    },{
        img : 'images/Tongue.jpg',
        name : 'Tongue ',
        artist : 'Maribou State',
        music : 'music/Tongue.mp3'
    },{
        img : 'images/WAKE.jpg',
        name : 'WAKE UP',
        artist : 'Moondeity',
        music : 'music/WAKE UP!.mp3'
    },{
        img : 'images/WASTE.jpg',
        name : 'WASTE ',
        artist : 'Kxllswxtch',
        music : 'music/WASTE.mp3'
    },{
        img : 'images/Will.jpg',
        name : ' We Will Rock You',
        artist : 'Queen',
        music : 'music/We Will Rock You - Remastered 2011.mp3'
    },{
        img : 'images/Whistle.jpg',
        name : 'Whistle',
        artist : 'Flo Rida',
        music : 'music/Whistle.mp3'
    },{
        img : 'images/Never.jpg',
        name : 'Woo x I Was Never There',
        artist : 'Muppet DJ',
        music : 'music/Woo x I Was Never There (Sped up) - Remix.mp3'
    },{
        img : 'images/Отключаю.jpg',
        name : 'Отключаю телефон',
        artist : 'instasmika',
        music : 'music/Отключаю телефон (Slowed).mp3'
    },{
        img : 'images/Breaks.jpg',
        name : 'Nothing Breaks Like a Heart',
        artist : 'Miley Cyrus',
        music : 'music/Nothing Breaks Like a Heart (feat. Miley Cyrus).mp3'
    }
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
