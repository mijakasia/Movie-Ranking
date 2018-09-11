var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([{
  	id: 1,
    data: {
      title: "The Shawshank Redemption",
      type: 'drama',
      year: '1994',
      rating: '',
      user_ratings: '',
      description: 'Adapted from the Stephen King novella Rita Hayworth and Shawshank Redemption, the film tells the story of Andy Dufresne, a banker who spends 19 years in Shawshank State Prison for the murder of his wife and her lover despite his claims of innocence.',
    }
  },
  {
    id: 2,
    data: {
      title: "Intouchables",
      type: 'comedy',
      year: '2011',
      rating: '',
      user_ratings: '',
      description: 'An irreverent, uplifting comedy about friendship, trust and human possibility. Based on a true story of friendship between a handicap millionaire (Francois Cluzet) and his street smart ex-con caretaker (Omar Sy), The Intouchables depicts an unlikely camaraderie rooted in honesty and humor between two individuals who, on the surface, would seem to have nothing in common.',
    }
  },
  {
    id: 3,
    data: {
      title: "The Green Mile",
      type: 'drama',
      year: '1999',
      rating: '',
      user_ratings: '',
      description: 'In 1935, inmates at the Cold Mountain Correctional Facility call Death Row "The Green Mile" because of the dark green linoleum that tiles the floor. Paul Edgecomb (Tom Hanks) is the head guard on the Green Mile when a new inmate is brought into his custody: John Coffey (Michael Clarke Duncan), convicted of the sadistic murder of two young girls.'
    }
  },
  {
    id: 4,
    data: {
      title: "The Godfather",
      type: 'drama',
      year: '1972',
      rating: '',
      user_ratings: '',
      description: 'When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.'
    }
  },
  {
    id: 5,
    data: {
      title: "Forrest Gump",
      type: 'comedy',
      year: '1994',
      rating: '',
      user_ratings: '',
      description: 'Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, inspires people to jog, starts a ping-pong craze, writes bumper stickers and songs, donates to people and meets the president several times.'
    }
  },
  {
    id: 6,
    data: {
      title: "Schindler's list",
      type: 'drama',
      year: '1993',
      rating: '',
      user_ratings: '',
      description: 'Oskar Schindler is a vainglorious and greedy German businessman who becomes an unlikely humanitarian amid the barbaric German Nazi reign when he feels compelled to turn his factory into a refuge for Jews. Based on the true story of Oskar Schindler who managed to save about 1100 Jews from being gassed at the Auschwitz concentration camp, it is a testament to the good in all of us.'
    }
  },
  {
    id: 7,
    data: {
      title: "Lord of the rings: The Return of the King",
      type: 'fantasy',
      year: '2003',
      rating: '',
      user_ratings: '',
      description: 'The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. Hobbits: Frodo and Sam reach Mordor in their quest to destroy the "one ring", while Aragorn leads the forces of good against Sauron\'s evil army at the stone city of Minas Tirith.'
    }
  },
  {
    id: 8,
    data: {
      title: "Fight Club",
      type: 'thriller',
      year: '1999',
      rating: '',
      user_ratings: '',
      description: 'In this darkly comic drama, Edward Norton stars as a depressed young man (named in the credits only as "Narrator") who has become a small cog in the world of big business. He doesn\'t like his work and gets no sense of reward from it, attempting instead to drown his sorrows by putting together the "perfect" apartment. He can\'t sleep and feels alienated from the world at large; he\'s become so desperate to relate to others that he\'s taken to visiting support groups for patients with terminal diseases so that he\'ll have people to talk to. One day on a business flight, he discovers Tyler Durden (Brad Pitt), a charming iconoclast who sells soap.',
    }
  },
  {
    id: 9,
    data: {
      title: "Goodfellas",
      type: 'dramat',
      year: '1990',
      rating: '',
      user_ratings: '',
      description: 'Henry Hill might be a small time gangster, who may have taken part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who might have set their sights a bit higher. His two partners could kill off everyone else involved in the robbery, and slowly start to think about climbing up through the hierarchy of the Mob. Henry, however, might be badly affected by his partners\' success, but will he consider stooping low enough to bring about the downfall of Jimmy and Tommy?'
    }
  },
  {
    id: 10,
    data: {
      title: "Incepton",
      type: 'thriller',
      year: '2010',
      rating: '',
      user_ratings: '',
      description: 'Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb\'s rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption.'
    }
  },
  {
    id: 11,
    data: {
      title: "The Silence od the Lambs",
      type: 'thriller',
      year: '1991',
      rating: '',
      user_ratings: '',
      description: 'FBI trainee Clarice Starling works hard to advance her career, while trying to hide/put behind her West Virginia roots, of which if some knew, would automatically classify her as being backward or white trash. After graduation, she aspires to work in the agency\'s Behavioral Science Unit under the leadership of Jack Crawford. While she is still a trainee, Crawford asks her to question Dr. Hannibal Lecter, a psychiatrist imprisoned, thus far, for eight years in maximum security isolation for being a serial killer who cannibalized his victims.'
    }
  },
  {
    id: 12,
    data: {
      title: "Shrek",
      type: 'animated',
      year: '2001',
      rating: '',
      user_ratings: '',
      description: 'When a green ogre named Shrek discovers his swamp has been \'swamped\' with all sorts of fairytale creatures by the scheming Lord Farquaad, Shrek sets out with a very loud donkey by his side to \'persuade\' Farquaad to give Shrek his swamp back. Instead, a deal is made. Farquaad, who wants to become the King, sends Shrek to rescue Princess Fiona, who is awaiting her true love in a tower guarded by a fire-breathing dragon.'
    }
  },
  {
    id: 13,
    data: {
      title: "Deadpol",
      type: 'comedy',
      year: '2016',
      rating: '',
      user_ratings: '',
      description: 'This is the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.'
    }
  },
  {
    id: 14,
    data: {
      title: "Django",
      type: 'western',
      year: '2012',
      rating: '',
      user_ratings: '',
      description: 'In 1858, a bounty hunter named Schultz seeks out a slave named Django and buys him because he needs him to find some men he is looking for. After finding them, Django wants to find his wife, Brunhilde, who along with him were sold separately by his former owner for trying to escape. Schultz offers to help him if he chooses to stay with him and be his partner. Eventually they learn that she was sold to a plantation in Mississipi.'
    }
  },
  {
    id: 15,
    data: {
      title: "The Pianist",
      type: 'drama',
      year: '2002',
      rating: '',
      user_ratings: '',
      description: 'In this adaptation of the autobiography "The Pianist: The Extraordinary True Story of One Man\'s Survival in Warsaw, 1939-1945," Wladyslaw Szpilman, a Polish Jewish radio station pianist, sees Warsaw change gradually as World War II begins. Szpilman is forced into the Warsaw Ghetto, but is later separated from his family during Operation Reinhard. From this time until the concentration camp prisoners are released, Szpilman hides in various locations among the ruins of Warsaw.'
    }
  },
  {
    id: 16,
    data: {
      title: "Shutter Island",
      type: 'thriller',
      year: '2010',
      rating: '',
      user_ratings: '',
      description: 'It\'s 1954, and up-and-coming U.S. marshal Teddy Daniels is assigned to investigate the disappearance of a patient from Boston\'s Shutter Island Ashecliffe Hospital. He\'s been pushing for an assignment on the island for personal reasons, but before long he wonders whether he hasn\'t been brought there as part of a twisted plot by hospital doctors whose radical treatments range from unethical to illegal to downright sinister.'
    }
  },
  {
    id: 17,
    data: {
      title: "The Lion King",
      type: 'animated',
      year: '1994',
      rating: '',
      user_ratings: '',
      description: 'A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be?'
    }
  },
  {
    id: 18,
    data: {
      title: "Zootopia",
      type: 'animated',
      year: '2016',
      rating: '',
      user_ratings: '',
      description: 'From the largest elephant to the smallest shrew, the city of Zootopia is a mammal metropolis where various animals live and thrive. When Judy Hopps becomes the first rabbit to join the police force, she quickly learns how tough it is to enforce the law. Determined to prove herself, Judy jumps at the opportunity to solve a mysterious case. Unfortunately, that means working with Nick Wilde, a wily fox who makes her job even harder.'
    }
  },
  {
    id: 19,
    data: {
      title: "Unforgiven",
      type: 'western',
      year: '1992',
      rating: '',
      user_ratings: '',
      description: 'The town of Big Whisky is full of normal people trying to lead quiet lives. Cowboys try to make a living. Sheriff \'Little Bill\' tries to build a house and keep a heavy-handed order. The town whores just try to get by.Then a couple of cowboys cut up a whore. Dissatisfied with Bill\'s justice, the prostitutes put a bounty on the cowboys. The bounty attracts a young gun billing himself as \'The Schofield Kid\', and aging killer William Munny.'
    }
  },
  {
    id: 20,
    data: {
      title: "Scarface",
      type: 'drama',
      year: '1983',
      rating: '',
      user_ratings: '',
      description: 'Tony Montana manages to leave Cuba during the Mariel exodus of 1980. He finds himself in a Florida refugee camp but his friend Manny has a way out for them: undertake a contract killing and arrangements will be made to get a green card. He\'s soon working for drug dealer Frank Lopez and shows his mettle when a deal with Colombian drug dealers goes bad. He also brings a new level of violence to Miami. Tony is protective of his younger sister but his mother knows what he does for a living and disowns him.'
    }
  },
]);
});

module.exports = router;
