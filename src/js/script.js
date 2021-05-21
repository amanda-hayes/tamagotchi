/* ======================
Tamagotchi
=========================*/

// 1. Make a Modal
// - Make a modal that provide information about the game
// - The modal should appear when the page loads and have a button on it that begins the game
// - When the user clicks start game the modal should disappear and the Tamagotchi should appear

// 2. Make a Carousel
// - Allow the user to choose a background from a carousel of images
// - When the user selects that image, apply it to the background of the page

// 3. Make a Tamagotchi Class
// - The Tamagotchi should have the following properties: name, hunger, sleepiness, boredom, age
// - The Tamagotchi should have the following methods: eat, sleep, play
// - Your pet should morph to a teenager at 5 years old and an adult at 10 years old
// - Your pet should die if hunger, boredom or sleepiness hits 10
// - Your Tamagotchi should append itself to the dom

/* ======================
CACHED DOM NODES
=========================*/

/* ======================
CREATE Tamagotchi
=========================*/
class Tamagotchi {
  constructor(name, hunger, sleepiness, boredom, age) {
    this.name = name;
    this.hunger = hunger;
    this.sleepiness = sleepiness;
    this.boredom = boredom;
    this.age = age;
  }

  updateCurrentStats() {
    
  }
  
  birth() {
    const div = document.createElement("div");
  }

  eat() {
    return this.hunger++;
  }

  sleep() {
    return this.sleepiness--;
  }

  play() {
    return this.boredom--;
  }
}

const firstPet = new Tamagotchi("ernie", 1, 1, 1, 0);

/* ======================
GLOBAL VARS
=========================*/

/* =============================
FUNCTIONS
============================= */

/* =============================
EVENT LISTENERS
============================= */
let age = Tamagotchi.age {
    if (Tamagotchi.age == 5) {

    }
}