function menuIndex(event){
    let menu = document.querySelector(".menu-box")
    menu.classList.toggle("activate-index")

    let text = document.querySelector(".slogan")
    text.classList.toggle("activate-slogan")

}

function menuShop(event){
    let menu = document.querySelector(".menu-box-shop")
    menu.classList.toggle("activate")
    
    let aside = document.querySelector("aside")
    aside.classList.toggle("activate-aside")
}

function shirtInfo(event){
    let shirt = document.querySelector(".shirt-info")
    shirt.classList.toggle("activate-shirt-info")
}
