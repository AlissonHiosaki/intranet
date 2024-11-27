// Adiciona um "resizer" em cada cabeçalho (th)
document.querySelectorAll('th').forEach(th => {
    const resizer = document.createElement('div');
    resizer.classList.add('resizer');
    th.appendChild(resizer);

    let startX, startWidth;

    // Evento de início do redimensionamento
    resizer.addEventListener('mousedown', (e) => {
        startX = e.pageX;
        startWidth = th.offsetWidth;

        // Funções de movimentação e finalização
        const doDrag = (e) => {
            const newWidth = startWidth + (e.pageX - startX);
            th.style.width = `${newWidth}px`;
        };

        const stopDrag = () => {
            document.removeEventListener('mousemove', doDrag);
            document.removeEventListener('mouseup', stopDrag);
        };

        // Eventos de movimentação e finalização
        document.addEventListener('mousemove', doDrag);
        document.addEventListener('mouseup', stopDrag);
    });
});
