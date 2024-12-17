   // Simulando informações do usuário logado
   const user = {
    name: "Alisson Hiosaki",
    email: "alisson.hiosaki@htn.com.br",
    local:"R3 Un42",
    avatar: "/intranet/assets/img/user/profile.png"
};

// Função para abrir o popup com os dados do usuário
function showProfilePopup() {
    document.getElementById('userAvatar').src = user.avatar;
    document.getElementById('userName').textContent = user.name;
    document.getElementById('userEmail').textContent = user.email;

    // Mostra o overlay e o popup
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('userProfilePopup').style.display = 'block';
}

// Função para fechar o popup
function closeProfilePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('userProfilePopup').style.display = 'none';
}

// Adiciona evento ao botão
document.getElementById('openProfileButton').addEventListener('click', showProfilePopup);

// botao volta para tela de login
function voltar() {

    // Redireciona para a página de login
    window.location.href = "/intranet/index.html";

}
