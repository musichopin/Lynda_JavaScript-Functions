var Dog = function() {
  return console.dir(this);
}

firstDog = new Dog();
firstDog.name = "Rover";
firstDog.breed = "Doberman";

secondDog = new Dog;
secondDog.name = "Fluffy";
secondDog.breed = "Poodle"