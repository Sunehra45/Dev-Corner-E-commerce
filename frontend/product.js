let info = JSON.parse(localStorage.getItem("product"));
console.log(info)

let productName = document.querySelector('h1');
let productDescription = document.querySelector('p');
let productPrice = document.querySelector('h2');
let productcategory = document.querySelector('h4');
let productImage = document.querySelector('img');

productName.innerText = info.name;
productDescription.innerText = info.description;
productPrice.innerText = `${info.price} PKR`;
productImage.src = info.image.replace('/uploads/', '/images/');
productcategory.innerText = info.category;
