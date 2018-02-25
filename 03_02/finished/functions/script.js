var dogName = 'Rover'

function myDog() { // function declaration
	console.log("dog name is " + dogName) // dogName is undefined bc of hoisting
	console.log("cat name is " + catName) // gives error
	var dogName = "terry"
}

myDog() // we cud call function declarations before we create them 
//(but not the case for function expressions)

