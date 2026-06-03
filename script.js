document.addEventListener("DOMContentLoaded", function () {

    const btnTema = document.getElementById("btnTema");
    const temaDetalhado = document.getElementById("temaDetalhado");

    btnTema.addEventListener("click", function () {

        if (temaDetalhado.style.display === "block") {
            temaDetalhado.style.display = "none";
        } else {
            temaDetalhado.style.display = "block";

            temaDetalhado.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

    const botoes = document.querySelectorAll(".btnDetalhe");

    botoes.forEach(function(botao){

        botao.addEventListener("click", function(){

            document.querySelectorAll(".detalhe").forEach(function(secao){
                secao.style.display = "none";
            });

            const alvo = botao.getAttribute("data-alvo");
            const secao = document.getElementById(alvo);

            secao.style.display = "block";

            secao.scrollIntoView({
                behavior:"smooth"
            });

        });

    });

});