body=document.querySelector("body"),header=document.querySelector("header"),document.querySelector(".nav-toggle").onclick=function(){body.classList.toggle("nav-open"),togglescroll()},document.querySelector(".nav").onclick=function(){body.classList.toggle("nav-open"),togglescroll()},document.querySelector(".nav-background").onclick=function(){body.classList.toggle("nav-open"),togglescroll()};var swiper=new Swiper(".swiper-container",{spaceBetween:1,slidesPerView:1,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});let loginbutton=document.getElementById("login"),logintosign=document.getElementById("login-to-signin"),signtologin=document.getElementById("sign-to-login"),signupbutton=document.getElementById("signup");function loginpopup(){body.classList.toggle("popup-login-open"),togglescroll()}function signuppopup(){body.classList.toggle("popup-signup-open"),togglescroll()}function togglescroll(){let e=window.innerWidth-body.clientWidth+"px";body.style.paddingRight=e,body.classList.toggle("noscroll"),header.style.right=e}function include(e){var n=document.createElement("script");n.src=e,document.getElementsByTagName("head")[0].appendChild(n)}function get_name_browser(){var e=navigator.userAgent;return e.search(/rv:11.0/)>0||e.search(/MSIE/)>0?"Internet Explorer":"Не определен"}loginbutton.addEventListener("click",(function(){loginpopup()})),signupbutton.addEventListener("click",(function(){signuppopup()})),logintosign.addEventListener("click",(function(){loginpopup(),signuppopup()})),signtologin.addEventListener("click",(function(){signuppopup(),loginpopup()}));var browser=get_name_browser();"Internet Explorer"!==browser?include("js/counter.js"):console.log("i love Internet Explorer");