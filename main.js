const menuButton = document.getElementById("menu-button")
const mobileDropDown= document.getAnimations("mobile-nav-dropdown")

menuButton.addEventListener("click",()=>{
    mobileDropDown.classList.toggle("hidden")
}  )