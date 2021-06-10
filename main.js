/* ARRAYS - WHAT ARE THEY?

  - list items that have similarities
  - can be looped through (iterable)
  - can access items in an array with that item's index
    - ex, myArray[0] or myArray[i] where i is a number
    - items in arrays are stored in order
    - indexes are 0-based
  - array are declared like so: let myArray = ["value one", "value two"]
  - the data in an array can be changed over time (mutable)
    - we can add, remove, or modify items in an array (pop, push, shift, unshift, etc)
    - we can change the length of an array (pop, push, shift, unshift, etc)
  - arrays have a length property
    - the length is the number of items that an array contains

    Things that might make good arrays?
      - Shopping list
      - Top 10 list
      - Step-by-step instructions (cooking, driving, building furniture)
      - Ranking lists (game scores)
      - Event Attendees
      - Email List
      - The Alphabet
*/

/* OBJECTS - WHAT ARE THEY?

  - group properties of a single, unique piece of data
    - all objects of the same type would have the same properties,
      but different values
  - access the values of an object with name of the key
    ex: myObject.key || person.name || dog.name
  - objects are declared like so: 
    let myPerson = {
      firstName: "Saul",
      lastName: "Goodman",
      age: 52,
      hairColor: "brown",
    }


  Examples:
    - Dogs
      - Breed, Name, Age, Likes Treats
    - Cars
      - Year, Make, Model
    - Users
      - Username, Email, Password

*/

// A Good Example Array
let alphabet = ["a", "b", "c" /* ... the rest ... */, "z"];

// A Good Example Object
let person = {
  firstName: "P",
  lastName: "Sherman",
  address: "42 Wallaby Way, Sydney",
  age: 18,
  canVote: true,
};

// A Bad Example Array
let otherPerson = ["P", "Sherman", "42 Wallaby Way, Sydney", 18, true, false, "tomorrow afternoon"];
let age = otherPerson[3];

// A Bad Example Object
let otherAlphabet = {
  first: "a",
  second: "b",
  third: "c",
  fourth: "please stop",
  // ... the rest ...
  twentySixth: "z",
};

// A Wedding RSVP List
// We want a list of people who were invited to the wedding
// For each person we want to know the following:
//    name, plus one?, meat / fish / veggie / kosher / vegan / halal / g.f. / chicken nuggs?

let mealOptions = ["meat", "fish", "vegetarian", "kosher", "vegan", "halal", "gluten free", "chickie nuggs"];

// let randy = {
//   name: "Randy",
//   plusOne: true,
//   meal: mealOptions[7]
// }

// let kano = {
//   name: "Kano",
//   plusOne: true,
//   meal: mealOptions[1],
// }

// let joey = {
//   name: "Joey",
//   plusOne: false,
//   meal: mealOptions[6],
// }

let rsvpList = [
  {
    name: "Randy",
    plusOne: true,
    meal: mealOptions[7],
  },
  {
    name: "Kano",
    plusOne: true,
    meal: mealOptions[1],
  },
  {
    name: "Joey",
    plusOne: false,
    meal: mealOptions[6],
  },
];

rsvpList[1] === { name: "Kano", plusOne: true, meal: mealOptions[1] };
rsvpList[1].name === "Kano";

// Arrays: []
// Objects: {}
// Functions: (){}
