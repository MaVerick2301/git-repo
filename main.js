var a = 4;
var b = -5;
if (a > 0 && b > 0) {
console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else {
    console.log(a + b);
}




a = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
while (a <= 15) {
    console.log(a);
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
        result = 'Unexpected operation';
        return result;
    }
}

var arg1 = +prompt('Укажите x');
var arg2 = +prompt('Укажите y');
var operation = prompt('Какое действие выполнить? ( +, -, *, / )');

console.log(mathOperation(arg1, arg2, operation));

console.log(null == 0);

function power(num, pow) {
    if (pow === 1) {
        return num;
    } else {
        return num * power(num, pow - 1);
    }
}


function geomProgression (firstNum, ratio, num) {
    if (ratio === 0) {
        return firstNum;
    } else {
        var result;
        return result = firstNum * power(ratio, num - 1);
    }
}

var firstNum = +prompt('Укажите первый член последовательности');
var ratio = +prompt('Укажите знаменатель прогрессии');
var num = +prompt('Укажите порядковый номер члена прогрессии, который нужно высчитать');

console.log(geomProgression (firstNum, ratio, num));


