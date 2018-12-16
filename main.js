
//____________   Задание №2 "Корзина" 


var arrCart = ['T-shirt:20.37', 'Shoes:62.43', 'Jacket:146.95',
    'Jeans:42.80']; //"Входной" необработанный массив
var arrItems = []; //массив для товаров
var arrPrice = []; //массив для цен
var arrPriceWithDollar = []; //массив для вывода, с долларом
var totalPrice = 0; //переменная для суммы покупок

for (var i = 0; i < arrCart.length; i++) {
    var k = (arrCart[i].indexOf(':')); //ловлю позицию разделителя
    arrItems.push(arrCart[i].slice(0, k)); //собираю массив из товаров для показа, весь текст налево от разделителя
    arrPrice.push(arrCart[i].slice(k+1)); //собираю "технический" масив для расчетов, направо от разделителя
    arrPriceWithDollar.push(arrCart[i].slice(k+1) + '$'); //собираю массив из цен для показа, с добавлением доллара
    }
for (var i = 0; i < arrPrice.length; i++) {
    var arrString = arrPrice[i].toString(); //преобразую каждый элемент массива в отдельную строку
    y = Number(arrString); //преобразую строку в число
    totalPrice = totalPrice + y; //считаю общую сумму покупок, обрабатывая поочередно элементы массива
}
totalPrice = totalPrice.toFixed(); //привожу общую сумму к целому
alert('Your cart is: ' + arrItems + ' with this prices: ' + 
arrPriceWithDollar  + ' and the total price is ' + totalPrice + '$' ); //окончательный вывод

   

//____________   Задание №1 "С помощью цикла while вывести все простые числа в промежутке от 0 до 100."



var myPrime='';
for (var i = 2; i <= 100; i++) {
var c = 0;
for (var j = 1; j <= i; j++) {
if (i % j == 0) {
c++;
}
}
if (c == 2) {
myPrime+=' '+i;
}
}
console.log(myPrime);


//____________   Задание №3 "Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла."


for (var i = 1; i < 10; i++)
console.log(i);


//____________   Задание №4 "Нарисовать пирамиду с 20 рядами с помощью console.log"


var i = 1;
var n = 20;
var k = 'x';

while(true) {
    console.log(k);
    k = k + 'x';
    i++;
    if (i > n)
    break;
}






  var myInputNumber;
function getObject(myInputNumber) {
if (myInputNumber <= 999) {
    var myInputString = myInputNumber.toString();
    var myOutputObj = {
     units: myInputString[2],
     tens: myInputString[1],
     hundreds: myInputString[0],
    };
    console.log(myOutputObj);
} else {
    console.log('Error: Input  > 999');
}
}
