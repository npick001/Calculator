var Modifiers = require('./Modifiers.js');
let operation = new Modifiers();

window.prompt("1: Add ");
window.prompt("2: Subtract ");
window.prompt("3: Multiply ");
window.prompt("4: Divide ");
window.prompt("5: Cos(First Input) ");
window.prompt("6: Sin(First Input) ");

var input = window.prompt("What operation would you like to do? (Enter Int)");
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
window.prompt(output);