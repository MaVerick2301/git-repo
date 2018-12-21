

function generateChessTable () {



    var $chessBody = document.createElement('div');
    var $chessHeader = document.createElement('div');
    var $chessContainer = document.createElement('div');
    var $chessMarkersLeft = document.createElement('div');
    var $chessTable = document.createElement('div');
    var letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];


    $chessBody.classList.add('chessBody');
    $chessHeader.classList.add('chessHeader');
    $chessContainer.classList.add('chessContainer');
    $chessMarkersLeft.classList.add('chessMarkersLeft');
    $chessTable.classList.add('chessTable');


    document.body.appendChild($chessBody);
    $chessBody.appendChild($chessHeader);
    $chessBody.appendChild($chessContainer);
    $chessContainer.appendChild($chessMarkersLeft);
    $chessContainer.appendChild($chessTable);







    for (i = 0; i < 8; i++) {  
        var $chessTableString = document.createElement('div');
        
        if (i % 2 !== 0) {
        $chessTableString.classList.add('chessTableEvenString');
        $chessTable.appendChild($chessTableString);
        for (j = 0; j < 8; j++) {
            var $chessTableSquare = document.createElement('div');
            
            if (j % 2 == 0) {
            $chessTableSquare.classList.add('chessTableSquareWhite');
            $chessTableString.appendChild($chessTableSquare);
            } else {
            $chessTableSquare.classList.add('chessTableSquareBlack');
            $chessTableString.appendChild($chessTableSquare); 
            }
        } 
            
        } else {
        $chessTableString.classList.add('chessTableOddString');
        $chessTable.appendChild($chessTableString);
        for (j = 0; j < 8; j++) {
            $chessTableSquare = document.createElement('div');
            
            if (j % 2 == 0) {
            $chessTableSquare.classList.add('chessTableSquareWhite');
            $chessTableString.appendChild($chessTableSquare);
            } else {
            $chessTableSquare.classList.add('chessTableSquareBlack');
            $chessTableString.appendChild($chessTableSquare);
            }
        }
        }
    }

    for (i = 0; i < 8; i++) {
        var $headerSquare = document.createElement('div');
        $headerSquare.classList.add('headerSquare');
        $chessHeader.appendChild($headerSquare);
        $headerSquare.innerHTML = letterArray[i];
        var $markersSquare = document.createElement('div');
        $markersSquare.classList.add('markersSquare');
        $chessMarkersLeft.appendChild($markersSquare);
        $markersSquare.innerHTML = i;
    }
    








}

function generateShoppingCart() {

    var tShirtItemObj = {price: 20.37, quantity: 3};
    var shoesItemObj = {price: 62.43, quantity: 1};
    var jacketItemObj = {price: 146.95, quantity: 1};
    var jeansItemObj = {price: 42.80, quantity: 2};
    var totalPrice = 0;
    var totalQuantity = 0;
    var myCartArr = [
        tShirtItemObj,
        jacketItemObj,
        shoesItemObj,
        jeansItemObj
    ];

    for (var i in myCartArr) {
        totalPrice = totalPrice + myCartArr[i].price * myCartArr[i].quantity;
        totalQuantity = totalQuantity + myCartArr[i].quantity;

    }


    $shoppingCart = document.getElementById('shoppingCart');
    $shoppingCart.innerHTML = 'Товаров в корзине: ' + totalQuantity + ',' + ' Общая стоимость покупок: ' + totalPrice.toFixed() + '$';

}
