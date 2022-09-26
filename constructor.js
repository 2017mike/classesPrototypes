// constructors
//prototype functions

//to make objects

// {
//   key: value,
//   ability to do some function
// }

function Pokemon(inputName, inputType) {
  this.name = inputName;
  this.type = inputType;
}

Pokemon.prototype.attack = function () {
  console.log(`${this.name} attacked!`);
};

const squirtle = new Pokemon("squirtle", "water");

squirtle.attack();

class Pokemon {
  constructor(name, type) {
    (this.name = name), (this.type = type);
  }
  attack() {
    console.log(`${this.name} attacked!`);
  }
}

const squirtle = new Pokemon("squirtle", "water");
console.log(squirtle);
squirtle.attack();
