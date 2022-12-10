var icon = document.querySelector(".icon");
var list = document.querySelector(".list")

if (icon) {

    icon.addEventListener("click" , ()=>{
        list.classList.toggle('active');
       
    })
    
}