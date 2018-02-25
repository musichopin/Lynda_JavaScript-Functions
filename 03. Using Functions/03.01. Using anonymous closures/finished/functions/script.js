(function() {
  console.log(arguments[0]+arguments[1]);
})(5, 7);

/* 
ex1: real closure:

(function(z) {
	var x = 5;
	var y = 15
	var closure_func = function(){
		var x = 10;
		console.log(x)
		console.log(y)
		console.log(z)
	}
	closure_func()
})(20);
*/