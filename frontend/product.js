let info = JSON.parse(localStorage.getItem("product"));
console.log(info)

let productName = document.querySelector('h1');
let productDescription = document.querySelector('h3');
// let productName = document.querySelector('h1');
let productPrice = document.querySelector('h2');
// let productName = document.querySelector('h1');
productName.innerText = info.name;
productDescription.innerText = info.description;
productPrice.innerText = `${info.price} PKR`;



