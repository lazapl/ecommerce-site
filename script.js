const bar = document.querySelector("#bar");
const navbar = document.querySelector("#navbar");
const closebar = document.querySelector("#close");

if(bar){
    bar.addEventListener('click',function(){
        navbar.classList.add("active")
    })
}

if(closebar){
    closebar.addEventListener('click',function(){
        navbar.classList.remove("active")
    })
}