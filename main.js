//          Задание №1 "Сотни, Десятки, Единицы"

  
function getObject(myInputNumber) {

if (myInputNumber <= 999) {
    var myInputString = myInputNumber.toString();
    var myOutputObj;
    if (myInputString.length === 3) {
    myOutputObj = {
     units: myInputString[2],
     tens: myInputString[1],
     hundreds: myInputString[0],
    };
    } else if (myInputString.length === 2) {
        myOutputObj = {
            tens: myInputString[0],
            units: myInputString[1],
        };
    } else {
        myOutputObj = {
            units: myInputString[0]
        };
    }
    console.log(myOutputObj);
} else {
    console.log('Error: Input  > 999 OR Input is NaN');
}
} //Проверить работоспособность кода можно введя в консоли getObject(*любое число, строку*)


//          Задание №2


var tShirtItemObj = {price: 20.37, quantity: 3};
var shoesItemObj = {price: 62.43, quantity: 1};
var jacketItemObj = {price: 146.95, quantity: 1};
var jeansItemObj = {price: 42.80, quantity: 2};
var totalPrice = 0;
var myCartObj = {
    tShirtItemObj,
    jacketItemObj,
    shoesItemObj,
    jeansItemObj
};

for (var i in myCartObj) {
    totalPrice = totalPrice + myCartObj[i].price * myCartObj[i].quantity;
}
console.log('Общая стоимость покупок: ' + totalPrice.toFixed() + '$');



//          Задание №3 "Сущность продукта"


var ItemObject = {
    quantity: 3,
    price: 60.43,
    size: 'XXL',
    category: 'T-Shirts',
    style: 'Bohemian',
    designer: 'Mango INC.',
    brand: 'Mango',
    collection: fallWinter,
    discount: true
};