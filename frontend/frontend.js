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

// filter section:
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

// let removeFilter = document.querySelectorAll('#cross');
// products data show --fetch from backend


let name;
let category;
let description; 
let price ; 
async function fetchdata (){
     let response =  await fetch("http://localhost:3000/products")
      let data = await response.json();
      console.log(typeof data, data[0]);
      data.forEach((item, index)=>{
       price= item.price;
       description = item.description;
       name = item.name;
       category = item.category;
       createProduct();
      });
    }
    fetchdata();
    let allProducts = document.querySelector('.products');
    function createProduct(){
        let newProduct = document.createElement('div');
        newProduct.classList.add('card');

        let productimg =  document.createElement('img');
        productimg.classList.add("product-img");
        productimg.src = "images/keyboard 1.png"
        newProduct.appendChild(productimg);
    
        let productName = document.createElement('h3');
        productName.classList.add('product-info');
        productName.innerText = name;
        newProduct.appendChild(productName);
    
        let productPrice = document.createElement('h4');
        productPrice.classList.add('product-info');
        productPrice.innerText = price;
        newProduct.appendChild(productPrice);
    
        let productDescription = document.createElement('p');
        productDescription.classList.add('card');
        productDescription.innerText = description;
        newProduct.appendChild(productDescription);
    

        let buybtn = document.createElement('button');
        buybtn.innerText = "Buy Now";
        buybtn.classList.add('buy');
        newProduct.appendChild(buybtn);
        buybtn.addEventListener('click', ()=>{
            console.log('button is clicked')
        })
       
        allProducts.appendChild(newProduct);
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
          .then(data => {
            console.log("Fetched data:", data);
          })
      } catch (error) {
        console.log("some error in fetching data")
      }
    })
});



