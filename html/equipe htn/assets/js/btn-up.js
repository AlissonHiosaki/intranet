document.addEventListener("DOMContentLoaded", function () {
    const btnVoltarTopo = document.getElementById('btnVoltarTopo');

    // Mostrar o botão ao rolar a página
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            btnVoltarTopo.style.display = 'block';
        } else {
            btnVoltarTopo.style.display = 'none';
        }
    });

    // Voltar ao topo ao clicar
    btnVoltarTopo.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
