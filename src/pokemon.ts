import {IPokemon} from "./interface"

export const pokemonData: Array<IPokemon> = [
    {
        id: 0,
        name: 'Squirtle',
        species: ['Water'],
        description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
        audio: 'https://www.myinstants.com/media/sounds/y2mate_0zCjkXt.mp3'
    },
    {
        id: 1,
        name: 'Charmander',
        species: ['Fire'],
        description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        audio: 'https://www.myinstants.com/media/sounds/charmander.mp3'
    },
    {
        id: 2,
        name: 'Doduo',
        species: ['Normal', 'Flying'],
        description: 'Its short wings make flying difficult. Instead, this Pokémon runs at high speed on developed legs.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png',
        audio: 'https://www.myinstants.com/media/sounds/084-doduo.mp3'
    },
    {
        id: 3,
        name: 'Lickitung',
        species: ['Normal'],
        description: 'If this Pokémon’s sticky saliva gets on you and you don’t clean it off, an intense itch will set in. The itch won’t go away, either.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png',
        audio: 'https://www.myinstants.com/media/sounds/108-lickitung.mp3'
    },
    {
        id: 4,
        name: 'Meowth',
        species: ['Normal'],
        description: 'It loves to collect shiny things. If it’s in a good mood, it might even let its Trainer have a look at its hoard of treasures.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png',
        audio: 'https://www.myinstants.com/media/sounds/052-meowth.mp3'
    },
    {
        id: 5,
        name: 'Pikachu',
        species: ['Electric'],
        description: 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
        audio: 'https://www.myinstants.com/media/sounds/pikachu-pika-pika-sound-fx.mp3'
    },
    {
        id: 6,
        name: 'Slowpoke ',
        species: ['Water', 'Psychic'],
        description: 'Slow-witted and oblivious, this Pokémon won’t feel any pain if its tail gets eaten. It won’t notice when its tail grows back, either.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png',
        audio: 'https://www.myinstants.com/media/sounds/slowpoke.mp3'
    },
    {
        id: 7,
        name: 'Metapod',
        species: ['Bug'],
        description: 'It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png',
        audio: 'https://www.myinstants.com/media/sounds/211817.mp3'
    },
    {
        id: 8,
        name: 'Weedle',
        species: ['Bug', 'Poison'],
        description: 'Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',
        audio: 'https://www.myinstants.com/media/sounds/013-weedle.mp3'
    },
    {
        id: 9,
        name: 'Pidgey',
        species: ['Normal', 'Flying'],
        description: 'Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
        audio: 'https://www.myinstants.com/media/sounds/016-pidgey.mp3'
    },
    {
        id: 10,
        name: 'Spearow',
        species: ['Normal', 'Flying'],
        description: 'Inept at flying high. However, it can fly around very fast to protect its territory.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png',
        audio: 'https://www.myinstants.com/media/sounds/021-spearow.mp3'
    },
    {
        id: 11,
        name: 'Ekans',
        species: ['Poison'],
        description: 'The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png',
        audio: 'https://www.myinstants.com/media/sounds/023-ekans.mp3'
    },
    {
        id: 12,
        name: 'Sandshrew',
        species: ['Ground'],
        description: 'It loves to bathe in the grit of dry, sandy areas. By sand bathing, the Pokémon rids itself of dirt and moisture clinging to its body.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png',
        audio: 'https://www.myinstants.com/media/sounds/027-sandshrew.mp3'
    },
    {
        id: 13,
        name: 'Clefairy',
        species: ['Fairy'],
        description: 'It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png',
        audio: 'https://www.myinstants.com/media/sounds/035-clefairy.mp3'
    },
    {
        id: 14,
        name: 'Jigglypuff',
        species: ['Normal', 'Fairy'],
        description: 'Jigglypuff has top-notch lung capacity, even by comparison to other Pokémon. It won’t stop singing its lullabies until its foes fall asleep.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png',
        audio: 'https://www.myinstants.com/media/sounds/ibuttons-jigglypuff.mp3'
    },
    {
        id: 15,
        name: 'Zubat',
        species: ['Poison', 'Flying'],
        description: 'Emits ultrasonic cries while it flies. They act as a sonar used to check for objects in its way.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png',
        audio: 'https://www.myinstants.com/media/sounds/zubat_s-cry.mp3'
    },
    {
        id: 16,
        name: 'Oddish',
        species: ['Grass', 'Poison'],
        description: 'If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png',
        audio: 'https://www.myinstants.com/media/sounds/043-oddish.mp3'
    },
    {
        id: 17,
        name: 'Gloom ',
        species: ['Grass', 'Poison'],
        description: 'Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png',
        audio: 'https://www.myinstants.com/media/sounds/gloom-notification.mp3'
    },
    {
        id: 18,
        name: 'Paras ',
        species: ['Bug', 'Grass'],
        description: 'Burrows under the ground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png',
        audio: 'https://www.myinstants.com/media/sounds/046-paras.mp3'
    },
    {
        id: 19,
        name: 'Venonat',
        species: ['Bug', 'Poison'],
        description: 'Its large eyes act as radar. In a bright place, you can see that they are clusters of many tiny eyes.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png',
        audio: 'https://www.myinstants.com/media/sounds/048-venonat.mp3'
    },
    {
        id: 20,
        name: 'Diglett',
        species: ['Ground'],
        description: 'If a Diglett digs through a field, it leaves the soil perfectly tilled and ideal for planting crops.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png',
        audio: 'https://www.myinstants.com/media/sounds/diglett.mp3'
    },
    {
        id: 21,
        name: 'Mankey',
        species: ['Fighting'],
        description: 'An agile Pokémon that lives in trees. It angers easily and will not hesitate to attack anything.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png',
        audio: 'https://www.myinstants.com/media/sounds/056-mankey.mp3'
    },
    {
        id: 22,
        name: 'Growlithe',
        species: ['Fire'],
        description: 'It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png',
        audio: 'https://www.myinstants.com/media/sounds/058-growlithe.mp3'
    },
    {
        id: 23,
        name: 'Poliwag',
        species: ['Water'],
        description: 'For Poliwag, swimming is easier than walking. The swirl pattern on its belly is actually part of the Pokémon’s innards showing through the skin.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png',
        audio: 'https://www.myinstants.com/media/sounds/060-poliwag.mp3'
    },
    {
        id: 24,
        name: 'Machop',
        species: ['Fighting'],
        description: 'Its whole body is composed of muscles. Even though it’s the size of a human child, it can hurl 100 grown-ups.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png',
        audio: 'https://www.myinstants.com/media/sounds/066-machop.mp3'
    },
    {
        id: 25,
        name: 'Bellsprout',
        species: ['Grass', 'Poison'],
        description: 'Prefers hot and humid places. It ensnares tiny bugs with its vines and devours them.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png',
        audio: 'https://www.myinstants.com/media/sounds/069-bellsprout.mp3'
    },
    {
        id: 26,
        name: 'Tentacool',
        species: ['Water', 'Poison'],
        description: 'Tentacool is not a particularly strong swimmer. It drifts across the surface of shallow seas as it searches for prey.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png',
        audio: 'https://www.myinstants.com/media/sounds/pokmon-tentacool-cry.mp3'
    },
    {
        id: 27,
        name: 'Tentacruel',
        species: ['Water', 'Poison'],
        description: 'When the red orbs on Tentacruel’s head glow brightly, watch out. The Pokémon is about to fire off a burst of ultrasonic waves.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png',
        audio: 'https://www.myinstants.com/media/sounds/pokmon-tentacruel-cry.mp3'
    },
    {
        id: 28,
        name: 'Ponyta',
        species: ['Fire'],
        description: 'It can’t run properly when it’s newly born. As it races around with others of its kind, its legs grow stronger.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png',
        audio: 'https://www.myinstants.com/media/sounds/077-ponyta.mp3'
    },
    {
        id: 29,
        name: 'Magnemite',
        species: ['Electric', 'Steel'],
        description: 'At times, Magnemite runs out of electricity and ends up on the ground. If you give batteries to a grounded Magnemite, it’ll start moving again.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png',
        audio: 'https://www.myinstants.com/media/sounds/pokmon-magnemite-cry.mp3'
    },
    {
        id: 30,
        name: 'Farfetch’d',
        species: ['Normal', 'Flying'],
        description: 'The stalk this Pokémon carries in its wings serves as a sword to cut down opponents. In a dire situation, the stalk can also serve as food.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png',
        audio: 'https://www.myinstants.com/media/sounds/083-farfetchd.mp3'
    },
    {
        id: 31,
        name: 'Seel',
        species: ['Water'],
        description: 'Loves freezing-cold conditions. Relishes swimming in a frigid climate of around 14 degrees Fahrenheit.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png',
        audio: 'https://www.myinstants.com/media/sounds/086-seel.mp3'
    },
    {
        id: 32,
        name: 'Dewgong',
        species: ['Water', 'Ice'],
        description: 'Its entire body is a snowy white. Unharmed by even intense cold, it swims powerfully in icy waters.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png',
        audio: 'https://www.myinstants.com/media/sounds/dewgong-gong-gong.mp3'
    },
    {
        id: 33,
        name: 'Grimer',
        species: ['Poison'],
        description: 'Made of congealed sludge. It smells too putrid to touch. Even weeds won’t grow in its path.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png',
        audio: 'https://www.myinstants.com/media/sounds/088-grimer.mp3'
    },
    {
        id: 34,
        name: 'Shellder',
        species: ['Water'],
        description: 'It swims facing backward by opening and closing its two-piece shell. It is surprisingly fast.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png',
        audio: 'https://www.myinstants.com/media/sounds/090-shellder.mp3'
    },
    {
        id: 35,
        name: 'Onix',
        species: ['Rock', 'Ground'],
        description: 'As it digs through the ground, it absorbs many hard objects. This is what makes its body so solid.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png',
        audio: 'https://www.myinstants.com/media/sounds/095-onix.mp3'
    },
    {
        id: 36,
        name: 'Drowzee',
        species: ['Psychic'],
        description: 'If you sleep by it all the time, it will sometimes show you dreams it had eaten in the past.',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png',
        audio: 'https://www.myinstants.com/media/sounds/096-drowzee.mp3'
    },


]