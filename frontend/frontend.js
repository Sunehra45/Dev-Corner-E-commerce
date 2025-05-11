let header = document.querySelector('header');
let filterOption = document.querySelectorAll('input[name="category"]');

window.addEventListener('scroll',function(){
if(window.innerHeight + window.scrollY > window.outerHeight - 10){
    header.classList.add("scrolled");
}
else {
    header.classList.remove("scrolled");
}
})

//Hero section image animation
const image = document.querySelector('.animated-img');
let imageSrc = ['images/keyboard 2.png', 'images/img 4.png'];
let currentIndex = 0;
  setInterval(() => {
    currentIndex = (currentIndex + 1) % imageSrc.length;
    image.src = imageSrc[currentIndex];
    image.classList.remove('animated-img');
    void image.offsetWidth; // this forces reflow (refreshes animation)
    image.classList.add('animated-img');
  }, 4000); 

//Fetching products from backend 
async function fetchdata (){
    let response =  await fetch("http://localhost:3000/products")
     let data = await response.json();
     data.forEach((item, index)=>{
                  productdata(item);
                  createProduct(item);
     });
   } 
   function productdata(item){
    return Object.assign({},{
        name  :item.name,
        price : item.price,  
        description : item.description,
        category : item.category,
        image : item.image,
     })
}

let allProducts = document.querySelector('.products');  

function createProduct(product) {
    const { name, price, description, category, image } = product;

    let newProduct = document.createElement('div');
    newProduct.classList.add('card');

    let productimg = document.createElement('img');
    productimg.classList.add("product-img");

    // Remove '/uploads/' from the image path if it exists
    const cleanedImagePath = image.replace('/uploads/', '');
    const imagePath = `/images/${cleanedImagePath}`;

    // Check if the image exists
    fetch(imagePath, { method: 'HEAD' })
        .then((response) => {
            if (response.ok) {
                productimg.src = imagePath; 
            } else {
                productimg.src = 'images/uploadslaptop-hp-spectre.jpg'; 
            }
        })
        .catch(() => {
            productimg.src = '/images/placeholder.jpg'; // Use a fallback image in case of an error
        });


    newProduct.appendChild(productimg);

    let infoWrapper = document.createElement('div');
    infoWrapper.classList.add('product-info');

    let productName = document.createElement('h3');
    productName.style.wordBreak = "break-word";
    productName.innerText = name;

    let productPrice = document.createElement('h2');
    productPrice.innerText = price;

    infoWrapper.appendChild(productName);
    infoWrapper.appendChild(productPrice);
    newProduct.appendChild(infoWrapper);

    let buysection = document.createElement('div');
    buysection.classList.add('buy');

    let buybtn = document.createElement('button');
    buybtn.innerText = "Buy Now";
    buybtn.classList.add('buy-btn');
    buysection.appendChild(buybtn);

    // Generate random rating
    let rating = Math.floor(Math.random() * 5) + 1;
    let stars = document.createElement('div');
    stars.classList.add('stars');

    for (let i = 1; i <= 5; i++) {
        let star = document.createElement('span');
        star.innerHTML = i <= rating ? '★' : '☆';
        star.style.color = '#ffbf00';
        star.style.fontSize = '20px';
        stars.appendChild(star);
    }

    buysection.appendChild(stars);
    newProduct.appendChild(buysection);

    buybtn.addEventListener('click', () => {
        console.log('button is clicked');
        console.log(product.category);

        const selectedProduct = {
            name: product.name,
            price: product.price,
            description: product.description,
            category: product.category,
            image : product.image,
        };
        const formatedData = Object.assign({}, selectedProduct);
        localStorage.setItem("product", JSON.stringify(formatedData));
        window.location.href = "product.html";
    });

    allProducts.appendChild(newProduct);
}  
fetchdata();

//Filter Section
let openfilter = document.querySelector('.open-filter'); 
let closefilter = document.querySelector('.close-btn');

function toggleFilter() {
 document.getElementById("filterBox").classList.toggle("hidden");
 if(toggleFilter){
    if (openfilter.innerText === "Show Filter") {
        openfilter.innerText = "Hide Filter";
    } else {
        openfilter.innerText = "Show Filter";
    }
}
}
closefilter.addEventListener('click',toggleFilter);
openfilter.addEventListener('click',toggleFilter);

let checkboxes = document.querySelectorAll("input[type='checkbox']");
let filterOptions = document.querySelector('.slection');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change",()=>{

        let newOption = document.createElement('div');
        let removeBtn = document.createElement("span");

        newOption.textContent = checkbox.value;
        removeBtn.innerHTML = "X";
        
        newOption.classList.add('selected');
        newOption.appendChild(removeBtn);
        
        newOption.style.display = "none";
        if(checkbox.checked === true){
            newOption.style.display = "flex";
            newOption.style.visibility = "visible";
            // filter();
            allProducts.innerHTML = filter();
        }

        removeBtn.addEventListener("click", () => {
        newOption.remove();
        allProducts.innerHTML = "";
        fetchdata();
        checkbox.checked = false; // Uncheck the checkbox if needed
    });  

    if (filterOptions) {
        filterOptions.appendChild(newOption);
    }
    })
});

function  filter (){
    let selectedCategories = [];
    filterOption.forEach(option => {
     if(option.checked === true){
      selectedCategories.push(option.value);
     }});
     console.log(selectedCategories);
        try {
            fetch("http://localhost:3000/filter",{
               method : "GET",
               headers:{
                   "Content-Type": "application/json",
                   "Product-Category" : JSON.stringify({categories: selectedCategories}),
                } 
               })
             .then(response => response.json())
             .then( data => {
               data.forEach((item, index)=>{
               productdata(item);
               createProduct(item);
             });
             });
             category.classlist.add("feteched");
           }
          catch (error) {
           console.log("some error in fetching data")
          }
     
}
filterOption.forEach(option=>{
    option.addEventListener("click", filter)
})





