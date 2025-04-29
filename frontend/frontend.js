let header = document.querySelector('header');
let filterOption = document.querySelectorAll('input[name="category"]');
console.log(filterOption,typeof filterOption);

//navbar bg active
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
openfilter.addEventListener('click',()=>{
    toggleFilter();
   
});

let checkboxes = document.querySelectorAll("input[type='checkbox']");
let filterOptions = document.querySelector('.slection');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change",()=>{

    let newOption =  document.createElement('div');
    newOption.classList.add('selected');
    newOption.innerText = checkbox.value  + " ";
    newOption.style.visibility = "visible"

    let removeBtn = document.createElement("span");
    removeBtn.innerText = "X";
    removeBtn.style.fontWeight = "800";
    removeBtn.style.cursor = "pointer";

    removeBtn.addEventListener("click", () => {
        newOption.remove();
        checkbox.checked = false; // Uncheck the checkbox if needed
    });  

    newOption.appendChild(removeBtn);

    if (filterOptions) {
        filterOptions.appendChild(newOption);
    }
    })
});

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
function createProduct(product,productdata){
    const {name, price,description,category,image} = product;
    let newProduct = document.createElement('div');
    newProduct.classList.add('card');
    
    let productimg =  document.createElement('img');
    productimg.classList.add("product-img");
    function normalizeImagePath(path) {
        return path.split(/[\\/]/).pop();
      }  //clearing backend path image
      productimg.src = `/images/${normalizeImagePath(image)}`;
    console.log('Image SRC:', productimg.src);
    // console.log(productimg.src);
    newProduct.appendChild(productimg);
    
    let infoWrapper = document.createElement('div');
    infoWrapper.classList.add('product-info'); 
    
    let productName = document.createElement('h3');
    productName.style.wordbreak = "break-word";
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

    buybtn.addEventListener('click', ()=>{

        console.log('button is clicked');
        console.log(product.category);

        const selectedProduct = {
            name : product.name,
            price : product.price,
            description : product.description,
            category : product.category
        }
        const formatedData = Object.assign({},selectedProduct)
        localStorage.setItem("product" , JSON.stringify(formatedData));
        window.location.href = "product.html";
    })
    
    allProducts.appendChild(newProduct);
}  
//Fetching products from backend
async function fetchdata (){
     let response =  await fetch("http://localhost:3000/products")
      let data = await response.json();
      console.log(typeof data, data[0]);
      data.forEach((item, index)=>{
                   productdata(item);
                   createProduct(item);
      });
    }  

filterOption.forEach(option => {
  option.addEventListener("click", ()=>{
      let category = event.target.value;
      console.log(category)
      try {
           fetch("http://localhost:3000/filter",{
            method : "GET",
            headers:{
                "Content-Type": "application/json",
                "Product-Category" : `${category}`,
            }
           })
          .then(response => response.json())
          .then( data => {
            allProducts.innerHTML = "";
            data.forEach((item, index)=>{
            productdata(item);
            createProduct(item);
              });
          })
      } catch (error) {
        console.log("some error in fetching data")
      }
    })
});
fetchdata();




