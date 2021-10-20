var Modifiers = require('./Modifiers.js');
let operation = new Modifiers();

console.log("1: Add ");
console.log("2: Subtract ");
console.log("3: Multiply ");
console.log("4: Divide ");
console.log("5: Cos(First Input) ");
console.log("6: Sin(First Input) ");

var input = console.log("What operation would you like to do? (Enter Int)");
switch(input){
    case 1:
        output = operation.Add();
        break;
    case 2:
        output = operation.Subtract();
        break;
    case 3:
        output = operation.Multiply();
        break;
    case 4:
        output = operation.Divide();
        break;
    case 5:
        output = operation.Sin();
        break;
    case 6:
        output = operation.Cos();
        break;
}
console.log(output);