var calc = {
  status: 'Awesome',
  plus: function (a,b) {
  	var x = 5;
    this.y = 10;
    return (
      console.log(this),
      console.log(a+b),
      console.log(arguments),
      console.log(this.status),
      console.log(x),
      console.log(this.y)
    )
  }
}

calc.plus(2,2);


/* ex1:
var x = calc.plus;

y = x.bind(calc, 12, 5)

y();
// x.bind(calc)();
// x.bind(null, 12, 5)();
// x();
*/


/* ex2:
var x = calc.plus;

y = x.bind(calc)

y(12, 5);
*/