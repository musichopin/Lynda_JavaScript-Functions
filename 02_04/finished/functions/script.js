// call, bind and apply lets us bind objects to functions through this kw

var speak = function(what) {
  console.log(what);
  console.log(this.love);
}

var saySomething = {normal: "meow", love: "purr"}
speak.apply(saySomething, [saySomething.normal]);
speak.call(saySomething, saySomething.normal);
speak.bind(saySomething, saySomething.normal)();
//speak.bind(null, saySomething.normal)(); // speak() points to window object
