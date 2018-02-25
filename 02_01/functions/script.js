var calc = {
  status: 'Awesome',
  plus: function (a,b) {
  	var x = 5;
    return (
      console.log(this),
      console.log(a+b),
      console.log(arguments),
      console.log(this.status),
      console.log(x)
    )
  }
}

calc.plus(2,2);

/*
var x = calc.plus;

y = x.bind(calc, 12, 5)

y();
*/

/*
var x = calc.plus;

y = x.bind(calc)

y(12, 5);
*/