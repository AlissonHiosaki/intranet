// Add form validation and security measures
// serguraça aprimorada contra viaolações na URL da pagina web

function validateForm() {
    var username = document.getElementById('login').value;
    var password = document.getElementById('senha').value;
    var errorMessage = document.getElementById('errorMessage');
    
    if (username.trim() === '' || password.trim() === '') {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.display = 'block';
        return false;
    }
    
    // Add more validation as needed
    
    // Prevent default form submission
    return false;
}

// Disable right-click
document.addEventListener('contextmenu', event => event.preventDefault());

// Disable F12 key
document.onkeydown = function(e) {
    if(e.keyCode == 123) {
        return false;
    }
}