let cliquesSim = 0;

function sim() {
    alert("Acho bom! Agora vamos ver se voce realmente é a Estherzinha.");
    location.href = "pag2.html";
}

function desvia(btn) {
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}

setTimeout(function() {
    document.getElementById("mensagem").style.display = "block";
}, 4000); // 4000 milissegundos = 4 segundos




function simFake() {
    cliquesSim++; // Incrementa a variável a cada clique

    if (cliquesSim === 1) { // Se for o primeiro clique
        alert("Errado! Você se esqueceu de um detalhe importante.");
        document.getElementById("conteudo2").querySelector("h2").textContent = "Seu nome é Estefany CINTRA Lima?";
    } else if (cliquesSim === 2) { // Se for o segundo clique
        alert("Agora sim! Você é uma Cintra!");
        window.location.href = "pag3.html"; // Redireciona para outra página
    }
}

function não() {
    alert("Realmente. Está errado.");
}



const imagens = [
    "imagem1.jpg",
    "imagem2.jpg",
    "imagem3.jpg",
    "imagem4.jpg",
    "imagem5.jpg",
    "imagem6.jpg",
    "imagem7.jpg",
    "imagem8.jpg",
    "imagem9.jpg",
    "imagem10.jpg",
    "imagem11.jpg",
    "imagem12.jpg",
    "imagem13.jpg",
    "imagem14.jpg",
];

let indiceImagem = 0;

const imagem = document.querySelector(".imagem img");

function proximaImagem() {
    indiceImagem = (indiceImagem + 1) % imagens.length;
    imagem.src = imagens[indiceImagem];
}

setInterval(proximaImagem, 3000); // Troca a imagem a cada 3 segundos