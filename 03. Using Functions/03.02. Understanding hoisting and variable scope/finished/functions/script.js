var dogName = 'Rover'

function myDog() { // function declaration
	console.log("dog name is " + dogName) // dogName is undefined bc of hoisting
	console.log("cat name is " + catName) // gives error
	var dogName = "terry"
}

myDog() // we cannot call function expressions before we create them 
//(but not the case for function declarations)

// // ex: scope for conditionals/loop is different than function
// var x = 10; // x declare edilmese bile hata vermezdi
// var y = 12;
// if(true) {
// 	var x = 5;
// }

// function a() {
// 	var y = 6;
// }

// console.log(x) // 5
// console.log(y) // 12