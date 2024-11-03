const dinoData = [
    {
      name: 'Achatina',
      dlc: 'Base Game',
      releaseDate: '2016',
      temperament: 'Docile',
      diet: 'Herbivore',
      size: 'Small'
    },
    {
      name: 'Allosaurus',
      dlc: 'Base Game',
      releaseDate: '2016',
      temperament: 'Aggressive',
      diet: 'Carnivore',
      size: 'Large'
    },
    {
      name: 'Amargasaurus',
      dlc: 'Lost Island',
      releaseDate: '2021',
      temperament: 'Aggressive',
      diet: 'Herbivore',
      size: 'Large'
    },
    {
      name: 'Ammonite',
      dlc: 'Base Game',
      releaseDate: '2016',
      temperament: 'Defensive',
      diet: 'Carnivore',
      size: 'Small'
    },
    {
      name: 'Andrewsarchus',
      dlc: 'Fjordur',
      releaseDate: '2022',
      temperament: 'Neutral',
      diet: 'Omnivore',
      size: 'Large'
    },
    {
      name: 'Angler',
      dlc: 'Base Game',
      releaseDate: '2016',
      temperament: 'Aggressive',
      diet: 'Carnivore',
      size: 'Medium'
    },
    {
      name: 'Ankylosaurus',
      dlc: 'Base Game',
      releaseDate: '2015',
      temperament: 'Docile',
      diet: 'Herbivore',
      size: 'Medium'
    },
    {
      name: 'Araneo',
      dlc: 'Base Game',
      releaseDate: '2015',
      temperament: 'Aggressive',
      diet: 'Carnivore',
      size: 'Medium'
    },
    {
      name: 'Archaeopteryx',
      dlc: 'Base Game',
      releaseDate: '2016',
      temperament: 'Fearful',
      diet: 'Herbivore',
      size: 'Small'
    },
    {
      name: 'Argentavis',
      dlc: 'Base Game',
      releaseDate: '2015',
      temperament: 'Aggressive',
      diet: 'Carnivore',
      size: 'Large'
    },
    {
      name: 'Arthropluera',
      dlc: 'Base Game',
      releaseDate: '2016',
      temperament: 'Aggressive',
      diet: 'Carnivore',
      size: 'Medium'
    },
    {
      name: 'Astrocetus',
      dlc: 'Genesis: Part 1',
      releaseDate: '2020',
      temperament: 'Territorial',
      diet: 'Carnivore',
      size: 'Extra Large'
    },
    {
      name: 'Astrodelphis',
      dlc: 'Genesis: Part 2',
      releaseDate: '2021',
      temperament: 'Aggressive',
      diet: 'Carnivore',
      size: 'Medium'
    },
    {
      name: 'Attack Drone',
      dlc: 'Base Game',
      releaseDate: '2017',
      temperament: 'Aggressive',
      diet: 'None',
      size: 'Small'
    },
    {
      name: 'Baryonyx',
      dlc: 'Base Game',
      releaseDate: '2017',
      temperament: 'Aggressive',
      diet: 'Carnivore',
      size: 'Medium'
    },
    {
      name: 'Basilisk',
      dlc: 'Aberration',
      releaseDate: '2017',
      temperament: 'Aggressive',
      diet: 'Carnivore',
      size: 'Large'
    },
    {
      name: 'Basilosaurus',
      dlc: 'Base Game',
      releaseDate: '2017',
      temperament: 'Docile',
      diet: 'Carnivore',
      size: 'Extra Large'
    },
    {
      name: 'Beelzebufo',
      dlc: 'Base Game',
      releaseDate: '2016',
      temperament: 'Docile',
      diet: 'Carnivore',
      size: 'Medium'
    },
    {
      name: 'Bloodstalker',
      dlc: 'Genesis: Part 1',
      releaseDate: '2020',
      temperament: 'Aggressive',
      diet: 'Carnivore',
      size: 'Large'
    },
    {
      name: 'Brontosaurus',
      dlc: 'Base Game',
      releaseDate: '2015',
      temperament: 'Docile',
      diet: 'Herbivore',
      size: 'Extra Large'
    },
    {
      name: 'Bulbdog',
      dlc: 'Aberration',
      releaseDate: '2017',
      temperament: 'Passive',
      diet: 'Herbivore',
      size: 'Small'
    },
    {
      name: 'Carbonemys',
      dlc: 'Base Game',
      releaseDate: '2015',
      temperament: 'Docile',
      diet: 'Herbivore',
      size: 'Medium'
    },
    {
      name: 'Carcharodontosaurus',
      dlc: 'Base Game',
      releaseDate: '2022',
      temperament: 'Aggressive',
      diet: 'Carnivore',
      size: 'Extra Large'
    },
    {
      name: 'Carnotaurus',
      dlc: 'Base Game',
      releaseDate: '2015',
      temperament: 'Aggressive',
      diet: 'Carnivore',
      size: 'Large'
    },
    {
      name: 'Castoroides',
      dlc: 'Base Game',
      releaseDate: '2016',
      temperament: 'Territorial',
      diet: 'Herbivore',
      size: 'Medium'
    },
    {
      name: 'Chalicotherium',
      dlc: 'Base Game',
      releaseDate: '2016',
      temperament: 'Territorial',
      diet: 'Herbivore',
      size: 'Large'
    },
    {
      name: 'Cnidaria',
      dlc: 'Base Game',
      releaseDate: '2016',
      temperament: 'Aggressive',
      diet: 'Carnivore',
      size: 'Small'
    },
    {
      name: 'Coelacanth',
      dlc: 'Base Game',
      releaseDate: '2015',
      temperament: 'Docile',
      diet: 'Carnivore',
      size: 'Small'
    },
    {
      name: 'Compy',
      dlc: 'Base Game',
      releaseDate: '2015',
      temperament: 'Inquisitive',
      diet: 'Carnivore',
      size: 'Small'
    },
    {
      name: 'Crystal Wyvern',
      dlc: 'Crystal Isles',
      releaseDate: '2020',
      temperament: 'Aggressive',
      diet: 'Carnivore',
      size: 'Extra Large'
    },
    {
      name: 'Daeodon',
      dlc: 'Base Game',
      releaseDate: '2017',
      temperament: 'Aggressive',
      diet: 'Omnivore',
      size: 'Medium'
    },
    {
      name: 'Deathworm',
      dlc: 'Scorched Earth',
      releaseDate: '2016',
      temperament: 'Aggressive',
      diet: 'Carnivore',
      size: 'Extra Large'
    },
    {
      name: 'Defense Unit',
      dlc: 'Base Game',
      releaseDate: '2017',
      temperament: 'Aggressive',
      diet: 'None',
      size: 'Medium'
    },
    {
      name: 'Deinonychus',
      dlc: 'Valguero',
      releaseDate: '2019',
      temperament: 'Aggressive',
      diet: 'Carnivore',
      size: 'Medium'
    },
    {
      name: 'Desert Titan',
      dlc: 'Extinction',
      releaseDate: '2018',
      temperament: 'Aggressive',
      diet: 'None',
      size: 'Titan'
    },
    {
      name: 'Desmodus',
      dlc: 'Fjordur',
      releaseDate: '2022',
      temperament: 'Aggressive',
      diet: 'Carnivore',
      size: 'Medium'
    },
    {
      name: 'Dilophosaur',
      dlc: 'Base Game',
      releaseDate: '2015',
      temperament: 'Aggressive',
      diet: 'Carnivore',
      size: 'Small'
    },
    {
      name: 'Dimetrodon',
      dlc: 'Base Game',
      releaseDate: '2016',
      temperament: 'Docile',
      diet: 'Carnivore',
      size: 'Medium'
    },
    {
      name: 'Dimorphodon',
      dlc: 'Base Game',
      releaseDate: '2015',
      temperament: 'Aggressive',
      diet: 'Carnivore',
      size: 'Small'
    },
    {
      name: 'Dinopithecus',
      dlc: 'Lost Island',
      releaseDate: '2021',
      temperament: 'Aggressive',
      diet: 'Omnivore',
      size: 'Large'
    },
    {
      name: 'Diplocaulus',
      dlc: 'Base Game',
      releaseDate: '2016',
      temperament: 'Skittish',
      diet: 'Carnivore',
      size: 'Small'
    },
    {
      name: 'Diplodocus',
      dlc: 'Base Game',
      releaseDate: '2016',
      temperament: 'Docile',
      diet: 'Herbivore',
      size: 'Large'
    },
    {
      name: 'Direbear',
      dlc: 'Base Game',
      releaseDate: '2016',
      temperament: 'Territorial',
      diet: 'Omnivore',
      size: 'Large'
    },
    {
      name: 'Direwolf',
      dlc: 'Base Game',
      releaseDate: '2015',
      temperament: 'Aggressive',
      diet: 'Carnivore',
      size: 'Medium'
    },
    {
      name: 'Dodo',
      dlc: 'Base Game',
      releaseDate: '2015',
      temperament: 'Docile',
      diet: 'Herbivore',
      size: 'Small'
    },
    {
      name: 'Doedicurus',
      dlc: 'Base Game',
      releaseDate: '2016',
      temperament: 'Docile',
      diet: 'Herbivore',
      size: 'Medium'
    },
    {
      name: 'Dung Beetle',
      dlc: 'Base Game',
      releaseDate: '2016',
      temperament: 'Passive',
      diet: 'Detritivore',
      size: 'Small'
    },
    {
      name: 'Dunkleosteus',
      dlc: 'Base Game',
      releaseDate: '2016',
      temperament: 'Docile',
      diet: 'Carnivore',
      size: 'Large'
    },
    {
        name: 'Electrophorus',
        dlc: 'Base Game',
        releaseDate: '2017',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Enforcer',
        dlc: 'Extinction',
        releaseDate: '2018',
        temperament: 'Docile',
        diet: 'None',
        size: 'Medium'
      },
      {
        name: 'Equus',
        dlc: 'Base Game',
        releaseDate: '2017',
        temperament: 'Skittish',
        diet: 'Herbivore',
        size: 'Medium'
      },
      {
        name: 'Eurypterid',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Featherlight',
        dlc: 'Aberration',
        releaseDate: '2017',
        temperament: 'Passive',
        diet: 'Herbivore',
        size: 'Small'
      },
      {
        name: 'Fenrir',
        dlc: 'Fjordur',
        releaseDate: '2022',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Medium'
      },
      {
        name: 'Ferox',
        dlc: 'Genesis: Part 1',
        releaseDate: '2020',
        temperament: 'Docile',
        diet: 'Omnivore',
        size: 'Small'
      },
      {
        name: 'Fjordhawk',
        dlc: 'Fjordur',
        releaseDate: '2022',
        temperament: 'Passive',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Forest Titan',
        dlc: 'Extinction',
        releaseDate: '2018',
        temperament: 'Aggressive',
        diet: 'None',
        size: 'Titan'
      },
      {
        name: 'Gacha',
        dlc: 'Extinction',
        releaseDate: '2018',
        temperament: 'Passive',
        diet: 'Omnivore',
        size: 'Large'
      },
      {
        name: 'Gallimimus',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Skittish',
        diet: 'Herbivore',
        size: 'Medium'
      },
      {
        name: 'Gasbags',
        dlc: 'Extinction',
        releaseDate: '2018',
        temperament: 'Passive',
        diet: 'Herbivore',
        size: 'Large'
      },
      {
        name: 'Giant Bee',
        dlc: 'Base Game',
        releaseDate: '2017',
        temperament: 'Aggressive',
        diet: 'Herbivore',
        size: 'Small'
      },
      {
        name: 'Giganotosaurus',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Extra Large'
      },
      {
        name: 'Gigantopithecus',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Territorial',
        diet: 'Herbivore',
        size: 'Medium'
      },
      {
        name: 'Glowbug',
        dlc: 'Aberration',
        releaseDate: '2017',
        temperament: 'Docile',
        diet: 'None',
        size: 'Small'
      },
      {
        name: 'Glowtail',
        dlc: 'Aberration',
        releaseDate: '2017',
        temperament: 'Passive',
        diet: 'Herbivore',
        size: 'Small'
      },
      {
        name: 'Griffin',
        dlc: 'Ragnarok',
        releaseDate: '2017',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Large'
      },
      {
        name: 'Hesperornis',
        dlc: 'Base Game',
        releaseDate: '2017',
        temperament: 'Territorial',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Hyaenodon',
        dlc: 'Base Game',
        releaseDate: '2017',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Ice Titan',
        dlc: 'Extinction',
        releaseDate: '2018',
        temperament: 'Aggressive',
        diet: 'None',
        size: 'Titan'
      },
      {
        name: 'Ichthyornis',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Ichthyosaurus',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Docile',
        diet: 'Carnivore',
        size: 'Medium'
      },
      {
        name: 'Iguanodon',
        dlc: 'Base Game',
        releaseDate: '2017',
        temperament: 'Docile',
        diet: 'Herbivore',
        size: 'Medium'
      },
      {
        name: 'Insect Swarm',
        dlc: 'Genesis: Part 1',
        releaseDate: '2020',
        temperament: 'Aggressive',
        diet: 'None',
        size: 'Small'
      },
      {
        name: 'Jerboa',
        dlc: 'Scorched Earth',
        releaseDate: '2016',
        temperament: 'Cowardly',
        diet: 'Herbivore',
        size: 'Small'
      },
      {
        name: 'Jug Bug',
        dlc: 'Scorched Earth',
        releaseDate: '2016',
        temperament: 'Docile',
        diet: 'Herbivore',
        size: 'Small'
      },
      {
        name: 'Kairuku',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Docile',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Kaprosuchus',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Medium'
      },
      {
        name: 'Karkinos',
        dlc: 'Aberration',
        releaseDate: '2017',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Large'
      },
      {
        name: 'Kentrosaurus',
        dlc: 'Base Game',
        releaseDate: '2017',
        temperament: 'Aggressive',
        diet: 'Herbivore',
        size: 'Medium'
      },
      {
        name: 'King Titan',
        dlc: 'Extinction',
        releaseDate: '2018',
        temperament: 'Aggressive',
        diet: 'None',
        size: 'Titan'
      },
      {
        name: 'Lamprey',
        dlc: 'Aberration',
        releaseDate: '2017',
        temperament: 'Passive',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Leech',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Leedsichthys',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Docile',
        diet: 'Carnivore',
        size: 'Extra Large'
      },
      {
        name: 'Liopleurodon',
        dlc: 'Base Game',
        releaseDate: '2017',
        temperament: 'Elusive',
        diet: 'Carnivore',
        size: 'Large'
      },
      {
        name: 'Lymantria',
        dlc: 'Scorched Earth',
        releaseDate: '2016',
        temperament: 'Evasive',
        diet: 'Herbivore',
        size: 'Medium'
      },
      {
        name: 'Lystrosaurus',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Passive',
        diet: 'Herbivore',
        size: 'Small'
      },
      {
        name: 'Maewing',
        dlc: 'Genesis: Part 2',
        releaseDate: '2021',
        temperament: 'Docile',
        diet: 'Omnivore',
        size: 'Medium'
      },
      {
        name: 'Magmasaur',
        dlc: 'Genesis: Part 1',
        releaseDate: '2020',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Large'
      },
      {
        name: 'Mammoth',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Docile',
        diet: 'Herbivore',
        size: 'Large'
      },
      {
        name: 'Managarmr',
        dlc: 'Extinction',
        releaseDate: '2018',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Large'
      },
      {
        name: 'Manta',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Manticore',
        dlc: 'Scorched Earth',
        releaseDate: '2016',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Boss'
      },
      {
        name: 'Mantis',
        dlc: 'Scorched Earth',
        releaseDate: '2016',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Medium'
      },
      {
        name: 'Megachelon',
        dlc: 'Genesis: Part 1',
        releaseDate: '2020',
        temperament: 'Passive',
        diet: 'Herbivore',
        size: 'Extra Large'
      },
      {
        name: 'Megalania',
        dlc: 'Base Game',
        releaseDate: '2017',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Medium'
      },
      {
        name: 'Megaloceros',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Skittish',
        diet: 'Herbivore',
        size: 'Medium'
      },
      {
        name: 'Megalodon',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Large'
      },
      {
        name: 'Megalosaurus',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Medium'
      },
      {
        name: 'Meganeura',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Megatherium',
        dlc: 'Base Game',
        releaseDate: '2017',
        temperament: 'Docile',
        diet: 'Omnivore',
        size: 'Large'
      },
      {
        name: 'Mek',
        dlc: 'Extinction',
        releaseDate: '2018',
        temperament: 'Docile',
        diet: 'None',
        size: 'Large'
      },
      {
        name: 'Mesopithecus',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Passive',
        diet: 'Omnivore',
        size: 'Small'
      },
      {
        name: 'Microraptor',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Moeder',
        dlc: 'Genesis: Part 1',
        releaseDate: '2020',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Boss'
      },
      {
        name: 'Morellatops',
        dlc: 'Scorched Earth',
        releaseDate: '2016',
        temperament: 'Docile',
        diet: 'Herbivore',
        size: 'Medium'
      },
      {
        name: 'Mosasaurus',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Extra Large'
      },
      {
        name: 'Moschops',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Cowardly',
        diet: 'Herbivore',
        size: 'Medium'
      },
      {
        name: 'Nameless',
        dlc: 'Aberration',
        releaseDate: '2017',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Medium'
      },
      {
        name: 'Noglin',
        dlc: 'Genesis: Part 2',
        releaseDate: '2021',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Onyc',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Otter',
        dlc: 'Base Game',
        releaseDate: '2017',
        temperament: 'Passive',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Oviraptor',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Skittish',
        diet: 'Omnivore',
        size: 'Small'
      },
      {
        name: 'Ovis',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Stupid',
        diet: 'Herbivore',
        size: 'Small'
      },
      {
        name: 'Pachy',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Docile',
        diet: 'Herbivore',
        size: 'Small'
      },
      {
        name: 'Pachyrhinosaurus',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Evasive',
        diet: 'Herbivore',
        size: 'Large'
      },
      {
        name: 'Paraceratherium',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Docile',
        diet: 'Herbivore',
        size: 'Extra Large'
      },
      {
        name: 'Parakeet Fish School',
        dlc: 'Genesis: Part 1',
        releaseDate: '2020',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Parasaur',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Skittish',
        diet: 'Herbivore',
        size: 'Medium'
      },
      {
        name: 'Pegomastax',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Aggressive',
        diet: 'Herbivore',
        size: 'Small'
      },
      {
        name: 'Pelagornis',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Skittish',
        diet: 'Carnivore',
        size: 'Medium'
      },
      {
        name: 'Phiomia',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Skittish',
        diet: 'Herbivore',
        size: 'Medium'
      },
      {
        name: 'Phoenix',
        dlc: 'Scorched Earth',
        releaseDate: '2017',
        temperament: 'Elusive',
        diet: 'Carnivore',
        size: 'Medium'
      },
      {
        name: 'Piranha',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Plesiosaur',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Docile',
        diet: 'Carnivore',
        size: 'Extra Large'
      },
      {
        name: 'Procoptodon',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Docile',
        diet: 'Herbivore',
        size: 'Medium'
      },
      {
        name: 'Pteranodon',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Skittish',
        diet: 'Carnivore',
        size: 'Medium'
      },
      {
        name: 'Pulmonoscorpius',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Medium'
      },
      {
        name: 'Purlovia',
        dlc: 'Base Game',
        releaseDate: '2017',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Quetzal',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Docile',
        diet: 'Carnivore',
        size: 'Extra Large'
      },
      {
        name: 'Raptor',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Medium'
      },
      {
        name: 'Ravager',
        dlc: 'Aberration',
        releaseDate: '2017',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Medium'
      },
      {
        name: 'Reaper',
        dlc: 'Aberration',
        releaseDate: '2017',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Extra Large'
      },
      {
        name: 'Rex',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Extra Large'
      },
      {
        name: 'Rock Drake',
        dlc: 'Aberration',
        releaseDate: '2017',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Large'
      },
      {
        name: 'Rock Elemental',
        dlc: 'Scorched Earth',
        releaseDate: '2016',
        temperament: 'Territorial',
        diet: 'Mineralivore',
        size: 'Extra Large'
      },
      {
        name: 'Roll Rat',
        dlc: 'Aberration',
        releaseDate: '2017',
        temperament: 'Territorial',
        diet: 'Herbivore',
        size: 'Large'
      },
      {
        name: 'Sabertooth Salmon',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Sabertooth',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Medium'
      },
      {
        name: 'Sarco',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Large'
      },
      {
        name: 'Scout',
        dlc: 'Extinction',
        releaseDate: '2018',
        temperament: 'Docile',
        diet: 'None',
        size: 'Small'
      },
      {
        name: 'Seeker',
        dlc: 'Aberration',
        releaseDate: '2017',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Medium'
      },
      {
        name: 'Shadowmane',
        dlc: 'Genesis: Part 2',
        releaseDate: '2021',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Large'
      },
      {
        name: 'Shinehorn',
        dlc: 'Aberration',
        releaseDate: '2017',
        temperament: 'Passive',
        diet: 'Herbivore',
        size: 'Small'
      },
      {
        name: 'Sinomacrops',
        dlc: 'Lost Island',
        releaseDate: '2021',
        temperament: 'Skittish',
        diet: 'Herbivore',
        size: 'Small'
      },
      {
        name: 'Snow Owl',
        dlc: 'Extinction',
        releaseDate: '2018',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Large'
      },
      {
        name: 'Spinosaurus',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Extra Large'
      },
      {
        name: 'Stegosaurus',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Docile',
        diet: 'Herbivore',
        size: 'Large'
      },
      {
        name: 'Summoner',
        dlc: 'Genesis: Part 2',
        releaseDate: '2021',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Medium'
      },
      {
        name: 'Tapejara',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Skittish',
        diet: 'Carnivore',
        size: 'Medium'
      },
      {
        name: 'Tek Stryder',
        dlc: 'Genesis: Part 2',
        releaseDate: '2021',
        temperament: 'Docile',
        diet: 'None',
        size: 'Extra Large'
      },
      {
        name: 'Terror Bird',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Medium'
      },
      {
        name: 'Therizinosaurus',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Territorial',
        diet: 'Herbivore',
        size: 'Large'
      },
      {
        name: 'Thorny Dragon',
        dlc: 'Scorched Earth',
        releaseDate: '2016',
        temperament: 'Aggressive',
        diet: 'Herbivore',
        size: 'Medium'
      },
      {
        name: 'Thylacoleo',
        dlc: 'Base Game',
        releaseDate: '2017',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Medium'
      },
      {
        name: 'Titanoboa',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Medium'
      },
      {
        name: 'Titanomyrma',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Titanosaur',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Docile',
        diet: 'Herbivore',
        size: 'Titan'
      },
      {
        name: 'Triceratops',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Defensive',
        diet: 'Herbivore',
        size: 'Large'
      },
      {
        name: 'Trilobite',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Evasive',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Troodon',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Tropeognathus',
        dlc: 'Crystal Isles',
        releaseDate: '2020',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Large'
      },
      {
        name: 'Tusoteuthis',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Extra Large'
      },
      {
        name: 'Unicorn',
        dlc: 'Base Game',
        releaseDate: '2017',
        temperament: 'Skittish',
        diet: 'Herbivore',
        size: 'Medium'
      },
      {
        name: 'Velonasaur',
        dlc: 'Extinction',
        releaseDate: '2018',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Medium'
      },
      {
        name: 'Voidwyrm',
        dlc: 'Genesis: Part 2',
        releaseDate: '2021',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Large'
      },
      {
        name: 'Vulture',
        dlc: 'Scorched Earth',
        releaseDate: '2016',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Small'
      },
      {
        name: 'Woolly Rhino',
        dlc: 'Base Game',
        releaseDate: '2015',
        temperament: 'Docile',
        diet: 'Herbivore',
        size: 'Large'
      },
      {
        name: 'Wyvern',
        dlc: 'Scorched Earth',
        releaseDate: '2016',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Extra Large'
      },
      {
        name: 'Yeti',
        dlc: 'Base Game',
        releaseDate: '2016',
        temperament: 'Aggressive',
        diet: 'Herbivore',
        size: 'Extra Large'
      },
      {
        name: 'Yutyrannus',
        dlc: 'Base Game',
        releaseDate: '2017',
        temperament: 'Aggressive',
        diet: 'Carnivore',
        size: 'Large'
      }
  ];
  
  export default dinoData;
  