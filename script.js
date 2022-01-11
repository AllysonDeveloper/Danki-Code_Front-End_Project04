var dot = document.querySelectorAll(".dot");
var depcont = document.querySelectorAll(".depoimento-container")

for(let i = 0; i < dot.length; i++){
    dot[i].addEventListener("click", function(){
        var ativos = document.querySelectorAll(".active");
        for(var j = 0; j < ativos.length; j++){
            ativos[j].classList.remove("active");
        }
        dot[i].classList.add("active");

        var depoimentos = document.querySelectorAll(".mostrar");
        for(var j = 0; j < depoimentos.length; j++){
            depoimentos[j].classList.remove("mostrar");
            depoimentos[j].classList.remove("fadein");
        }
        depoimentos = document.querySelectorAll(".fadein");
        for(var j = 0; j < depoimentos.length; j++){
            depoimentos[j].classList.remove("fadein");
        }
        depcont[i].classList.add("mostrar");
        setInterval(function(){depcont[i].classList.add("fadein");}, 500);
    })
}