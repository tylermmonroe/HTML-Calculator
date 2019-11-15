var operand1 = '';
var operand2 = '';
var operator = '';
var result;
var isOperatorEmpty = true;

function typeChar(char) {
    document.getElementById('display').innerText += char;

    if (char == '/' || char == '*' || char == '-' || char == '+') {
        operator = char;
        isOperatorEmpty = false;
    }
    else {
        
        if (isOperatorEmpty) {
            operand1 += char;
        }
        else {
            operand2 += char;
        }
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function clearValues() {
    operand1 = '';
    operand2 = '';
    operator = '';
    isOperatorEmpty = true;
}

function postCalculate(value) {
    clearValues();
    operand1 = value.toString();
}

function calculate() {
    operand1 = parseFloat(operand1);
    operand2 = parseFloat(operand2);

    switch(operator) {
        case '/': {
            result = operand1 / operand2;
            console.log(operand1 + ' / ' + operand2 + ' = ' + result);
            break;
        }
        case '*': {
            result = operand1 * operand2;
            console.log(operand1 + ' * ' + operand2 + ' = ' + result);
            break;
        }
        case '-': {
            result = operand1 - operand2;
            console.log(operand1 + ' - ' + operand2 + ' = ' + result);
            break;
        }
        case '+': {
            result = operand1 + operand2;
            console.log(operand1 + ' + ' + operand2 + ' = ' + result);
            break;
        }
    }
    clearDisplay();
    document.getElementById('display').innerText = result.toString();
    postCalculate(result);
}