const dinoData = [
  {
    name: 'Achatina',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Passive',
    diet: 'Herbivore',
    size: 'Small',
    biome: 'Swamp',
    traversal: 'Ground'
  },
  {
    name: 'Allosaurus',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Plains',
    traversal: 'Ground'
  },
  {
    name: 'Amargasaurus',
    dlc: 'Lost Island',
    releaseDate: '2021',
    temperament: 'Aggressive',
    diet: 'Herbivore',
    size: 'Large',
    biome: 'Temperate Forest',
    traversal: 'Ground'
  },
  {
    name: 'Ammonite',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Passive',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Andrewsarchus',
    dlc: 'Fjordur',
    releaseDate: '2022',
    temperament: 'Opportunistic',
    diet: 'Omnivore',
    size: 'Medium',
    biome: 'Mountains',
    traversal: 'Ground'
  },
  {
    name: 'Angler',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Opportunistic',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Ankylosaurus',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Docile',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Araneo',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Cave',
    traversal: 'Ground'
  },
  {
    name: 'Archaeopteryx',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Fearful',
    diet: 'Herbivore',
    size: 'Small',
    biome: 'Forest',
    traversal: 'Flyer'
  },
  {
    name: 'Argentavis',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Territorial',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Mountain',
    traversal: 'Flyer'
  },
  {
    name: 'Arthropluera',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Cave',
    traversal: 'Ground'
  },
  {
    name: 'Astrocetus',
    dlc: 'Genesis: Part 1',
    releaseDate: '2020',
    temperament: 'Docile',
    diet: 'Carnivore',
    size: 'Extra Large',
    biome: 'Space',
    traversal: 'Flyer'
  },
  {
    name: 'Astrodelphis',
    dlc: 'Genesis: Part 2',
    releaseDate: '2021',
    temperament: 'Curious',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Space',
    traversal: 'Flyer'
  },
  {
    name: 'Attack Drone',
    dlc: 'Base Game',
    releaseDate: '2017',
    temperament: 'Aggressive',
    diet: 'None',
    size: 'Small',
    biome: 'Technology',
    traversal: 'Flyer'
  },
  {
    name: 'Baryonyx',
    dlc: 'Base Game',
    releaseDate: '2017',
    temperament: 'Territorial',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Swamp',
    traversal: 'Swimmer'
  },
  {
    name: 'Basilisk',
    dlc: 'Aberration',
    releaseDate: '2017',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Large',
    biome: 'Cave',
    traversal: 'Ground'
  },
  {
    name: 'Basilosaurus',
    dlc: 'Base Game',
    releaseDate: '2017',
    temperament: 'Passive',
    diet: 'Carnivore',
    size: 'Large',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Beelzebufo',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Languorous',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Swamp',
    traversal: 'Swimmer'
  },
  {
    name: 'Bloodstalker',
    dlc: 'Genesis: Part 1',
    releaseDate: '2020',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Brontosaurus',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Docile',
    diet: 'Herbivore',
    size: 'Extra Large',
    biome: 'Plains',
    traversal: 'Ground'
  },
  {
    name: 'Bulbdog',
    dlc: 'Aberration',
    releaseDate: '2017',
    temperament: 'Passive',
    diet: 'Herbivore',
    size: 'Small',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Carbonemys',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Defensive',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Beach',
    traversal: 'Swimmer'
  },
  {
    name: 'Carcharodontosaurus',
    dlc: 'Base Game',
    releaseDate: '2022',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Extra Large',
    biome: 'Plains',
    traversal: 'Ground'
  },
  {
    name: 'Carnotaurus',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Plains',
    traversal: 'Ground'
  },
  {
    name: 'Castoroides',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Friendly',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Swamp',
    traversal: 'Ground'
  },
  {
    name: 'Chalicotherium',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Territorial',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Cnidaria',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Coelacanth',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Reactive',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Compy',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Curious',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Crystal Wyvern',
    dlc: 'Crystal Isles',
    releaseDate: '2020',
    temperament: 'Docile',
    diet: 'Carnivore',
    size: 'Large',
    biome: 'Beach',
    traversal: 'Flyer'
  },
  {
    name: 'Daeodon',
    dlc: 'Base Game',
    releaseDate: '2017',
    temperament: 'Aggressive',
    diet: 'Omnivore',
    size: 'Medium',
    biome: 'Plains',
    traversal: 'Ground'
  },
  {
    name: 'Deathworm',
    dlc: 'Scorched Earth',
    releaseDate: '2016',
    temperament: 'Territorial',
    diet: 'Carnivore',
    size: 'Extra Large',
    biome: 'Desert',
    traversal: 'Ground'
  },
  {
    name: 'Defense Unit',
    dlc: 'Base Game',
    releaseDate: '2017',
    temperament: 'Aggressive',
    diet: 'None',
    size: 'Medium',
    biome: 'Technology',
    traversal: 'Ground'
  },
  {
    name: 'Deinonychus',
    dlc: 'Valguero',
    releaseDate: '2019',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Woodland',
    traversal: 'Ground'
  },
  {
    name: 'Desert Titan',
    dlc: 'Extinction',
    releaseDate: '2018',
    temperament: 'Aggressive',
    diet: 'None',
    size: 'Titan',
    biome: 'Desert',
    traversal: 'Ground'
  },
  {
    name: 'Desmodus',
    dlc: 'Fjordur',
    releaseDate: '2022',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Cave',
    traversal: 'Ground'
  },
  {
    name: 'Dilophosaur',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Territorial',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Dimetrodon',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Reactive',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Swamp',
    traversal: 'Ground'
  },
  {
    name: 'Dimorphodon',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Reactive',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Forest',
    traversal: 'Flyer'
  },
  {
    name: 'Dinopithecus',
    dlc: 'Lost Island',
    releaseDate: '2021',
    temperament: 'Aggressive',
    diet: 'Omnivore',
    size: 'Medium',
    biome: 'Jungle',
    traversal: 'Ground'
  },
  {
    name: 'Diplocaulus',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Skittish',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Swamp',
    traversal: 'Swimmer'
  },
  {
    name: 'Diplodocus',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Naive',
    diet: 'Herbivore',
    size: 'Large',
    biome: 'Plains',
    traversal: 'Ground'
  },
  {
    name: 'Direbear',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Territorial',
    diet: 'Omnivore',
    size: 'Medium',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Direwolf',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Snowy Mountains',
    traversal: 'Ground'
  },
  {
    name: 'Dodo',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Oblivious',
    diet: 'Herbivore',
    size: 'Small',
    biome: 'Beach',
    traversal: 'Ground'
  },
  {
    name: 'Doedicurus',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Docile',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Desert',
    traversal: 'Ground'
  },
  {
    name: 'Dung Beetle',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Neutral',
    diet: 'Detritivore',
    size: 'Small',
    biome: 'Cave',
    traversal: 'Ground'
  },
  {
    name: 'Dunkleosteus',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Territorial',
    diet: 'Carnivore',
    size: 'Large',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Electrophorus',
    dlc: 'Base Game',
    releaseDate: '2017',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Enforcer',
    dlc: 'Extinction',
    releaseDate: '2018',
    temperament: 'Reactive',
    diet: 'None',
    size: 'Medium',
    biome: 'Technology',
    traversal: 'Ground'
  },
  {
    name: 'Equus',
    dlc: 'Base Game',
    releaseDate: '2017',
    temperament: 'Loyal',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Plains',
    traversal: 'Ground'
  },
  {
    name: 'Eurypterid',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Featherlight',
    dlc: 'Aberration',
    releaseDate: '2017',
    temperament: 'Passive',
    diet: 'Herbivore',
    size: 'Small',
    biome: 'Cave',
    traversal: 'Flyer'
  },
  {
    name: 'Fenrir',
    dlc: 'Fjordur',
    releaseDate: '2022',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Snowy Mountains',
    traversal: 'Ground'
  },
  {
    name: 'Ferox',
    dlc: 'Genesis: Part 1',
    releaseDate: '2020',
    temperament: 'Reactive',
    diet: 'Omnivore',
    size: 'Small',
    biome: 'Snowy Mountains',
    traversal: 'Ground'
  },
  {
    name: 'Fjordhawk',
    dlc: 'Fjordur',
    releaseDate: '2022',
    temperament: 'Passive',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Mountain',
    traversal: 'Flyer'
  },
  {
    name: 'Forest Titan',
    dlc: 'Extinction',
    releaseDate: '2018',
    temperament: 'Aggressive',
    diet: 'None',
    size: 'Titan',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Gacha',
    dlc: 'Extinction',
    releaseDate: '2018',
    temperament: 'Docile',
    diet: 'Omnivore',
    size: 'Medium',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Gallimimus',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Skittish',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Plains',
    traversal: 'Ground'
  },
  {
    name: 'Gasbags',
    dlc: 'Extinction',
    releaseDate: '2018',
    temperament: 'Docile',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Wasteland',
    traversal: 'Ground'
  },
  {
    name: 'Giant Bee',
    dlc: 'Base Game',
    releaseDate: '2017',
    temperament: 'Territorial',
    diet: 'Herbivore',
    size: 'Small',
    biome: 'Forest',
    traversal: 'Flyer'
  },
  {
    name: 'Giganotosaurus',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Angry',
    diet: 'Carnivore',
    size: 'Extra Large',
    biome: 'Mountain',
    traversal: 'Ground'
  },
  {
    name: 'Gigantopithecus',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Territorial',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Glowbug',
    dlc: 'Aberration',
    releaseDate: '2017',
    temperament: 'Passive',
    diet: 'None',
    size: 'Small',
    biome: 'Cave',
    traversal: 'Ground'
  },
  {
    name: 'Glowtail',
    dlc: 'Aberration',
    releaseDate: '2017',
    temperament: 'Passive',
    diet: 'Herbivore',
    size: 'Small',
    biome: 'Cave',
    traversal: 'Ground'
  },
  {
    name: 'Griffin',
    dlc: 'Ragnarok',
    releaseDate: '2017',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Mountain',
    traversal: 'Flyer'
  },
  {
    name: 'Hesperornis',
    dlc: 'Base Game',
    releaseDate: '2017',
    temperament: 'Flippant',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Hyaenodon',
    dlc: 'Base Game',
    releaseDate: '2017',
    temperament: 'Opportunistic',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Ice Titan',
    dlc: 'Extinction',
    releaseDate: '2018',
    temperament: 'Aggressive',
    diet: 'None',
    size: 'Titan',
    biome: 'Snowy Mountains',
    traversal: 'Ground'
  },
  {
    name: 'Ichthyornis',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Ocean',
    traversal: 'Flyer'
  },
  {
    name: 'Ichthyosaurus',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Curious',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Iguanodon',
    dlc: 'Base Game',
    releaseDate: '2017',
    temperament: 'Reactive',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Plains',
    traversal: 'Ground'
  },
  {
    name: 'Insect Swarm',
    dlc: 'Genesis: Part 1',
    releaseDate: '2020',
    temperament: 'Aggressive',
    diet: 'None',
    size: 'Small',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Jerboa',
    dlc: 'Scorched Earth',
    releaseDate: '2016',
    temperament: 'Cowardly',
    diet: 'Herbivore',
    size: 'Small',
    biome: 'Desert',
    traversal: 'Ground'
  },
  {
    name: 'Jug Bug',
    dlc: 'Scorched Earth',
    releaseDate: '2016',
    temperament: 'Passive',
    diet: 'Herbivore',
    size: 'Small',
    biome: 'Desert',
    traversal: 'Ground'
  },
  {
    name: 'Kairuku',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Friendly',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Kaprosuchus',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Patient',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Swamp',
    traversal: 'Swimmer'
  },
  {
    name: 'Karkinos',
    dlc: 'Aberration',
    releaseDate: '2017',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Large',
    biome: 'Cave',
    traversal: 'Ground'
  },
  {
    name: 'Kentrosaurus',
    dlc: 'Base Game',
    releaseDate: '2017',
    temperament: 'Short-Tempered',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Plains',
    traversal: 'Ground'
  },
  {
    name: 'King Titan',
    dlc: 'Extinction',
    releaseDate: '2018',
    temperament: 'Aggressive',
    diet: 'None',
    size: 'Titan',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Lamprey',
    dlc: 'Aberration',
    releaseDate: '2017',
    temperament: 'Passive',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Cave',
    traversal: 'Ground'
  },
  {
    name: 'Leech',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Swamp',
    traversal: 'Swimmer'
  },
  {
    name: 'Leedsichthys',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Defensive',
    diet: 'Carnivore',
    size: 'Extra Large',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Liopleurodon',
    dlc: 'Base Game',
    releaseDate: '2017',
    temperament: 'Elusive',
    diet: 'Carnivore',
    size: 'Large',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Lymantria',
    dlc: 'Scorched Earth',
    releaseDate: '2016',
    temperament: 'Evasive',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Desert',
    traversal: 'Flyer'
  },
  {
    name: 'Lystrosaurus',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Loyal',
    diet: 'Herbivore',
    size: 'Small',
    biome: 'Swamp',
    traversal: 'Ground'
  },
  {
    name: 'Maewing',
    dlc: 'Genesis: Part 2',
    releaseDate: '2021',
    temperament: 'Skittish',
    diet: 'Omnivore',
    size: 'Medium',
    biome: 'Plains',
    traversal: 'Ground'
  },
  {
    name: 'Magmasaur',
    dlc: 'Genesis: Part 1',
    releaseDate: '2020',
    temperament: 'Territorial',
    diet: 'Carnivore',
    size: 'Large',
    biome: 'Volcanic',
    traversal: 'Ground'
  },
  {
    name: 'Mammoth',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Docile',
    diet: 'Herbivore',
    size: 'Large',
    biome: 'Snowy Mountains',
    traversal: 'Ground'
  },
  {
    name: 'Managarmr',
    dlc: 'Extinction',
    releaseDate: '2018',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Large',
    biome: 'Snowy Mountains',
    traversal: 'Ground'
  },
  {
    name: 'Manta',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Mantis',
    dlc: 'Scorched Earth',
    releaseDate: '2016',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Desert',
    traversal: 'Ground'
  },
  {
    name: 'Megachelon',
    dlc: 'Genesis: Part 1',
    releaseDate: '2020',
    temperament: 'Docile',
    diet: 'Herbivore',
    size: 'Extra Large',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Megalania',
    dlc: 'Base Game',
    releaseDate: '2017',
    temperament: 'Territorial',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Megaloceros',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Skittish',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Tundra',
    traversal: 'Ground'
  },
  {
    name: 'Megalodon',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Large',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Megalosaurus',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Nocturnally Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Cave',
    traversal: 'Ground'
  },
  {
    name: 'Meganeura',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Reactive',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Swamp',
    traversal: 'Flyer'
  },
  {
    name: 'Megatherium',
    dlc: 'Base Game',
    releaseDate: '2017',
    temperament: 'Neutral',
    diet: 'Omnivore',
    size: 'Medium',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Mek',
    dlc: 'Extinction',
    releaseDate: '2018',
    temperament: 'Docile',
    diet: 'None',
    size: 'Extra Large',
    biome: 'Technology',
    traversal: 'Ground'
  },
  {
    name: 'Mesopithecus',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Skittish',
    diet: 'Omnivore',
    size: 'Small',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Microraptor',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Forest',
    traversal: 'Flyer'
  },
  {
    name: 'Morellatops',
    dlc: 'Scorched Earth',
    releaseDate: '2016',
    temperament: 'Defensive',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Desert',
    traversal: 'Ground'
  },
  {
    name: 'Mosasaurus',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Extra Large',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Moschops',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Cowardly',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Plains',
    traversal: 'Ground'
  },
  {
    name: 'Nameless',
    dlc: 'Aberration',
    releaseDate: '2017',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Cave',
    traversal: 'Ground'
  },
  {
    name: 'Noglin',
    dlc: 'Genesis: Part 2',
    releaseDate: '2021',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Cave',
    traversal: 'Ground'
  },
  {
    name: 'Onyc',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Cave',
    traversal: 'Ground'
  },
  {
    name: 'Otter',
    dlc: 'Base Game',
    releaseDate: '2017',
    temperament: 'Friendly',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'River',
    traversal: 'Swimmer'
  },
  {
    name: 'Oviraptor',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Skittish',
    diet: 'Omnivore',
    size: 'Small',
    biome: 'Plains',
    traversal: 'Ground'
  },
  {
    name: 'Ovis',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Stupid',
    diet: 'Herbivore',
    size: 'Small',
    biome: 'Mountain',
    traversal: 'Ground'
  },
  {
    name: 'Pachy',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Docile',
    diet: 'Herbivore',
    size: 'Small',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Pachyrhinosaurus',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Evasive',
    diet: 'Herbivore',
    size: 'Large',
    biome: 'Tundra',
    traversal: 'Ground'
  },
  {
    name: 'Paraceratherium',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Docile',
    diet: 'Herbivore',
    size: 'Large',
    biome: 'Plains',
    traversal: 'Ground'
  },
  {
    name: 'Parakeet Fish School',
    dlc: 'Genesis: Part 1',
    releaseDate: '2020',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Parasaur',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Skittish',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Plains',
    traversal: 'Ground'
  },
  {
    name: 'Pegomastax',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Aggressive',
    diet: 'Herbivore',
    size: 'Small',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Pelagornis',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Skittish',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Phiomia',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Skittish',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Swamp',
    traversal: 'Ground'
  },
  {
    name: 'Phoenix',
    dlc: 'Scorched Earth',
    releaseDate: '2017',
    temperament: 'Elusive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Desert',
    traversal: 'Flyer'
  },
  {
    name: 'Piranha',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'River',
    traversal: 'Swimmer'
  },
  {
    name: 'Plesiosaur',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Docile',
    diet: 'Carnivore',
    size: 'Large',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Procoptodon',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Reactive',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Pteranodon',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Skittish',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Ocean',
    traversal: 'Flyer'
  },
  {
    name: 'Pulmonoscorpius',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Cave',
    traversal: 'Ground'
  },
  {
    name: 'Purlovia',
    dlc: 'Base Game',
    releaseDate: '2017',
    temperament: 'Patient',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Quetzal',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Skittish',
    diet: 'Carnivore',
    size: 'Large',
    biome: 'Mountain',
    traversal: 'Flyer'
  },
  {
    name: 'Raptor',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Plains',
    traversal: 'Ground'
  },
  {
    name: 'Ravager',
    dlc: 'Aberration',
    releaseDate: '2017',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Cave',
    traversal: 'Ground'
  },
  {
    name: 'Reaper',
    dlc: 'Aberration',
    releaseDate: '2017',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Large',
    biome: 'Cave',
    traversal: 'Ground'
  },
  {
    name: 'Rex',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Large',
    biome: 'Plains',
    traversal: 'Ground'
  },
  {
    name: 'Rock Drake',
    dlc: 'Aberration',
    releaseDate: '2017',
    temperament: 'Territorial',
    diet: 'Carnivore',
    size: 'Large',
    biome: 'Cave',
    traversal: 'Flyer'
  },
  {
    name: 'Rock Elemental',
    dlc: 'Scorched Earth',
    releaseDate: '2016',
    temperament: 'Territorial',
    diet: 'Mineralivore',
    size: 'Extra Large',
    biome: 'Desert',
    traversal: 'Ground'
  },
  {
    name: 'Roll Rat',
    dlc: 'Aberration',
    releaseDate: '2017',
    temperament: 'Neutral',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Cave',
    traversal: 'Ground'
  },
  {
    name: 'Sabertooth Salmon',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'River',
    traversal: 'Swimmer'
  },
  {
    name: 'Sabertooth',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Snowy Mountains',
    traversal: 'Ground'
  },
  {
    name: 'Sarco',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Patient',
    diet: 'Carnivore',
    size: 'Large',
    biome: 'Swamp',
    traversal: 'Swimmer'
  },
  {
    name: 'Scout',
    dlc: 'Extinction',
    releaseDate: '2018',
    temperament: 'Docile',
    diet: 'None',
    size: 'Small',
    biome: 'Technology',
    traversal: 'Flyer'
  },
  {
    name: 'Seeker',
    dlc: 'Aberration',
    releaseDate: '2017',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Cave',
    traversal: 'Ground'
  },
  {
    name: 'Shadowmane',
    dlc: 'Genesis: Part 2',
    releaseDate: '2021',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Shinehorn',
    dlc: 'Aberration',
    releaseDate: '2017',
    temperament: 'Passive',
    diet: 'Herbivore',
    size: 'Small',
    biome: 'Cave',
    traversal: 'Ground'
  },
  {
    name: 'Sinomacrops',
    dlc: 'Lost Island',
    releaseDate: '2021',
    temperament: 'Reactive',
    diet: 'Insectivore',
    size: 'Small',
    biome: 'Jungle',
    traversal: 'Flyer'
  },
  {
    name: 'Snow Owl',
    dlc: 'Extinction',
    releaseDate: '2018',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Snowy Mountains',
    traversal: 'Flyer'
  },
  {
    name: 'Spinosaurus',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Territorial',
    diet: 'Carnivore',
    size: 'Large',
    biome: 'Swamp',
    traversal: 'Swimmer'
  },
  {
    name: 'Stegosaurus',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Docile',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Summoner',
    dlc: 'Genesis: Part 2',
    releaseDate: '2021',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome:'Cave',
    traversal: 'Ground'
  },
  {
    name: 'Tapejara',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Skittish',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Forest',
    traversal: 'Flyer'
  },
  {
    name: 'Tek Stryder',
    dlc: 'Genesis: Part 2',
    releaseDate: '2021',
    temperament: 'Docile',
    diet: 'None',
    size: 'Extra Large',
    biome: 'Technology',
    traversal: 'Ground'
  },
  {
    name: 'Terror Bird',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Desert',
    traversal: 'Ground'
  },
  {
    name: 'Therizinosaurus',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Territorial',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Thorny Dragon',
    dlc: 'Scorched Earth',
    releaseDate: '2016',
    temperament: 'Territorial',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Desert',
    traversal: 'Ground'
  },
  {
    name: 'Thylacoleo',
    dlc: 'Base Game',
    releaseDate: '2017',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Titanoboa',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Cave',
    traversal: 'Ground'
  },
  {
    name: 'Titanomyrma',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Territorial',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Titanosaur',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Docile',
    diet: 'Herbivore',
    size: 'Titan',
    biome: 'Plains',
    traversal: 'Ground'
  },
  {
    name: 'Triceratops',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Docile',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Plains',
    traversal: 'Ground'
  },
  {
    name: 'Trilobite',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Evasive',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Troodon',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Nocturnally Aggressive',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Forest',
    traversal: 'Ground'
  },
  {
    name: 'Tropeognathus',
    dlc: 'Crystal Isles',
    releaseDate: '2020',
    temperament: 'Neutral',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Jungle',
    traversal: 'Flyer'
  },
  {
    name: 'Tusoteuthis',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Extra Large',
    biome: 'Ocean',
    traversal: 'Swimmer'
  },
  {
    name: 'Unicorn',
    dlc: 'Base Game',
    releaseDate: '2017',
    temperament: 'Loyal',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Plains',
    traversal: 'Ground'
  },
  {
    name: 'Velonasaur',
    dlc: 'Extinction',
    releaseDate: '2018',
    temperament: 'Territorial',
    diet: 'Carnivore',
    size: 'Medium',
    biome: 'Desert',
    traversal: 'Ground'
  },
  {
    name: 'Voidwyrm',
    dlc: 'Genesis: Part 2',
    releaseDate: '2021',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Large',
    biome: 'Space',
    traversal: 'Flyer'
  },
  {
    name: 'Vulture',
    dlc: 'Scorched Earth',
    releaseDate: '2016',
    temperament: 'Defensive',
    diet: 'Carnivore',
    size: 'Small',
    biome: 'Desert',
    traversal: 'Ground'
  },
  {
    name: 'Woolly Rhino',
    dlc: 'Base Game',
    releaseDate: '2015',
    temperament: 'Friendly',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Snowy Mountains',
    traversal: 'Ground'
  },
  {
    name: 'Wyvern',
    dlc: 'Scorched Earth',
    releaseDate: '2016',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Large',
    biome: 'Volcano',
    traversal: 'Flyer'
  },
  {
    name: 'Yeti',
    dlc: 'Base Game',
    releaseDate: '2016',
    temperament: 'Aggressive',
    diet: 'Herbivore',
    size: 'Medium',
    biome: 'Snowy Mountains',
    traversal: 'Ground'
  },
  {
    name: 'Yutyrannus',
    dlc: 'Base Game',
    releaseDate: '2017',
    temperament: 'Aggressive',
    diet: 'Carnivore',
    size: 'Large',
    biome: 'Snowy Mountains',
    traversal: 'Ground'
  }
];

export default dinoData;
