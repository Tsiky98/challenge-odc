const list_nav = document.querySelector ("nav .list-nav")
const btn_Hamburger = document.querySelector ("nav .btn-hamburger")
const nav = document.querySelector ("header .bloc-nav")

btn_Hamburger.addEventListener ("click",function (e) {

    list_nav.classList.toggle("active")

    this.querySelector("img").style.width = "100%";
    this.querySelector("img").style.height = "100%";

    if (this.querySelector('img').src.includes('menu')) {
        this.querySelector('img').src = "../images/croix.svg"
        
    } else {
        this.querySelector('img').src = "../images/menu.svg"
    }
    
    
})