//Alterar Tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoAlterarTema = document.querySelector(".imagem-botao")
botaoAlterarTema.addEventListener("click", () => {
    const modo = body.classList
    if (modo == "modo-claro"){
        body.setAttribute("class", "modo-escuro")
        imagemBotaoAlterarTema.setAttribute("src", "./src/images/moon.png")
    } else {
        body.setAttribute("class", "modo-claro")
        imagemBotaoAlterarTema.setAttribute("src", "./src/images/sun.png")
    }
});