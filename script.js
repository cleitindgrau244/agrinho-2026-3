// Botão Saiba Mais

const btnTema = document.getElementById("btnTema");
const temaDetalhado = document.getElementById("temaDetalhado");

btnTema.addEventListener("click", () => {

    temaDetalhado.classList.toggle("oculto");

    temaDetalhado.scrollIntoView({
        behavior: "smooth"
    });

});


// Botões dos cards

const botoes = document.querySelectorAll(".btnDetalhe");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        document.querySelectorAll(".detalhe").forEach(secao => {
            secao.classList.add("oculto");
        });

        const alvo = botao.getAttribute("data-alvo");

        const secao = document.getElementById(alvo);

        secao.classList.remove("oculto");

        secao.scrollIntoView({
            behavior: "smooth"
        });

    });

});