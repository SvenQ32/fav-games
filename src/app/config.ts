export interface Game {
  id: number;
  title: string;
  category: string;
  rating: number;
  iconPath?: string; // Optional path to custom icon
}

export interface FrontPageConfig {
  type: 'frontpage';
  background: string;
  profilePicture: string;
  title: string;
  description: string;
}

export interface PageConfig {
  type?: 'games';
  title: string;
  background: string;
  tilesPerPage: number;
  games: Game[];
}

export type PageItem = FrontPageConfig | PageConfig;

export const pagesConfig: PageItem[] = [
  {
    type: 'frontpage',
    background: '#000000',
    profilePicture: '/fav-games/images/crab-rave.gif', // Default profile picture
    title: 'Mi Games',
    description: 'mijnvbcxcxbv favo games',
  },
  {
    title: "Wii U",
    background: "#000000", // black
    tilesPerPage: 5,
    games: [
      {
        id: 1,
        title: 'Pokkén Tournament',
        category: 'de og pokemon game',
        rating: 9.8,
        iconPath: '/fav-games/images/pokkentournament.jpg', // Empty = use default Ethereum icon
      },
      {
        id: 2,
        title: 'Poképark',
        category: 'gewoon een klassieker',
        rating: 9,
        iconPath: '/fav-games/images/pokepark.jpg',
      },
      {
        id: 3,
        title: 'The Legend of Zelda: The Wind Waker',
        category: 'enige zelda game die ik ooit gespeeld heb',
        rating: 6,
        iconPath: '/fav-games/images/zeldawindwaker.jpg',
      },
      {
        id: 4,
        title: 'Paper Mario: Color Splash',
        category: 'leuke story, uniek, ook leuke combat',
        rating: 7,
        iconPath: '/fav-games/images/papermariocolorsplash.jpg',
      },
      {
        id: 5,
        title: 'LEGO Marvels Avengers',
        category: 'eerste open world game hit toch wel wat different',
        rating: 9.8,
        iconPath: '/fav-games/images/legomarvelavengers.jpg',
      },
    ]
  },
  {
    title: "Bioshock",
    background: "#000000", // black
    tilesPerPage: 1,
    games: [
      {
        id: 7,
        title: 'BioShock Remastered',
        category: 'eerste pc story game, beetje matig, oude graphics, kon story niet echt appreciëren',
        rating: 5.4,
        iconPath: '/fav-games/images/bioshockremaster.jpg',
      },
    ]
  },
  {
    title: "Tomb Raider Trilogy",
    background: "#000000", // black
    tilesPerPage: 3,
    games: [
      {
        id: 8,
        title: 'Tomb Raider',
        category: 'beste combat, sluipen, goeie story',
        rating: 9,
        iconPath: '/fav-games/images/tombraider.jpg', // Empty = use default Ethereum icon
      },
      {
        id: 9,
        title: 'Rise of the Tomb Raider',
        category: 'beste combat, sluipen, goeie story',
        rating: 9,
        iconPath: '/fav-games/images/riseofthetombraider.jpg',
      },
      {
        id: 10,
        title: 'Shadow of the Tomb Raider',
        category: 'beste combat, sluipen, goeie story',
        rating: 9,
        iconPath: '/fav-games/images/shadowofthetombraider.jpg',
      },
    ]
  },
  {
    title: "33",
    background: "#000000", // black
    tilesPerPage: 2,
    games: [
      {
        id: 11,
        title: 'Fallout 3',
        category: 'leuk idee, grote map maar ben er halverwege mee gestopt omdat het saaie story had',
        rating: 4,
        iconPath: '/fav-games/images/fallout3.png', // Empty = use default Ethereum icon
      },
      {
        id: 12,
        title: 'Borderlands 3',
        category: 'beste combat, sluipen, goeie story',
        rating: 6,
        iconPath: '/fav-games/images/borderlands3.jpg',
      },
    ]
  },
  {
    title: "Yo ho",
    background: "#000000", // black
    tilesPerPage: 1,
    games: [
      {
        id: 13,
        title: 'Still Wakes the Deep',
        category: 'toen net uitgekomen, nice story, goede graphics ',
        rating: 8,
        iconPath: '/fav-games/images/stillwakesthedeep.jpg', // Empty = use default Ethereum icon
      },
    ]
  },
  {
    title: "Firewatch",
    background: "#000000", // black
    tilesPerPage: 1,
    games: [
      {
        id: 14,
        title: 'Firewatch',
        category: 'zomer 2025 vibes, mooie graphics, leuk, kort',
        rating: 8.5,
        iconPath: '/fav-games/images/firewatch.jpg', // Empty = use default Ethereum icon
      },
    ]
  },
  {
    title: "Resident Evil",
    background: "#000000", // black
    tilesPerPage: 1,
    games: [
      {
        id: 15,
        title: 'Resident Evil 7: Biohazard',
        category: 'zomer 2025 vibes, mooie graphics, leuk, kort',
        rating: 8.5,
        iconPath: '/fav-games/images/residentevil7.jpg', // Empty = use default Ethereum icon
      },
    ]
  },
  {
    title: "The Evil Within",
    background: "#000000", // black
    tilesPerPage: 1,
    games: [
      {
        id: 16,
        title: 'The Evil Within 2',
        category: 'zomer 2025 vibes, mooie graphics, leuk, kort',
        rating: 8.5,
        iconPath: '/fav-games/images/evilwithin2.jpg', // Empty = use default Ethereum icon
      },
    ]
  },
  {
    title: "Red Dead Redemption",
    background: "#000000", // black
    tilesPerPage: 1,
    games: [
      {
        id: 17,
        title: 'Red Dead Redemption 2',
        category: 'een van de beste games die ik al heb gespeeld, mooie graphics zeker voor 2018, kapot nice story',
        rating: 10,
        iconPath: '/fav-games/images/rdr2.jpg', // Empty = use default Ethereum icon
      },
    ]
  },
  {
    title: "Split-Screen Games",
    background: "#000000", // black
    tilesPerPage: 2,
    games: [
      {
        id: 18,
        title: 'It Takes Two',
        category: 'super nice minigames, puzzels maar tering rare story(niet echt zo goed gevolgd), wel heel leuk om samen te spelen',
        rating: 8.8,
        iconPath: '/fav-games/images/ittakestwo.jpg', // Empty = use default Ethereum icon
      },
      {
        id: 19,
        title: 'A Way Out',
        category: 'een beetje een klassieker, sterke story, leuk om samen te doen',
        rating: 8.8,
        iconPath: '/fav-games/images/awayout.jpg',
      },
    ]
  },
  {
    title: "The Last of Us",
    background: "#000000", // black
    tilesPerPage: 2,
    games: [
      {
        id: 20,
        title: 'The Last of Us Part 1 (Remastered)',
        category: 'een van de beste games die ik ooit heb gespeeld, kapot nice story, w graphics, beetje evil within achtige gameplay',
        rating: 10,
        iconPath: '/fav-games/images/lastofuspart1.jpg', // Empty = use default Ethereum icon
      },
      {
        id: 21,
        title: 'The Last of Us Part 2',
        category: 'een van de beste games die ik ooit heb gespeeld, kapot nice story, w graphics, beetje evil within achtige gameplay',
        rating: 10,
        iconPath: '/fav-games/images/lastofuspart2.jpg',
      },
    ]
  },
  {
    title: "The Stanley Parable",
    background: "#000000", // black
    tilesPerPage: 1,
    games: [
      {
        id: 22,
        title: 'The Stanley Parable',
        category: 'kort maar leuk, beetje existentieel en grappig, eens iets anders',
        rating: 7,
        iconPath: '/fav-games/images/stanleyparable.jpg', // Empty = use default Ethereum icon
      },
    ]
  },
  {
    title: "Spider-Man Games",
    background: "#000000", // black
    tilesPerPage: 1,
    games: [
      {
        id: 23,
        title: 'Marvels Spider-Man Remastered',
        category: 'aant spelen',
        rating: 5,
        iconPath: '/fav-games/images/spidermanremaster.png', // Empty = use default Ethereum icon
      },
    ]
  },
];
