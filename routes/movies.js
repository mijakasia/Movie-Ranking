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
    }
  },
  {
    id: 12,
    data: {
      title: "Shrek",
      type: 'comedy',
      year: '2001',
      rating: '',
      user_ratings: '',
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
    }
  },
]);
});

module.exports = router;
