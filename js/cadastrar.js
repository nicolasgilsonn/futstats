document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    // Pegar os valores dos inputs

    // Criar um objeto chamado jogador com esses valores
    const jogador = {
        id: "id_" + new Date().getTime(),
        nome: document.querySelector("nome"),
        time: document.querySelector("time"),
        gols: document.querySelector("gols"),
        assistencias: document.querySelector("assistencias"),
        foto: document.querySelector("foto")
    }

    // Salvar o objeto no localStorage usando a chave "jogadores"
    salvar(jogador)

    window.location.href = "index.html"
    
})

function salvar(jogador) {
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
    jogadores.push(jogador)
    localStorage.setItem("jogadores", JSON.stringify(jogadores))
}