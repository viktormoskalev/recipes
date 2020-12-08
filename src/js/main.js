body = document.querySelector("body");
header = document.querySelector("header");

//navigation


document.querySelector(".nav-toggle").onclick = function () {
  body.classList.toggle("nav-open");
  togglescroll()
}

document.querySelector(".nav").onclick = function () {
  body.classList.toggle("nav-open");
  togglescroll()
}

document.querySelector(".nav-background").onclick = function () {
  body.classList.toggle("nav-open");
  togglescroll()
}
//navigation


//swiper
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 1,
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
//swiper


//popup
let loginbutton = document.getElementById("login");
let logintosign = document.getElementById("login-to-signin");
let signtologin = document.getElementById("sign-to-login");
let signupbutton = document.getElementById("signup");
loginbutton.addEventListener("click", function () {
  loginpopup()
})
signupbutton.addEventListener("click", function () {
  signuppopup()
})
logintosign.addEventListener("click", function () {
  loginpopup()
  signuppopup()
})
signtologin.addEventListener("click", function () {
 
  signuppopup()
  loginpopup()
})



function loginpopup() {
  body.classList.toggle("popup-login-open");
  togglescroll()
}

function signuppopup() {
  body.classList.toggle("popup-signup-open");
  togglescroll();
}
//popup



//убрать прокрутку

function togglescroll() {
  let scrollw = window.innerWidth - body.clientWidth + "px";
  body.style.paddingRight=scrollw;
  body.classList.toggle("noscroll");
  header.style.right=scrollw;
}

//убрать прокрутку




//подключить counter для всех кроме интернет эксплорера

function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}



function get_name_browser() {
  var ua = navigator.userAgent;
  if (ua.search(/rv:11.0/) > 0) return 'Internet Explorer';
  if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
  return 'Не определен';
}
var browser = get_name_browser();
if (browser !== 'Internet Explorer') {
  include("js/counter.js");
} else {
  console.log("i love Internet Explorer");
}