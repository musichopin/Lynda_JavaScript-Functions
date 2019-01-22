function plus(a, b) {
  var sum = a+b;
  return sum;
}

console.log(plus(2,2));


/*
function plus(a, b) {
  this.sum = a+b;
}

pl = plus

x = new pl(1,2)

console.log(x.sum);
*/


/*
function plus(a, b) {
  this.sum = a+b;
}

pl = plus;

pl(1, 2)

console.log(this.sum) // alt: console.log(sum)
*/