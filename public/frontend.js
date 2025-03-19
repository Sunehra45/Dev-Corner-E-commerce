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

//toggle filter section:
let openfilter = document.querySelector('.open-filter'); 
let closefilter = document.querySelector('.close-btn');

function toggleFilter() {
 document.getElementById("filterBox").classList.toggle("hidden");

}
closefilter.addEventListener('click',toggleFilter);
openfilter.addEventListener('click',()=>{
    toggleFilter();
    if(toggleFilter){
        if (openfilter.innerText === "Show Filter") {
            openfilter.innerText = "Hide Filter";
        } else {
            openfilter.innerText = "Show Filter";
        }
    }
});