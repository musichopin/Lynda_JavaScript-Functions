var ray = (function() {
  return {
    speak: function() {
      console.log('hello');
    }
  };
})();

/*
vers-1: caller: ray();

var ray = (function() {
  return (
  	function() {
  		console.log("hello")
  	}
  )
})();
*/

/*
vers0: caller: console.log(ray)

var ray = (function() {
  return (
  	"hello";
  )
})();
*/

/*
vers1: caller: ray.speak();

var ray = {
    speak: function() {
      console.log('hello');
    }
};
*/

/*
vers2:

(function() {
	function speak() {
		console.log('hello');
	}
	speak()
})();
*/

/*
vers3: caller: ray().speak();

var ray = function() {
  return {
    speak: function() {
      console.log('hello');
    }
  };
};
*/
