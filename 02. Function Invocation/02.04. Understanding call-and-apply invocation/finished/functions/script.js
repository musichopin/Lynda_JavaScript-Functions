// call, bind and apply lets us bind objects to functions through this kw

var speak = function(what) {
  console.log(what);
  console.log(this.love);
}

var saySomething = {normal: "meow", love: "purr"}

speak.apply(saySomething, [saySomething.normal]);
speak.call(saySomething, saySomething.normal);
speak.bind(saySomething, saySomething.normal)();
//vers1: 
//saySomething.normal = "hauv";
//var speaker = speak.bind(saySomething, saySomething.normal)
//speaker()
//vers2: speak.bind(null, saySomething.normal)();//speak() points 2 window obj
//ex1: 
//saySomething.func = speak;
//saySomething.func(saySomething.normal);