function createCalculator(num1, num2){

    let a = num1;
    let b = num2;

    return {
        add: function(){
            let result = a + b;
            console.log(`Sum = ${result}`);
            
        },

        subtract: function(){
            let result = a - b;
            console.log(`Difference = ${result}`);
        },

        multiply: function(){
            let result = a * b;
            console.log(`Product = ${result}`);
        },

        divide: function(){
            let result = a / b;
            console.log(`Quotient = ${result}`);
        },

        remainder: function(){
            let result = a % b;
            console.log(`Remainder = ${result}`);
        }
    }
}

const calculator = createCalculator(7, 4)
calculator.add();
calculator.subtract();
calculator.multiply();
calculator.divide();
calculator.remainder();