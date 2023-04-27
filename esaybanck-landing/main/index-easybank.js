
let menumark = document.querySelector(".index-easybank .easybank-page > .header-easybank > img:last-of-type")

,arrlistmenu = [document.querySelector(".index-easybank > div:first-of-type"),document.querySelector(".index-easybank > .aside-menu")]


,closemenu = document.querySelector(".index-easybank > .aside-menu > span > img")

// apeaar the elements of aside menu
menumark.onclick = () =>{
    arrlistmenu.forEach((m) =>m.classList.add("active"))
    
    menumark.classList.add("active")
}

// close the elements of aside menu
closemenu.onclick = () =>{
    arrlistmenu.forEach((m) =>m.classList.remove("active"))

    menumark.classList.remove("active")
}