let amigos = []; // Array para armazenar todos os nomes dos amigos adicionados
let sorteados = []; // Array para controlar quais amigos já foram sorteados

// Função para adicionar um novo amigo à lista
function adicionarAmigo() {
    let nome = document.querySelector('input').value.trim(); // Obtém o valor do campo de input, e removendo espaços em branco no início e fim
    
    // Verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, digite um nome!"); // Exibe alerta se não houver nome digitado
    } else {
        if (amigos.includes(nome)) {  // Verifica se o nome já existe no array 'amigos'
            alert("Esse nome já existe na lista, digite outro nome!");  // Alerta sobre nome duplicado
            
            limparCampo(); // Limpa o campo de input
            
            return;  // Encerra a execução da função
        } else {
            amigos.push(nome); // Adiciona o novo nome ao final do array 'amigos'
            
            exibirAmigos();  // Atualiza a exibição da lista na página
            
            limparCampo(); // Limpa o campo de input para novo preenchimento
        }
    }
}

// Função para limpar o campo de input
function limparCampo() {
    let nomeInput = document.querySelector('input');  // Seleciona o elemento input
    
    nomeInput.value = '';  // Define o valor do input como string vazia
}

// Função para exibir a lista de amigos na página
function exibirAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");  // Obtém a referência ao elemento UL onde a lista será exibida
    
    listaAmigos.innerHTML = "";  // Limpa o conteúdo atual da lista
    
    for (let i = 0; i < amigos.length; i++) {  // Percorre o array 'amigos' usando um loop for
        listaAmigos.innerHTML += "<li>" + amigos[i] + "</li>";   // Para cada amigo, adiciona um novo item (<li>) à lista
    }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length < 3) {  // Verifica se há pelo menos 3 amigos na lista
        alert("Adicione pelo menos 3 amigos para sortear!");  // Alerta sobre número insuficiente de amigos
        
        return;  // Encerra a execução da função
    }

    // Verifica se todos os amigos já foram sorteados
    if (sorteados.length === amigos.length) {
        document.getElementById('resultado').innerHTML = // Exibe mensagem informando que todos já foram sorteados
            "<p>Todos os nomes já foram sorteados!</p>";

        resultado.style.display = "block"; // garante que a mensagem apareça

        // desativa o botão de ocultar e o botão de adicionar
        document.getElementById('btnOcultar').disabled = true;
        document.getElementById('btnAdicionar').disabled = true;

        return;
}   

    // Declara variáveis para armazenar o índice e nome do amigo sorteado
    let indiceSorteado;
    let amigoSorteado;
    
    // Loop continua até encontrar um amigo não sorteado
    do {
        indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um número aleatório 
        
        amigoSorteado = amigos[indiceSorteado]; // Obtém o nome do amigo no índice sorteado
        
    } while (sorteados.includes(amigoSorteado)); // Continua o loop enquanto o amigo sorteado já estiver na lista de sorteados
    
    sorteados.push(amigoSorteado); // Adiciona o amigo sorteado ao array de sorteados
    
    document.getElementById('resultado').innerHTML = // Exibe o resultado do sorteio na página
        "<p>O amigo sorteado é: <strong>" + amigoSorteado + "</strong></p>";
    
    resultado.style.display = "block"; // Garante que o resultado esteja visível

    let botao = document.getElementById('btnOcultar'); // Botão de ocultar
    botao.disabled = false;           // habilita o botão
    botao.innerText = "Ocultar Resultado"; // texto correto sempre
}

// Função botão ocultar
function botaoocultar() { 
    let resultado = document.getElementById('resultado'); // Seleciona o elemento que exibe o resultado do sorteio
    let botao = document.getElementById('btnOcultar');    // Seleciona o botão de ocultar/mostrar pelo ID
    
    if (resultado.style.display === "none") {   // Verifica se o resultado está atualmente oculto
        resultado.style.display = "block"; // Se estiver oculto, mostra o resultado
        botao.innerText = "Ocultar Resultado"; // Atualiza o texto do botão para indicar que agora pode ocultar
    } else {
        resultado.style.display = "none"; // Se estiver visível, oculta o resultado
        botao.innerText = "Mostrar Resultado"; // Atualiza o texto do botão para indicar que agora pode mostrar
    }
}

// Função para reiniciar o sorteio
function reiniciarSorteio() {
    amigos = []; // Zera a lista de amigos
    sorteados = []; // Zera a lista de amigos já sorteados

    // Limpa o resultado e a lista exibida na página
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('listaAmigos').innerHTML = "";

    // Limpa o campo de input
    document.querySelector('input').value = "";

    // Habilita novamente os botões de adicionar e ocultar
    document.getElementById('btnAdicionar').disabled = false;
    document.getElementById('btnOcultar').disabled = true; // ocultar continua desativado até sortear

    // Exibe mensagem informativa
    alert("Sorteio reiniciado! Adicione amigos para sortear.");
}