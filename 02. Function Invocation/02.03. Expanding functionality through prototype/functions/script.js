var speak = function(saywhat) { // lower case (func)
	this.x = "within func";
  console.log(saywhat);
  console.log(this.x);
  console.log(this.name);
  console.log(this.nom);
}

var no = 5;

var Dog = function() { // upper case (obj constructor)
}

var Cat = function() { // upper case
  var name;
}

Dog.prototype.speaker = speak;
Dog.prototype.nom = no;
Cat.prototype.speaker = speak;
Cat.prototype.nom = no;

firstDog = new Dog;
firstDog.name = "Rover";
firstDog.nom = 6;
firstDog.speaker('woof');

firstCat = new Cat;
firstCat.name = "Sniggles";
firstCat.speaker('meow');

/* ex1: without prototype (less common)
firstDog = new Dog;
firstDog.speaker = speak;
firstDog.nom = no;
firstDog.name = "Rover";
firstDog.speaker('woof');
*/


/* ex2: using bind()
Dog.prototype.nom = no; // alt: firstDog.nom = no;
firstDog = new Dog;
firstDog.name = "Rover";
speak.bind(firstDog)("hauv")
// alt: speak.bind(firstDog, "hauv")()
*/


/* ex3: for in sta with arrays doesnt guarantee order and iterates 
// inherited props unless with eliminate with hasOwnProperty():
Array.prototype.foo = "foo!";
var b = ['a', 'b', 'c'];
var c = ['1', '2', '3'];

for (var i in c) {
	if (c.hasOwnProperty(i)) {
		alert(c[i]);
	}
}*/