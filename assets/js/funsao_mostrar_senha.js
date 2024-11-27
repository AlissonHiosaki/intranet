function mostrarSenha() {
    var password = document.getElementById("senha");
    var eyeIcon =  document.getElementById("btn-senha");

    if(password.type === "password"){
        password.type = "text";
        eyeIcon.classList.remove("bi-eye-fill");
        eyeIcon.classList.add("bi-eye-slash-fill");
        eyeIcon.setAttribute('arial-label', 'Ocultar senha');
    }else{
        password.type = "password";
        eyeIcon.classList.remove("bi-eye-slash-fill");
        eyeIcon.classList.add("bi-eye-fill");
        eyeIcon.setAttribute('arial-label', ' Mostrar senha');
    }
}