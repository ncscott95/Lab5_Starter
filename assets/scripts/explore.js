// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;

let voiceSelect;
let textToSpeak;
let playButton;
let faceImage;

let voices = [];

// face image paths
const smilingImagePath = "assets/images/smiling.png";
const smilingOpenImagePath = "assets/images/smiling-open.png";

// face image alt texts
const smilingImageAltText = "Smiling face";
const smilingOpenImageAltText = "Smiling face with open mouth";

function init() {
  voiceSelect = document.getElementById("voice-select");
  textToSpeak = document.getElementById("text-to-speak");
  playButton = document.querySelector("#explore > button");
  faceImage = document.querySelector("#explore > img");

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  playButton.addEventListener('click', () => {
    startTalking();
  });
}

function populateVoiceList() {
  voices = synth.getVoices();

  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += " - DEFAULT";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  }
}

function startTalking() {
  const utterThis = new SpeechSynthesisUtterance(textToSpeak.value);
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

  for (const voice of voices) {
    if (voice.name === selectedOption) {
      utterThis.voice = voice;
    }
  }

  utterThis.onend = (event) => stopTalking();
  synth.speak(utterThis);

  faceImage.src = smilingOpenImagePath;
  faceImage.alt = smilingOpenImageAltText;
}

function stopTalking() {
  faceImage.src = smilingImagePath;
  faceImage.alt = smilingImageAltText;
}