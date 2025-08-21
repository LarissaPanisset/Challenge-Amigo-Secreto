let amigos = [];

function adicionarAmigo() {

let nome = document.querySelector('input').value.trim();

if (nome === "") {

alert("Por favor, digite um nome!");

} else { amigos.push(nome);

exibirAmigos();

} limparCampo();

}

function limparCampo() {

let nomeInput = document.querySelector('input');

nomeInput.value = '';

}

function exibirAmigos() {

let listaAmigos = document.getElementById("listaAmigos");

listaAmigos.innerHTML = "";

for (let i = 0; i < amigos.length; i++) {

listaAmigos.innerHTML += "<li>" + amigos[i] + "</li>"; }

}

function sortearAmigo() {

if (amigos.length < 3) {

alert("Adicione pelo menos 3 amigos para sortear!");

return;

}

let indiceSorteado = Math.floor(Math.random() * amigos.length);

let amigoSorteado = amigos[indiceSorteado];

document.getElementById('resultado').innerHTML =

"<p>O amigo sorteado é: <strong>" + amigoSorteado + "</strong></p>";
}