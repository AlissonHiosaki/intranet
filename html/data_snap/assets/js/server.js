


document.addEventListener('DOMContentLoaded', () => {
    // Referência ao corpo da tabela
    const tabelaCorpo = document.getElementById('resultados');

    // Função para converter DD/MM/AAAA para um objeto Date
function parseDataBrasil(dataString) {
    const [dia, mes, ano] = dataString.split('/').map(Number); // Separa os valores
    return new Date(ano, mes - 1, dia); // Cria o objeto Date (mês é baseado em zero)
}

function calcularTempoDeCasa(dataAdmissao) {
    if (!dataAdmissao) return 'N/A';

    const hoje = new Date();
    const admissao = parseDataBrasil(dataAdmissao); // Converte para Date usando o formato brasileiro

    // Diferença em milissegundos
    const diffMillis = hoje - admissao;
    const diffDias = Math.floor(diffMillis / (1000 * 60 * 60 * 24)); // Total de dias

    // Calcula anos, meses e dias restantes
    const anos = Math.floor(diffDias / 365); // Aproximação de anos
    const meses = Math.floor((diffDias % 365) / 30); // Aproximação de meses
    const dias = (diffDias % 365) % 30; // Dias restantes

    return `${anos > 0 ? anos + ' anos' : ''} ${meses > 0 ? meses + ' meses' : ''} ${dias > 0 ? dias + ' dias' : ''}`.trim() || 'Menos de 1 dia';
}

    // Preenche a tabela com os dados
    colaboradores.forEach(colaborador => {
        const linha = document.createElement('tr');

        linha.innerHTML = `
            <td>${colaborador.matricula}</td>
            <td>${colaborador.nome}</td>
            <td>${colaborador.cargo}</td>
            <td>${colaborador.setor}</td>
            <td>${colaborador.dataAdmissao}</td>
            <td>${calcularTempoDeCasa(colaborador.dataAdmissao)}</td>
        `;

        // Adiciona a linha à tabela
        tabelaCorpo.appendChild(linha);
    });
});

 
