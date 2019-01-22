var ray = (function() {
  return {
    speak: function() {
      console.log('hello');
    } // no semicolon
  };
})();



/* ex1: 
var ray = (function() {
  return (
    function() {
      console.log("hello")
    } // no semicolon
  )
})();

ray();
*/


/* ex2: 
var ray = (function() {
  return (
    "hello";
  )
})();

console.log(ray)
*/

/* ex3: 

ray.speak();

var ray = {
    speak: function() {
      console.log('hello');
    }
};
*/

/* ex4:
(function() {
	function speak() {
		console.log('hello');
	}
	speak()
})();
*/

/* ex5:
var ray = function() {
  return {
    speak: function() {
      console.log('hello');
    }
  };
};

ray().speak();
*/


/*ex6:
(function() {
  return ( // no need to write return sta
      console.log('hello')
  );
})();
*/