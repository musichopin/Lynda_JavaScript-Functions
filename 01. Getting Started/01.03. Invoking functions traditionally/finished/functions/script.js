function plus(a,b) {
  var x = 20;
  console.log(x);
  return (
    console.log(a+b),
    console.log(this),
    console.log(arguments)
  );
}

plus(2,2) 
// this kw refers to global window object and plus() becomes function

new plus(2,2) 
// this kw refers to local plus object and plus() becomes obj constructor