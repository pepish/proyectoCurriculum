
const navMenu = document.querySelector(".nav-menu");
document.getElementById("hamb-menu").onclick = function(){
    navMenu.classList.toggle("nav-menu_visible");

    const navHamb = document.querySelector(".boton-hamb");
    if (navMenu.classList.contains("nav-menu_visible")){
        navHamb.setAttribute("aria-label", "Cerrar menú");
    } else{
        navHamb.setAttribute("aria-label", "Abrir menú");
    }
};