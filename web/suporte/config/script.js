const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");

// Função para abrir o pop-up com a imagem selecionada
function openPopup(image) {
    popupImage.src = image.src;
    popup.style.display = "flex";
}

// Função para fechar o pop-up
function closePopup() {
    popup.style.display = "none";
}

