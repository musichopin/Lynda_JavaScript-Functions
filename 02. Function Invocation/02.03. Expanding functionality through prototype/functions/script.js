var speak = function(saywhat) { // lower case
  console.log(saywhat);
  console.log(this.name);
  console.log(this.nom);
}

var no = 5;

var Dog = function() { // upper case
  // function called(){console.log(name)} 	// local func + undefined name var
  // this.called = function (){console.log(this.name)}	// right
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

/* vers1: without prototype
firstDog = new Dog;

firstDog.speaker = speak;

firstDog.name = "Rover";
firstDog.speaker('woof');
*/

/*
speak.bind(firstDog)("hauv")
*/

/* vers2: for in sta with arrays doesnt guarantee order and iterates 
// inherited props unless with eliminate with hasOwnProperty():
Array.prototype.foo = "foo!";
var b = ['a', 'b', 'c'];
var c = ['1', '2', '3'];

for (var i in c) {
	if (c.hasOwnProperty(i)) {
		alert(c[i]);
	}
}*/