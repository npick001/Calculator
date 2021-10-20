var firstInput = console.log("First Number: ");
var secondInput = console.log("Second Number: ");

class Modifiers{
    Add(firstInput, secondInput){
       result = firstInput + secondInput;
        return result;
    };   
    Subtract(firstInput, secondInput){
       result = firstInput - secondInput;
        return result;
    };     
    Multiply(firstInput, secondInput){
       result = firstInput * secondInput; 
        return result;
    };    
    Divide(firstInput, secondInput){
        result = firstInput / secondInput;
        return result;
    };
    Factorial(x){
        for(var i = 0; i <= x; i++){
            x = x * i;
        }
    }

    Sin(firstInput){
        var result = firstInput;
        for (var i = 0; i < 9; i++){
            currentValue = Math.pow(firstInput, (i*2)+1);
            currentValue /= this.Factorial(i*2);
            if (i & 0x01){
                result -= currentValue;
            }
            else{
                result += currentValue;
            }
        }
        return result;
    }
    Cos(firstInput){
        var result = firstInput;
        for (var i = 0; i < 9; i++){
            currentValue = Math.pow(firstInput, (i*2));
            currentValue /= this.Factorial((i*2)-1);
            if (i & 0x01){
                result -= currentValue;
            }
            else{
                result += currentValue;
            }
        }
        return result;
    }
} 
module.exports = Modifiers;
