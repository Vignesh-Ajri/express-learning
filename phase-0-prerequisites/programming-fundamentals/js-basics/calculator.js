// Simple calculator program

let num1 = 10, num2 = 20, operator = "+";

function calculate(num1,num2){
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                throw new Error("Division by zero is not allowed!");
            }
            return num1 / num2;
        default:
            throw new Error("Invalid operator! Use +, -, *, or /");
    }
}

try {
    const result = calculate(num1, num2, operator);
    console.log(`First Number: ${num1} \n`)
    console.log(`First Number: ${num1} \n`)
    console.log(`Result ${calculate(num1,num2,operator)}`)
} catch (error) {
    console.error("Error:", error.message);
}