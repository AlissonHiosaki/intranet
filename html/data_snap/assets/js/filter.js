function filtrarTabela() {
    // Obtém o valor do filtro e converte para minúsculas
    const filtro = document.getElementById('filtro').value.toLowerCase();
    const tabela = document.getElementById('resultados');
    const linhas = tabela.getElementsByTagName('tr');

    // Itera sobre as linhas da tabela
    for (let i = 0; i < linhas.length; i++) {
        const colunas = linhas[i].getElementsByTagName('td');
        let encontrou = false;

        // Verifica cada coluna da linha
        for (let j = 0; j < colunas.length; j++) {
            if (colunas[j]) {
                const conteudo = colunas[j].textContent || colunas[j].innerText;
                if (conteudo.toLowerCase().indexOf(filtro) > -1) {
                    encontrou = true;
                    break;
                }
            }
        }

        // Exibe ou oculta a linha com base na correspondência
        linhas[i].style.display = encontrou ? '' : 'none';
    }
}
