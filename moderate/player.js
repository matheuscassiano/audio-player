window.player = {
  cover: document.querySelector(".card-img"),
  title: document.querySelector(".card-content h5"),
  artist: document.querySelector(".artist"),
  audio: document.querySelector("audio"),  
  
  audioData: audios, // Pegando valores do arquivo data.js semelhante ao consumo de uma api rest
  currentAudio: {},
  currentPlaying: 0,
  
  start(){
    this.update();
    this.audio.onended = () => this.next();
  },
  
  next(){
    this.currentPlaying++;
    if(this.currentPlaying == this.audioData.length) this.restart();
    this.update();
  },

  update(){
    this.currentAudio = this.audioData[this.currentPlaying];
    this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover`;
    this.title.innerText = this.currentAudio.title;
    this.artist.innerText = this.currentAudio.artist;
    this.audio.src = path(this.currentAudio.file);
  },

  restart(){
    this.currentPlaying = 0;
    this.update();
  }
};