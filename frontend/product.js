let info = JSON.parse(localStorage.getItem("product"));

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


let imageZoom = document.querySelector('.leftcontent');
imageZoom.addEventListener('mousemove', (e) => {

    imageZoom.style.setProperty('--display', 'block');
    imageZoom.style.setProperty('--imageurl', `url("${productImage.src}")`);

    let pointer = {
       x: (e.offsetX * 100) / imageZoom.offsetWidth,
       y: (e.offsetY * 100) / imageZoom.offsetHeight
    }

    imageZoom.style.setProperty('--zoom-x', pointer.x + '%');
    imageZoom.style.setProperty('--zoom-y', pointer.y + '%');

    imageZoom.addEventListener('mouseout', () => {
        imageZoom.style.setProperty('--display', 'none');
    })
})
