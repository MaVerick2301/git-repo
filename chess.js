


var benchTable;



benchTable = document.getElementById('bench-table');
while (benchTable.firstChild) {
  benchTable.removeChild(benchTable.firstChild);
}


var tbody = document.createElement('TBODY');

for (var i = 0; i < 9; i++) {
  var tr = document.createElement('TR');
  tbody.appendChild(tr);
  for (var j = 0; j < 9; j++) {
    var td = document.createElement('td');
    tr.appendChild(td);
    td.appendChild(document.createTextNode('' + i.toString(9) + j.toString(9)));
  }
}

benchTable.appendChild(tbody);




var $divTest = document.getElementsByClassName('testJsDiv');
var $divTest2 = document.createElement('div');
$divTest2.classList.add('testJsDiv2');



while (i < 81) {
$divTest[0].appendChild($divTest2);
i++;
}