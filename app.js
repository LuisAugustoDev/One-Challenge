let amigos = [];

function adicionarAmigo() {
    const inputElement = document.getElementById("amigo");
    const inputText = inputElement.value.trim();

    if (inputText === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(inputText);
    inputElement.value = "";

    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSelecionado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";  // Limpa o resultado anterior
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSelecionado}</strong>`;
}
