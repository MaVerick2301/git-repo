


var tShirtItemObj = {
  origin: 'https://prodmerchnextimagestore.blob.core.windows.net/imageproductxl/2e4fa57804e74bee8e0b8c8962097593.jpeg', 
  thumb: 'https://prodmerchnextimagestore.blob.core.windows.net/imageproductxl/2e4fa57804e74bee8e0b8c8962097593.jpeg',
  price: 20,
  quantity: 0
};
var shoesItemObj = {
  origin: 'http://assets.myntassets.com/assets/images/3002307/2018/7/26/4a1fd6ff-681d-4fdb-89af-79e2f0ec20031532588970275-Mast--Harbour-Men-Casual-Shoes-3141532588970060-1.jpg',
  thumb: 'http://assets.myntassets.com/assets/images/3002307/2018/7/26/4a1fd6ff-681d-4fdb-89af-79e2f0ec20031532588970275-Mast--Harbour-Men-Casual-Shoes-3141532588970060-1.jpg',
  price: 212,
  quantity: 0
};
var jacketItemObj = {
  origin: 'https://www.kant.ru/upload/iblock/d6b/d6bf823539e84aee0df8256e63278a2e.jpg',
  thumb: 'https://www.kant.ru/upload/iblock/d6b/d6bf823539e84aee0df8256e63278a2e.jpg',
  price: 346,
  quantity: 0
};
var jeansItemObj = {
  origin: 'https://www.butik.ru/media/catalog/products/images/948x1338/8347c9e82c2557d9f64505fdc7b46e87/8347c9e82c2557d9f64505fdc7b46e87_0.jpg',
  thumb: 'https://www.butik.ru/media/catalog/products/images/948x1338/8347c9e82c2557d9f64505fdc7b46e87/8347c9e82c2557d9f64505fdc7b46e87_0.jpg',
  price: 168,
  quantity: 0
};

var catalogItems = [
  tShirtItemObj,
  shoesItemObj,
  jacketItemObj,
  jeansItemObj
];
var $test = [];

for (var i = 0; i < catalogItems.length; i++) {
  var $catalog = document.getElementById('catalog');
  var $catalogItem = document.createElement('div');
  var $catalogImageThumb = document.createElement('img');
  var $catalogItemPrice = document.createElement('div');
  var $catalogItemButtons = document.createElement('div');
  var $catalogItemButtonAdd = document.createElement('button');
  var $catalogItemButtonDelete = document.createElement('button');
  $catalogItemPrice.innerHTML = catalogItems[i].price + '$';
  console.log(catalogItems[i].price);
  $catalogItem.classList.add('catalogItems');
  $catalogImageThumb.classList.add('imageThumb');
  $catalogItemButtons.classList.add('catalogItemButtons');
  $catalogItemButtonAdd.classList.add('catalogItemButtonAdd');
  $catalogItemButtonDelete.classList.add('catalogItemButtonDelete');
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










