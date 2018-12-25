


var tShirtItemObj = {
  origin: 'https://prodmerchnextimagestore.blob.core.windows.net/imageproductxl/2e4fa57804e74bee8e0b8c8962097593.jpeg', 
  thumb: 'https://prodmerchnextimagestore.blob.core.windows.net/imageproductxl/2e4fa57804e74bee8e0b8c8962097593.jpeg',
  price: 20,
  quantity: 0,
  name: 'T-Shirt'
};
var shoesItemObj = {
  origin: 'http://assets.myntassets.com/assets/images/3002307/2018/7/26/4a1fd6ff-681d-4fdb-89af-79e2f0ec20031532588970275-Mast--Harbour-Men-Casual-Shoes-3141532588970060-1.jpg',
  thumb: 'http://assets.myntassets.com/assets/images/3002307/2018/7/26/4a1fd6ff-681d-4fdb-89af-79e2f0ec20031532588970275-Mast--Harbour-Men-Casual-Shoes-3141532588970060-1.jpg',
  price: 212,
  quantity: 0,
  name: 'Shoes'
};
var jacketItemObj = {
  origin: 'https://www.kant.ru/upload/iblock/d6b/d6bf823539e84aee0df8256e63278a2e.jpg',
  thumb: 'https://www.kant.ru/upload/iblock/d6b/d6bf823539e84aee0df8256e63278a2e.jpg',
  price: 346,
  quantity: 0,
  name: 'Jacket'
};
var jeansItemObj = {
  origin: 'https://www.butik.ru/media/catalog/products/images/948x1338/8347c9e82c2557d9f64505fdc7b46e87/8347c9e82c2557d9f64505fdc7b46e87_0.jpg',
  thumb: 'https://www.butik.ru/media/catalog/products/images/948x1338/8347c9e82c2557d9f64505fdc7b46e87/8347c9e82c2557d9f64505fdc7b46e87_0.jpg',
  price: 168,
  quantity: 0,
  name: 'Jeans'
};

var catalogItems = [
  tShirtItemObj,
  shoesItemObj,
  jacketItemObj,
  jeansItemObj
];




var cartItems = [];


for (var i = 0; i < catalogItems.length; i++) {
  var $catalog = document.getElementById('catalog');
  var $catalogItem = document.createElement('div');
  var $catalogImageThumb = document.createElement('img');
  var $catalogItemPrice = document.createElement('div');
  var $catalogItemButtons = document.createElement('div');
  var $catalogItemButtonAdd = document.createElement('button');
  $catalogItemButtonAdd.setAttribute('data-counter', i);
  var $catalogItemButtonDelete = document.createElement('button');
  $catalogItemPrice.innerHTML = catalogItems[i].price + '$';
  test = catalogItems[i].price;
  $catalogItem.classList.add('catalogItems');
  $catalogImageThumb.classList.add('imageThumb');
  $catalogItemButtons.classList.add('catalogItemButtons');
  $catalogItemButtonAdd.classList.add('catalogItemButtonAdd');
  $catalogItemButtonAdd.addEventListener('click', handleButtonAdd);
  $catalogItemButtonDelete.classList.add('catalogItemButtonDelete');
  $catalogItemButtonDelete.addEventListener('click', handleButtonDelete);
  $catalogItemButtonAdd.innerHTML = 'Добавить<br>В&nbspкорзину';
  $catalogItemButtonDelete.innerHTML = 'Удалить';
  $catalogImageThumb.src = catalogItems[i].thumb;
  $catalogItemButtons.appendChild($catalogItemButtonAdd);
  $catalogItemButtons.appendChild($catalogItemButtonDelete);
  $catalogItem.appendChild($catalogImageThumb);
  $catalogItem.appendChild($catalogItemPrice);
  $catalogItem.appendChild($catalogItemButtons);
  $catalog.appendChild($catalogItem);

  
}
$cart = document.getElementById('cart');
$cart.classList.add('cart');




function handleButtonAdd(event) {
  var k = this.dataset.counter;
  var $cartItems = document.createElement('div');
  var $cartThumb = document.createElement('img');
  $cartThumb.classList.add('cartThumb');
  cartItems.push(catalogItems[k].name, catalogItems[k].price + '$');
  $cartItems.innerHTML = cartItems;
  $cartThumb.src = catalogItems[k].thumb;
  $cart.appendChild($cartThumb);
  $cart.appendChild($cartItems);
  
  
}

function handleButtonDelete(event) {
  var k = this.dataset.counter;
  var $cartItems = document.createElement('div');
  cartItems.pop();
  cartItems.pop();
  $cartItems.innerHTML = cartItems;
  $cart.appendChild($cartItems);
}














