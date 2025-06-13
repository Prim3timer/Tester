let quiz = [
    {
      id: 1,
      quiz: "Which of these adjectives best applies to an elephant?",
      options: ["Indian", "European", "Australian", "American"],
      answer: "Indian",
    },
    {
      id: 2,
      quiz: "How many legs does a spider have?",
      options: ['2', '4', '6', '8'],
      answer: '8',
    },
    {
      id: 3,
      quiz: "The ocean b/w America and Africa is?",
      options: ["Pacific", "Atlantic", "Indian", "Red Sea"],
      answer: "Atlantic",
    },
    {
      id: 4,
      quiz: "Which of these is a car?",
      options: ["Nivea", "Samsung", "Toyota", "Philips"],
      answer: "Toyota",
    },
    {
      id: 5,
      quiz: "What country has no river?",
      options: ["Japan", "Saudi Arabia", "Tunisia", "Chile"],
      answer: "Saudi Arabia",
    },
    {
      id: 6,
      quiz: "What is the most peaceful country in the world?",
      options: ["Thailand", "USA", "Switzerland", "Nigeria"],
      answer: "Switzerland",
    },
    {
      id: 7,
      quiz: "What is the oldest sports in the world?",
      options: ["Baseball", "Wrestling", "Football", "Swimming"],
      answer: "Wrestling",
    },
    {
      id: 8,
      quiz: "What is the longest river in the world?",
      options: ["Nile", "Mississippi", "Rhine", "Mersy"],
      answer: "Nile",
    },
    {
      id: 9,
      quiz: "If 4 cubes cost $1, how much will 18 cubes cost?",
      options: ["$5", "$4.5", "$10", "$3.25"],
      answer: "$4.5",
    },
    {
      id: 10,
      quiz: " The first world cup winner is?",
      options: ["Mali", "Brazil", "Uraguay", "England"],
      answer: "Uraguay",
    },
    {
      id: 11,
      quiz: " What is the largest continent in the world?",
      options: ["Asia", "South America", "Africa", "North America"],
      answer: "Asia",
    },
    {
      id: 12,
      quiz: " What is smallest country in the world?",
      options: ["Swaziland", "Vatican City", "China", "Russia"],
      answer: "Vatican City",
    },
    {
      id: 13,
      quiz: " What is the most populous country in the world?",
      options: ["India", "Nigeria", "USA", "China"],
      answer: "India",
    },
    {
      id: 14,
      quiz: " How many degrees longitude make a timezone?",
      options: [
        "10",
        "15",
        "30",
        "45",
      ],
      answer: "15",
    },
    {
      id: 15,
      quiz: " A triangle with three equal sides is called?",
      options: [
        "Equotorial Triangle",
        "Ekwelie Triangle",
        "Equilateral Triangle",
        "Ekwulobia Triangle",
      ],
      answer: "Equilateral Triangle",
    },
    {
      id: 16,
      quiz: " In what year was Queen Elizabeth II crowned?",
      options: ["1953", "1958", "1960", "1962"],
      answer: "1953",
    },
    {
      id: 17,
      quiz: " 6.2 X 3",
      options: ['22.6', '18.6', '19.6', '20.6'],
      answer: '18.6',
    },

    {
      id: 18,
      quiz: " Who is the first person to reach the North Pole?",
      options: [
        "Robert Peary",
        "Alexandar the Great",
        "Vasco Dagama",
        "Captain Cook",
      ],
      answer: "Robert Peary",
    },
    {
      id: 19,
      quiz: " Which country is home to Audi automobile headquarters?",
      options: ["Sweeden", "France", "Belgium", "Germany"],
      answer: "Germany",
    },
    {
      id: 20,
      quiz: " How many persons have ever landed on the moon?",
      options: ['1', '12', '6', '8'],
      answer: '12',
    },
    {
      id: 21,
      quiz: " How many cloud types are there in the sky?",
      options: ['7', '1', '9', '6'],
      answer: '9',
    },
    {
      id: 22,
      quiz: " What is the name of the longest side of a right angled triangle?",
      options: ["Hypotenus", "Base", "Tangent", "Adjent"],
      answer: "Hypotenus",
    },
    {
      id: 23,
      quiz: " Which of these planets is closest to the sun?",
      options: ["Sarturn", "Venus", "Earth", "Mars"],
      answer: "Venus",
    },
    {
      id: 24,
      quiz: " Through what does insects breathe?",
      options: ["Miracle", "Spiracle", "Oracle", "Tentacle"],
      answer: "Spiracle",
    },
    {
      id: 25,
      quiz: " Which of these animals lay eggs?",
      options: ["Whales", "Dolphins", "Sharks", "Anaconda"],
      answer: "Sharks",
    },
    {
      id: 26,
      quiz: "Which of these whales is the largest?",
      options: ["Killer Whale", "Sperm Whale", "Blue Whale", "Orca Whale"],
      answer: "Blue Whale"
    },
    {
      id: 27,
      quiz: "Which of these is a nutrient?",
      options: ["Meat", "Fat", "Juice", "Fish"],
      answer: "Beer"
    },
    {
      id: 28,
      quiz: "The first woman to fly accros the Atlantic Ocean was...",
      options: ["Maryline Monroe", "Marie Curie", "Amelia Earhart", "Queen Elizabeth II"],
      answer: "Amelia Earhart"
    },
    {
      id: 29,
      quiz: "What is the largest cat?",
      options: ["Cheetah", "Tiger", "Lion", "Leopard"],
      answer: "Tiger"
    },
    {
      id: 30,
      quiz: "When did man first orbit earth?",
      options: ["1900", "1954", "1999", "1961"],
      answer: "1961"
    },
    {
      id: 31,
      quiz: "How many planets are there in our solar system?",
      options: ["8", "3", "10", "15"],
      answer: "8"
    },
    {
      id: 32,
      quiz: "What direction does the Nile flow?",
      options: ["East", "West", "North", "South"],
      answer: "North"
    },
    {
      id: 33,
      quiz: "What is the name of the first dog to go to space?",
      options: ["Laika", "Molly", "Mack", "Lassy"],
      answer: "Laika"
    }

  ];

    
    function fisherYatesShuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      arr.length = 25
      return arr;
    }
  
      quiz = fisherYatesShuffle(quiz)
  


  export default quiz