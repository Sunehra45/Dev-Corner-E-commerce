let header = document.querySelector('header');
let BuyBtn = document.querySelectorAll('.buy');
console.log(BuyBtn);

BuyBtn.forEach(btn => {
    btn.addEventListener("click",()=>{
        console.log("yup clicked this time ")
    })
});

//navbar bg active
window.addEventListener('scroll',function(){
if(this.window.scrollY > window.innerHeight){
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


let removeFilter = document.querySelectorAll('#cross');
// removeFilter.addEventListener('click',()=>{

// })