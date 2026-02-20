let dia = 20;

const alianca = document.getElementById("alianca");
const diaNumero = document.getElementById("diaNumero");
const fotoCentro = document.getElementById("fotoCentro");
const mensagemFinal = document.getElementById("mensagemFinal");
const telaFinal = document.getElementById("telaFinal");

// -------- Movimento da aliança --------
function moverAlianca() {
    const largura = window.innerWidth - alianca.offsetWidth;
    const altura = window.innerHeight - alianca.offsetHeight;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    alianca.style.left = x + "px";
    alianca.style.top = y + "px";
}

// -------- Fade entre fotos --------
function trocarFoto(numeroFoto) {
    fotoCentro.style.transition = "opacity 2.5s ease";
    fotoCentro.style.opacity = 0;

    setTimeout(() => {
        fotoCentro.src = "foto" + numeroFoto + ".png";
        fotoCentro.style.opacity = 1;
    }, 500);
}

// -------- Corações no fundo --------
function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.innerHTML = "❤";
    coracao.style.position = "fixed";
    coracao.style.left = Math.random() * window.innerWidth + "px";
    coracao.style.bottom = "-30px";
    coracao.style.fontSize = Math.random() * 20 + 15 + "px";
    coracao.style.color = "rgba(255,255,255,0.6)";
    coracao.style.pointerEvents = "none";
    coracao.style.zIndex = "0";
    document.body.appendChild(coracao);

    let posY = -30;
    const velocidade = Math.random() * 1.5 + 0.5;

    const subir = setInterval(() => {
        posY += velocidade;
        coracao.style.bottom = posY + "px";

        if (posY > window.innerHeight + 50) {
            clearInterval(subir);
            coracao.remove();
        }
    }, 16);
}

// cria corações continuamente
setInterval(criarCoracao, 600);

// -------- Inicialização --------
moverAlianca();

// -------- Clique --------
alianca.addEventListener("click", () => {

    if (dia < 31) {
        dia++;
        diaNumero.innerText = dia;

        let numeroFoto = dia - 19;

        trocarFoto(numeroFoto);
        moverAlianca();
    }

    if (dia === 31) {
        mensagemFinal.innerText = "Eu te amo tanto ❤️";
        mensagemFinal.style.opacity = 1;

        telaFinal.style.opacity = 1;
        telaFinal.style.pointerEvents = "all";

        alianca.style.display = "none";
    }

});