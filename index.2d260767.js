new Swiper(".heroSwiper",{navigation:{nextEl:".arrow-next",prevEl:".arrow-prev"}}),new Swiper(".mySwiper",{slidesPerView:1.2,centeredSlides:!0,spaceBetween:0,grabCursor:!0,breakpoints:{768:{slidesPerView:1.5},992:{slidesPerView:"auto"}}}),new Swiper(".partnersSwiper",{grid:{rows:2},loop:!0,grabCursor:!0,breakpoints:{576:{slidesPerView:1.9},768:{slidesPerView:2.6},1400:{slidesPerView:4}}});const e=document.querySelector(".menu-btn"),i=document.querySelector(".close-btn"),r=document.querySelector(".mobile-menu"),s=document.querySelectorAll(".mobile-link");e.addEventListener("click",(function(){r.classList.add("is-active")})),i.addEventListener("click",(function(){r.classList.remove("is-active")})),s.forEach((function(e){e.addEventListener("click",(function(){r.classList.remove("is-active")}))}));
//# sourceMappingURL=index.2d260767.js.map
