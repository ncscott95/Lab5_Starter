// expose.js

window.addEventListener('DOMContentLoaded', init);

// horn image paths
const noHornImagePath = "assets/images/no-image.png"
const airHornImagePath = "assets/images/air-horn.svg"
const carHornImagePath = "assets/images/car-horn.svg"
const partyHornImagePath = "assets/images/party-horn.svg"

// horn audio alt texts
const noHornAltText = "No image selected";
const airHornAltText = "Air horn image";
const carHornAltText = "Car horn image";
const partyHornAltText = "Party horn image";

// horn audio paths
const noHornAudioPath = "";
const airHornAudioPath = "assets/audio/air-horn.mp3";
const carHornAudioPath = "assets/audio/car-horn.mp3";
const partyHornAudioPath = "assets/audio/party-horn.mp3";

// volume icon image paths
const volume0ImagePath = "assets/icons/volume-level-0.svg";
const volume1ImagePath = "assets/icons/volume-level-1.svg";
const volume2ImagePath = "assets/icons/volume-level-2.svg";
const volume3ImagePath = "assets/icons/volume-level-3.svg";

function init() {
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("header + img");
  const audioPlayer = document.getElementsByTagName("audio").item(0);
  const volumeInput = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls > img");
  const playButton = document.getElementsByTagName("button").item(0);
  const confetti = new JSConfetti();

  hornSelect.addEventListener('change', (event) => {
    setHorn(event.target.value, hornImage, audioPlayer);
  });

  volumeInput.addEventListener('change', (event) => {
    setVolume(event.target.value, audioPlayer, volumeIcon);
  });

  playButton.addEventListener('click', () => {
    playHorn(audioPlayer, hornSelect, confetti);
  });
}

function setHorn(hornName, image, audio) {
  switch (hornName) {
    case "air-horn":
      image.src = airHornImagePath;
      image.alt = airHornAltText;
      audio.src = airHornAudioPath;
      break;
    case "car-horn":
      image.src = carHornImagePath;
      image.alt = carHornAltText;
      audio.src = carHornAudioPath;
      break;
    case "party-horn":
      image.src = partyHornImagePath;
      image.alt = partyHornAltText;
      audio.src = partyHornAudioPath;
      break;
    default:
      image.src = noHornImagePath;
      image.alt = noHornAltText;
      audio.src = noHornAudioPath;
  }
}

function setVolume(volume, audio, icon) {
  audio.volume = volume / 100;

  if (volume == 0) {
    icon.src = volume0ImagePath;
  } else if (volume < 33) {
    icon.src = volume1ImagePath;
  } else if (volume < 67) {
    icon.src = volume2ImagePath;
  } else {
    icon.src = volume3ImagePath;
  }
}

function playHorn(audio, select, confetti) {
  audio.play();

  if (select.value === "party-horn") {
    confetti.addConfetti();
  }
}