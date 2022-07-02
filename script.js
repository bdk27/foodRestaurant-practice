
/* header section */

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

/* search form  */

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('#search-form');
let closeBtn = document.querySelector('#close');

searchIcon.onclick = () =>{
    searchForm.classList.toggle('active');
}

closeBtn.onclick = () =>{
    searchForm.classList.remove('active');
}

let swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
});







