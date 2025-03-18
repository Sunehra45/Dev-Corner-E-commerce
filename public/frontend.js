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