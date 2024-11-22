const modal = document.getElementById('modal');
const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('close-modal');
const form = document.getElementById('add-colaborador-form');
const resultados = document.getElementById('resultados');

// Função para recuperar colaboradores do Local Storage
function carregarColaboradores() {
    const dados = localStorage.getItem('colaboradores');
    return dados ? JSON.parse(dados) : [];
}

// Função para salvar colaboradores no Local Storage
function salvarColaboradores(colaboradores) {
    localStorage.setItem('colaboradores', JSON.stringify(colaboradores));
}

// Array inicial de colaboradores
let colaboradores = carregarColaboradores();

// Abrir o modal
openModalButton.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Fechar o modal
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fechar o modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Atualiza a tabela com os colaboradores armazenados

// Calcula o tempo de casa
function calcularTempoDeCasa(dataAdmissao) {
    const dataInicial = new Date(dataAdmissao);
    const dataAtual = new Date();
    const anos = dataAtual.getFullYear() - dataInicial.getFullYear();
    const meses = dataAtual.getMonth() - dataInicial.getMonth();
    return `${anos} anos e ${meses >= 0 ? meses : 12 + meses} meses`;
}

// Adiciona um novo colaborador
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const cargo = document.getElementById('cargo').value;
    const departamento = document.getElementById('departamento').value;
    const dataAdmissao = document.getElementById('dataAdmissao').value;

    const novoColaborador = { nome, cargo, departamento, dataAdmissao };
    colaboradores.push(novoColaborador);

    // Salva no Local Storage
    salvarColaboradores(colaboradores);

    // Atualiza a tabela e fecha o modal
    atualizarTabela();
    modal.style.display = 'none';
    form.reset();
});

// Carrega os colaboradores ao iniciar
atualizarTabela();