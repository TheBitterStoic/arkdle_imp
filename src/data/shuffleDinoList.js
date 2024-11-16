// shuffleDinoList.js

const dinoList = [
// src/data/soundList.js
  'Achatinasound.mp3',
  'Allosaurussound.mp3',
  'Amargasaurussound.mp3',
  'Ammonitessound.mp3',
  'Andrewsarchussound.mp3',
  'Ankylosaurussound.mp3',
  'Araneosound.mp3',
  'Archaeopteryxsound.mp3',
  'Argentavissound.mp3',
  'Arthropluerasound.mp3',
  'Astrocetussound.mp3',
  'Astrodelphissound.mp3',
  'Baryonyxsound.mp3',
  'Basilisksound.mp3',
  'Basilosaurussound.mp3',
  'Bloodstalkersound.mp3',
  'Brontosaurussound.mp3',
  'Bulbdogsound.mp3',
  'Carbonemyssound.mp3',
  'Carcharodontosaurussound.mp3',
  'Carnotaurussound.mp3',
  'Castoroidessound.mp3',
  'Chalicotheriumsound.mp3',
  'Cnidariasound.mp3',
  'Coelacanthsound.mp3',
  'Compysound.mp3',
  'Crystal Wyvernsound.mp3',
  'Daeodonsound.mp3',
  'Deathwormsound.mp3',
  'Deinonychussound.mp3',
  'Desmodussound.mp3',
  'Dilophosaursound.mp3',
  'Dimetrodonsound.mp3',
  'Dimorphodonsound.mp3',
  'Dinopithecussound.mp3',
  'Diplocaulussound.mp3',
  'Diplodocussound.mp3',
  'Direwolfsound.mp3',
  'Dungbeetlesound.mp3',
  'Electrophorussound.mp3',
  'Featherlightsound.mp3',
  'Feroxsound.mp3',
  'Forest Titansound.mp3',
  'Gigantopithecussound.mp3',
  'Giganotosaurussound.mp3',
  'Glowbugsound.mp3',
  'Glowtailsound.mp3',
  'Hesperornissound.mp3',
  'Hyaenodonsound.mp3',
  'IceTitansound.mp3',
  'Icthyornissound.mp3',
  'Jugbugsound.mp3',
  'Kairukusound.mp3',
  'Karkinossound.mp3',
  'Kentrosaurussound.mp3',
  'KingTitansound.mp3',
  'Lampreysound.mp3',
  'Leedsichthyssound.mp3',
  'Lioplurodonsound.mp3',
  'Mammothsound.mp3',
  'Mantissound.mp3',
  'Megalaniasound.mp3',
  'Megalosaurussound.mp3',
  'Megatheriumsound.mp3',
  'Namelesssound.mp3',
  'Ottersound.mp3',
  'Pachysound.mp3',
  'Paraceratheriumsound.mp3',
  'Parasaursound.mp3',
  'Pegomastaxsound.mp3',
  'Pelagornissound.mp3',
  'Phoenixsound.mp3',
  'Procoptodonsound.mp3',
  'Pteranodonsound.mp3',
  'Purloviasound.mp3',
  'Quetzalsound.mp3',
  'Raptorsound.mp3',
  'Ravagersound.mp3',
  'Reapersound.mp3',
  'Rexsound.mp3',
  'RockDrakesound.mp3',
  'Rollratsound.mp3',
  'Seekersound.mp3',
  'Shinehornsound.mp3',
  'Sinomacropssound.mp3',
  'Spinosaurussound.mp3',
  'Stegosaurussound.mp3',
  'Tapejarasound.mp3',
  'Therizinosaurussound.mp3',
  'Thylacoleosound.mp3',
  'Titanosaursound.mp3',
  'Troodonsound.mp3',
  'Tropeognathussound.mp3',
  'Tusoteuthissound.mp3',
  'Wyvernsound.mp3',
  'Yutyrannussound.mp3'

];

function shuffleArray(array) {
  let shuffled = array.slice();

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

const shuffledDinoList = shuffleArray(dinoList);

console.log(shuffledDinoList);
console.dir(shuffledDinoList, { maxArrayLength: null });
