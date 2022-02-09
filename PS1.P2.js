
const problem2 = expression => {
    //const operator = input.charAt(1);
    switch (expression.charAt(1)) {
        case '+':
            return (expression) => Number(expression.charAt(0)) + Number(expression.charAt(2));
            break;
        case '-':
            return (expression) => Number(expression.charAt(0)) - Number(expression.charAt(2));
            break;
        case '*':
            return (expression) => Number(expression.charAt(0)) * Number(expression.charAt(2));
            break;
        case '/':
            return (expression) => Number(expression.charAt(0)) / Number(expression.charAt(2));
            break;
        case '^':
            return (expression) => Number(expression.charAt(0)) ** Number(expression.charAt(2));
            break;
        default:
            console.log(`sorry operator ${operator} does not exist`);
    }   
}

const expression = '8+3';
let PROBLEM2 = problem2(expression);
console.log(PROBLEM2(expression)) //this works
