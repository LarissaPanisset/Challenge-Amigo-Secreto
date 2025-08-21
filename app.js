// Declaração de arrays (listas) vazias para armazenar dados
let amigos = []; // Array para armazenar todos os nomes dos amigos adicionados
let sorteados = []; // Array para controlar quais amigos já foram sorteados

// Função para adicionar um novo amigo à lista
function adicionarAmigo() {
    // Obtém o valor do campo de input, removendo espaços em branco no início e fim
    let nome = document.querySelector('input').value.trim();
    
    // Verifica se o campo está vazio
    if (nome === "") {
        // Exibe alerta se não houver nome digitado
        alert("Por favor, digite um nome!");
    } else {
        // Verifica se o nome já existe no array 'amigos'
        if (amigos.includes(nome)) {
            // Alerta sobre nome duplicado
            alert("Esse nome já existe na lista, digite outro nome!");
            
            // Limpa o campo de input
            limparCampo();
            
            // Encerra a execução da função
            return;
        } else {
            // Adiciona o novo nome ao final do array 'amigos'
            amigos.push(nome);
            
            // Atualiza a exibição da lista na página
            exibirAmigos();
            
            // Limpa o campo de input para novo preenchimento
            limparCampo();
        }
    }
}

// Função para limpar o campo de input
function limparCampo() {
    // Seleciona o elemento input
    let nomeInput = document.querySelector('input');
    
    // Define o valor do input como string vazia
    nomeInput.value = '';
}

// Função para exibir a lista de amigos na página
function exibirAmigos() {
    // Obtém a referência ao elemento UL onde a lista será exibida
    let listaAmigos = document.getElementById("listaAmigos");
    
    // Limpa o conteúdo atual da lista
    listaAmigos.innerHTML = "";
    
    // Percorre o array 'amigos' usando um loop for
    for (let i = 0; i < amigos.length; i++) {
        // Para cada amigo, adiciona um novo item (<li>) à lista
        listaAmigos.innerHTML += "<li>" + amigos[i] + "</li>";
    }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Verifica se há pelo menos 3 amigos na lista
    if (amigos.length < 3) {
        // Alerta sobre número insuficiente de amigos
        alert("Adicione pelo menos 3 amigos para sortear!");
        
        // Encerra a execução da função
        return;
    }

    // Verifica se todos os amigos já foram sorteados
    if (sorteados.length === amigos.length) {
        // Exibe mensagem informando que todos já foram sorteados
        document.getElementById('resultado').innerHTML =
            "<p>Todos os nomes já foram sorteados!</p>";
        
        // Encerra a execução da função
        return;
    }

    // Declara variáveis para armazenar o índice e nome do amigo sorteado
    let indiceSorteado;
    let amigoSorteado;
    
    // Loop que continua executando até encontrar um amigo não sorteado
    do {
        // Gera um número aleatório 
        indiceSorteado = Math.floor(Math.random() * amigos.length);
        
        // Obtém o nome do amigo no índice sorteado
        amigoSorteado = amigos[indiceSorteado];
        
    // Continua o loop enquanto o amigo sorteado já estiver na lista de sorteados
    } while (sorteados.includes(amigoSorteado));
    
    // Adiciona o amigo sorteado ao array de sorteados
    sorteados.push(amigoSorteado);
    
    // Exibe o resultado do sorteio na página
    document.getElementById('resultado').innerHTML =
        "<p>O amigo sorteado é: <strong>" + amigoSorteado + "</strong></p>";
}