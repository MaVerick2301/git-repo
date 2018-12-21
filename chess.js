

function generateChessTable () {



var $chessBody = document.createElement('div');
var $chessHeader = document.createElement('div');
var $chessContainer = document.createElement('div');
var $chessMarkersLeft = document.createElement('div');
var $chessTable = document.createElement('div');

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


}


