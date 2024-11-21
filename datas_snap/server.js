// Função para calcular o tempo de casa
function calcularTempoDeCasa(dataAdmissao) {
    if (!dataAdmissao) return 'N/A';

    const hoje = new Date();
    const admissao = new Date(dataAdmissao);
    
    const anos = hoje.getFullYear() - admissao.getFullYear();
    const meses = hoje.getMonth() - admissao.getMonth();
    const dias = hoje.getDate() - admissao.getDate();

    let totalAnos = anos;
    let totalMeses = meses;
    if (meses < 0 || (meses === 0 && dias < 0)) {
        totalAnos -= 1; // Ajusta o ano se o mês ou dia ainda não passou
        totalMeses += 12; // Corrige o cálculo dos meses
    }

    if (dias < 0) {
        totalMeses -= 1;
    }

    // Formata o resultado
    return `${totalAnos > 0 ? totalAnos + ' anos' : ''} ${totalMeses > 0 ? totalMeses + ' meses' : ''}`.trim() || 'Menos de 1 mês';
}

// Atualiza a tabela com os dados dos colaboradores
function atualizarTabela(colaboradores) {
    const resultados = document.getElementById('resultados');
    const noResults = document.getElementById('no-results');
    resultados.innerHTML = ''; // Limpa os resultados anteriores

    // Obtém a data atual formatada
    const dataAtual = new Date().toLocaleDateString('pt-BR');

    if (colaboradores.length === 0) {
        noResults.style.display = 'block'; // Exibe mensagem se não houver resultados
        return;
    }

    noResults.style.display = 'none'; // Oculta a mensagem de "nenhum resultado"

    colaboradores.forEach(colaborador => {
        const tempoDeCasa = calcularTempoDeCasa(colaborador.data_admissao);

        const row = `
            <tr>
                <td>${colaborador.id}</td>
                <td>${colaborador.nome}</td>
                <td>${colaborador.cargo}</td>
                <td>${colaborador.departamento}</td>
                <td>${colaborador.data_admissao || 'N/A'}</td>
                <td>${tempoDeCasa}</td> <!-- Adiciona o tempo de casa -->
            </tr>
        `;
        resultados.innerHTML += row;
    });
}

// Pesquisa os colaboradores de teste
function pesquisar() {
    const nome = document.getElementById('search').value.trim().toLowerCase();
    const resultados = colaboradoresUn42.filter(colaborador =>
        colaborador.nome.toLowerCase().includes(nome)
    );
    atualizarTabela(resultados);
}

// Limpar filtro
document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('search').value = '';
    pesquisar(); // Pesquisa sem filtro
});

// Pesquisa inicial
window.onload = () => atualizarTabela(colaboradoresUn42);


