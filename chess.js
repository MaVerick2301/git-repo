




var $divTest = document.getElementById('testJsDivId');
var $divTest2 = document.createElement('div');
var $divTest3 = document.createElement('div');
$divTest2.classList.add('testJsDiv2');
$divTest3.classList.add('testJsDiv2');


for (var i = 0; i < 8; i= i + 1 ) {
    var $divTest4 = document.createElement('div');
    $divTest.appendChild($divTest4);
    if (i % 2 !== 0) {
        $divTest4.classList.add('testJsDiv2');
    } else {
        $divTest4.classList.add('testJsDiv3');
    }
}

