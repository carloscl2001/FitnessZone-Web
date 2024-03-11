document.addEventListener('DOMContentLoaded', function() {
    // Obtener la referencia del elemento de la imagen del logo
    let logoImg = document.getElementsByClassName("logoNav")[0];
    
    // Event listener para el mouseover
    logoImg.addEventListener("mouseover", function() {
        logoImg.setAttribute("src", "./imagenes/logo_naranja.jpg");
    });
    
    // Event listener para el mouseout
    logoImg.addEventListener("mouseout", function() {
        logoImg.setAttribute("src", "./imagenes/logo_crudo.jpg");
    });


    let logoImg2 = document.getElementsByClassName("logoFooter")[0];
    
    // Event listener para el mouseover
    logoImg2.addEventListener("mouseover", function() {
        logoImg2.setAttribute("src", "./imagenes/logo_naranja.jpg");
    });
    
    // Event listener para el mouseout
    logoImg2.addEventListener("mouseout", function() {
        logoImg2.setAttribute("src", "./imagenes/logo_crudo.jpg");
    });

});