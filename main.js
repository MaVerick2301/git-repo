var a = 4;
var b = -5;
if (a > 0 && b > 0) {
alert(a - b);
} else if (a < 0 && b < 0) {
    alert(a * b);
} else {
    alert(a + b);
}




a = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
while (a <= 15) {
    alert(a);
    ++a;
}

function addition (x, y) {
    return x + y;
}

function substraction (x, y) {
    return x - y;
} 

function multiplication (x, y) {
    return x * y;
}

function division (x, y) {
    return x / y;
}

function mathOperation (arg1, arg2, operation) {
    
    var result;
    switch (operation) {
    case '+':
        result = addition (arg1, arg2);
        return result;
    case '-':
        result = substraction (arg1, arg2);
        return result;
    case '*':
        result = multiplication (arg1, arg2);
        return result;
    case '/':
        result = division (arg1, arg2);
        return result;
    default:
        result = 'Unexpected operation'
        return result;
    }
}

var arg1 = +prompt('x');
var arg2 = +prompt('y');
var operation = prompt('Действие? ( +, -, *, / )');

alert(mathOperation(arg1, arg2, operation));

alert(null == 0)
