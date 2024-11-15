// shuffleDinoList.js

const dinoList = [
'Allosaurus_Saddle.png.jpg',
  'Amargasaurus_Saddle.png.jpg',
  'Andrewsarchus_Saddle.png.jpg',
  'Ankylo_Saddle.png.jpg',
  'Araneo_Saddle.png.jpg',
  'Argentavis_Saddle.png.jpg',
  'Arthropluera_Saddle.png.jpg',
  'Astrocetus_Tek_Saddle.png.jpg',
  'Astrodelphis_Saddle.png.jpg',
  'Baryonyx_Saddle.png.jpg',
  'Basilosaurus_Saddle.png.jpg',
  'Beelzebufo_Saddle.png.jpg',
  'Brontosaurus_Saddle.png.jpg',
  'Carbonemys_Saddle.png.jpg',
  'Carcharodontosaurus_Saddle.png.jpg',
  'Carnotaurus_Saddle.png.jpg',
  'Castoroides_Saddle.png.jpg',
  'Ceratosaurus_Saddle.png.jpg',
  'Chalicotherium_Saddle.png.jpg',
  'Daeodon_Saddle.png.jpg',
  'Deinonychus_Saddle.png.jpg',
  'Desmodus_Saddle.png.jpg',
  'Diplodocus_Saddle.png.jpg',
  'Dire Bear_Saddle.png.jpg',
  'Doedicurus_Saddle.png.jpg',
  'Dunkleosteus_Saddle.png.jpg',
  'Equus_Saddle.png.jpg',
  'Gacha_Saddle.png.jpg',
  'Gallimimus_Saddle.png.jpg',
  'Gasbags_Saddle.png.jpg',
  'Giganotosaurus_Saddle.png.jpg',
  'Ichthyosaurus_Saddle.png.jpg',
  'Iguanodon_Saddle.png.jpg',
  'Kaprosuchus_Saddle.png.jpg',
  'Karkinos_Saddle.png.jpg',
  'Lymantria_Saddle.png.jpg',
  'Maewing_Saddle.png.jpg',
  'Magmasaur_Saddle.png.jpg',
  'Mammoth_Saddle.png.jpg',
  'Managarmr_Saddle.png.jpg',
  'Manta_Saddle.png.jpg',
  'Mantis_Saddle.png.jpg',
  'Basilisk_Saddle.png.jpg',
  'Megachelon_Platform_Saddle.png.jpg',
  'Megalania_Saddle.png.jpg',
  'Megaloceros_Saddle.png.jpg',
  'Megalodon_Saddle.png.jpg',
  'Megalodon_Tek_Saddle.png.jpg',
  'Megalosaurus_Saddle.png.jpg',
  'Megatherium_Saddle.png.jpg',
  'Morellatops_Saddle.png.jpg',
  'Mosasaur_Saddle.png.jpg',
  'Mosasaur_Tek_Saddle.png.jpg',
  'Pachyrhinosaurus_Saddle.png.jpg',
  'Pachy_Saddle.png.jpg',
  'Paracer_Platform_Saddle.png.jpg',
  'Paracer_Saddle.png.jpg',
  'Parasaur_Saddle.png.jpg',
  'Pelagornis_Saddle.png.jpg',
  'Phiomia_Saddle.png.jpg',
  'Plesiosaur_Saddle.png.jpg',
  'Procoptodon_Saddle.png.jpg',
  'Pteranodon_Saddle.png.jpg',
  'Pulmonoscorpius_Saddle.png.jpg',
  'Quetz_Saddle.png.jpg',
  'Raptor_Saddle.png.jpg',
  'Ravager_Saddle.png.jpg',
  'Rex_Saddle.png.jpg',
  'Rex_Tek_Saddle.png.jpg',
  'Rhyniognatha_Saddle.png.jpg',
  'Rock Drake_Saddle.png.jpg',
  'Rock Drake_Tek_Saddle.png.jpg',
  'Rock Golem_Saddle.png.jpg',
  'Roll Rat_Saddle.png.jpg',
  'Sabertooth_Saddle.png.jpg',
  'Sarco_Saddle.png.jpg',
  'Snow Owl_Saddle.png.jpg',
  'Spinosaurus_Saddle.png.jpg',
  'Stegosaurus_Saddle.png.jpg',
  'Tapejara_Saddle.png.jpg',
  'Tapejara_Tek_Saddle.png.jpg',
  'Terror_Bird_Saddle.png.jpg',
  'Therizinosaurus_Saddle.png.jpg',
  'Thorny Dragon_Saddle.png.jpg',
  'Thylacoleo_Saddle.png.jpg',
  'Titanosaur_Platform_Saddle.png.jpg',
  'Trike_Saddle.png.jpg',
  'Tropeognathus_Saddle.png.jpg',
  'Tusoteuthis_Saddle.png.jpg',
  'Velonasaur_Saddle.png.jpg',
  'Woolly_Rhino_Saddle.png.jpg',
  'Yutyrannus_Saddle.png.jpg'
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
