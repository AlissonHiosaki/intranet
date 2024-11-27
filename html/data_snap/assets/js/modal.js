
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('close-modal');
const openModalButton = document.getElementById('open-modal');
const addColaboradorForm = document.getElementById('add-colaborador-form');
const nomeInput = document.getElementById('nome');
const cargoInput = document.getElementById('cargo');
const departamentoInput = document.getElementById('departamento');
const dataAdmissaoInput = document.getElementById('dataAdmissao');

// Função para abrir o modal
openModalButton.addEventListener('click', () => {
    modal.style.display = 'flex'; // Mostrar o modal
});

// Função para fechar o modal
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none'; // Fechar o modal
});

// Função para adicionar um novo colaborador
addColaboradorForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impedir o envio do formulário

    // Criar um novo colaborador a partir dos dados do formulário
    const novoColaborador = {
        matricula: (colaboradores.length + 40000).toString(), // Gerar matrícula simples
        nome: nomeInput.value,
        cargo: cargoInput.value,
        setor: departamentoInput.value,
        dataAdmissao: dataAdmissaoInput.value,
    };

    // Adicionar o novo colaborador à lista
    colaboradores.push(novoColaborador);

    // Atualizar a tabela
    adicionarColaboradoresNaTabela(colaboradores);

    // Fechar o modal
    modal.style.display = 'none';

    // Limpar o formulário
    addColaboradorForm.reset();
});

// Função para adicionar colaboradores na tabela
function adicionarColaboradoresNaTabela(lista) {
    tabelaCorpo.innerHTML = ''; // Limpar a tabela
    lista.forEach(colaborador => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${colaborador.matricula}</td>
            <td>${colaborador.nome}</td>
            <td>${colaborador.cargo}</td>
            <td>${colaborador.setor}</td>
            <td>${colaborador.dataAdmissao}</td>
            <td>Tempo de Casa</td> <!-- Aqui pode-se calcular o tempo de casa -->
        `;
        tabelaCorpo.appendChild(linha);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  

    const tabelaCorpo = document.getElementById('resultados');
    const searchInput = document.getElementById('search');
    const noResults = document.getElementById('no-results');
    const clearButton = document.getElementById('clear');

    // Função para adicionar os colaboradores na tabela
    function adicionarColaboradoresNaTabela(lista) {
        tabelaCorpo.innerHTML = ''; // Limpar a tabela
        if (lista.length === 0) {
            noResults.style.display = 'block'; // Mostrar mensagem se não houver resultados
        } else {
            noResults.style.display = 'none'; // Esconder a mensagem de nenhum resultado
            lista.forEach(colaborador => {
                const linha = document.createElement('tr');
                linha.innerHTML = `
                    <td>${colaborador.matricula}</td>
                    <td>${colaborador.nome}</td>
                    <td>${colaborador.cargo}</td>
                    <td>${colaborador.setor}</td>
                    <td>${colaborador.dataAdmissao}</td>
                    <td>Tempo de Casa</td> <!-- Aqui pode-se calcular o tempo de casa -->
                `;
                tabelaCorpo.appendChild(linha);
            });
        }
    }

    // Função de pesquisa que filtra os colaboradores pelo nome
    function pesquisar() {
        const query = searchInput.value.toLowerCase();
        const resultados = colaboradores.filter(colaborador => 
            colaborador.nome.toLowerCase().includes(query)
        );
        adicionarColaboradoresNaTabela(resultados);
    }

    // Função para limpar a pesquisa e mostrar todos os colaboradores
    clearButton.addEventListener('click', () => {
        searchInput.value = '';
        adicionarColaboradoresNaTabela(colaboradores); // Recarrega todos os colaboradores
    });

    // Event listener para disparar a pesquisa quando o usuário digitar
    searchInput.addEventListener('input', pesquisar);

});

// exportar para csv
function exportarCSV() {
    const tabela = document.querySelector('table');
    const linhas = tabela.querySelectorAll('tr');  // Seleciona todas as linhas da tabela
    const dadosCSV = [];

    // Itera sobre todas as linhas da tabela
    linhas.forEach((linha, index) => {
        const colunas = linha.querySelectorAll('th, td');  // Captura todas as células da linha
        const linhaCSV = [];

        // Para cada célula na linha, obtém o texto e adiciona ao array da linhaCSV
        colunas.forEach(coluna => {
            linhaCSV.push('"' + coluna.innerText.replace(/"/g, '""') + '"');  // Escape de aspas para CSV
        });

        dadosCSV.push(linhaCSV.join(','));  // Junta as células por vírgula
    });

    // Cria o conteúdo do arquivo CSV
    const csvContent = dadosCSV.join('\n');  // Junta todas as linhas com quebra de linha

    // Cria um link temporário para baixar o CSV
    const link = document.createElement('a');
    link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent));
    link.setAttribute('download', 'colaboradores.csv');  // Nome do arquivo CSV
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// exporta excel 
function exportarExcel() {
    // Seleciona a tabela
    const tabela = document.querySelector('table');
    
    // Cria uma planilha a partir dos dados da tabela
    const wb = XLSX.utils.table_to_book(tabela, { sheet: "Colaboradores" });

    // Converte a planilha para um arquivo Excel
    XLSX.writeFile(wb, "colaboradores.xlsx"); // Nome do arquivo
}