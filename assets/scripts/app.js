const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2;
    alert('The result is ' + result);
}

add(1,2);
add(5,6);

currentResult = (currentResult + 10) * 3 / 2 - 1;
let calculationDesscription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDesscription);