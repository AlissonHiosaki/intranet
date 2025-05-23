/* Função de login */
function logar() {
    const login = document.getElementById('login').value.trim(); // Remove espaços em branco
    const senha = document.getElementById('senha').value.trim();

    // Simulação de usuários válidos (aqui você pode conectar a uma API ou banco de dados)
    const usuariosValidos = { 
        admin: 'admin',      //usuario admin*
        50251035840: '39633',//Alisson
        12345678910: '43915',//Aline
        37689876803: '42850',//Aparecida
        36882814899: '26144',//Camila
        36882814899: '45113',//Cristiane
        39416777803: '44775',//Eduarda
        50583856861: '42170',//Elis Paula
        12345678910: '43546',//Ester 09238448566
        47402457877: '42526',//Gabriela
        49435038883: '38148',//Gabriel
        46006030870: '44986',//Janaina
        50119996880: '44786',//Jasiele
        37689808808: '21121',//Jessica
        44653510890: '44420',//Joao
        48897669875: '44456',//Lavinia
        47581113833: '42046',//Lenita
        46274811877: '44688',//Leonardo
        55287471807: '43619',//Maira
        12345678910: '44433',//Matheus
        48820058839: '44790',//Mirela
        42062482817: '43901',//Nayriane
        52315031850: '42066',//Rhyan
        39416803820: '44414',//Samira
        12345678910: '40929',//Sergio
        45354530806: '32036',//Victor
        45414023867: '38777',//Warley
    };

    // Valida o login
    if (usuariosValidos[login] && usuariosValidos[login] === senha) {
        // Exibe a mensagem de boas-vindas
        exibirMensagemBoasVindas(login);

        // Redireciona para a página home
        location.href = "./html/equipe htn/index.html"; 
    } else {
        // Exibe uma mensagem de erro
        exibirMensagemErro('Usuário ou senha incorreta. Tente novamente.');
        limparCampos(); // Limpa os campos de entrada
    }
}

// Função para exibir mensagens de boas-vindas
function exibirMensagemBoasVindas(usuario) {
    const boasVindasElement = document.getElementById('boasVindasMessage');
    
    // Exibe a mensagem de boas-vindas personalizada (por exemplo, com o número do login ou nome do usuário)
    boasVindasElement.textContent = `Bem-vindo, ${usuario}! Você está logado com sucesso.`;
    boasVindasElement.style.display = 'block'; // Exibe o elemento
}

// Função para exibir mensagens de erro
function exibirMensagemErro(mensagem) {
    const errorMessageElement = document.getElementById('errorMessage');
    errorMessageElement.textContent = mensagem; // Define o texto do elemento de erro
    errorMessageElement.style.display = 'block'; // Exibe o elemento
}

// Função para limpar os campos de entrada
function limparCampos() {
    document.getElementById('login').value = "";
    document.getElementById('senha').value = "";
    document.getElementById('login').focus(); // Foco no campo login
}
