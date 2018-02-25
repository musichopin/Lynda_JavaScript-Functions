var plus = function() {
  var sum =  0;
  for (var i = arguments.length - 1; i >= 0; i--) {
    sum += arguments[i]; // arguments is array like object
  };
  return sum;
}

console.log(plus(2,2,2,3,2,3,4));