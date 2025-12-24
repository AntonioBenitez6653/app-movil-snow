document.addEventListener("DOMContentLoaded", function () {

    const navIcon = document.getElementById("nav-icon");
    const menuMobile = document.querySelector(".menu_mobile");
    const menuLinks = document.querySelectorAll(".menu_mobile_nav li a");

    navIcon.addEventListener("click", function () {
        this.classList.toggle("open");
        menuMobile.classList.toggle("grow");
        
        document.body.classList.toggle("menu-open");
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            navIcon.classList.remove("open");
            menuMobile.classList.remove("grow");
            
            document.body.classList.remove("menu-open");
        });
    });

});