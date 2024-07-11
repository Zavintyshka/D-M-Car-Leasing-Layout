const swiper = new Swiper('.swiper', {speed: 1200,
    autoplay: {delay:3000},
    allowTouchMove:false,
    loop: true,
    pagination: {el: '.swiper-pagination'}});

const open_menu_burger_button = document.querySelector(".header_menu__burger_open_button")
const close_menu_burget_button = document.querySelector(".header_menu__burger_close_button")

const burger_menu = document.querySelector(".header_container__burger_menu")


const open_burger_menu = function(){
    burger_menu.style.transform="translateY(0)"
}

const close_burger_menu = function(){
    burger_menu.style.transform="translateY(-100vh)"
}



open_menu_burger_button.addEventListener("click", open_burger_menu)
close_menu_burget_button.addEventListener("click", close_burger_menu)


