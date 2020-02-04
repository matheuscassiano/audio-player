import { secountsToMinutes } from './utils.js';

export default {
  get() {
    this.cover = document.querySelector(".card-image");
    this.title = document.querySelector(".card-content h5");
    this.artist = document.querySelector(".artist");
    this.playPause = document.querySelector("#play-pause");
    this.mute = document.querySelector("#mute");
    this.volume = document.querySelector("#volControl");
    this.seekbar = document.querySelector("#seekbar");
    this.currentDuration = document.querySelector("#current-duration");
    this.totalDuration = document.querySelector("#total-duration");
  },

  createAudioElement(audio) {
    this.audio = new Audio(audio);
  },

  actions() {
    this.audio.onended = () => this.next();

    this.audio.ontimeupdate = () => this.timeUpdate();
    this.playPause.onclick = () => this.togglePlayPause();
    this.mute.onclick = () => this.toggleMute();
    this.volume.oninput = () => this.setVol(this.volume.value);
    this.volume.onchange = () => this.setVol(this.volume.value);
    this.seekbar.oninput = () => this.setSeek(this.seekbar.value);
    this.seekbar.onchange = () => this.setSeek(this.seekbar.value);
    this.seekbar.max = this.audio.duration;
    this.totalDuration.innerText = secountsToMinutes(this.audio.duration); 
  }
};
