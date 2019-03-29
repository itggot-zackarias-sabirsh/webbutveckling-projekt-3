function menuIndex(event){
    let bg = document.querySelector(".bg") 
    bg.classList.toggle("activate-aside")   
}

function menuShop(event){
    let aside = document.querySelector("aside")
    aside.classList.toggle("activate-aside")
}

function shirtInfo(event){
    let shirt = document.querySelector(".shirt-info")
    shirt.classList.toggle("activate-shirt-info")
}
