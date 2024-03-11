// ACTIVACION TOOLTIPS

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// ACTIVAR POPOVERS
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

$(function() {
    
    $("#btn-enviar").on("click", function(event){
        alert("El mensaje fue enviado correctamente.");
       
    });

    $(".card-img-top").click(function(){
        $(".card-text").hide("slow");
    });

    $(".card-title").click(function(){
        $(".card-text").show("slow");
    });



});