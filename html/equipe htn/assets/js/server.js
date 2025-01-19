document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('menu');

    // Função para criar os cards
    const criarCardColaborador = (colaborador) => {
        const card = document.createElement('div');
        card.classList.add('card', ...colaborador.categoria);

        // Adiciona o conteúdo do card
        card.innerHTML = `
            <img src="${colaborador.foto}" alt="${colaborador.nome}" class="foto">
            <div class="info">
                <h3>${colaborador.nome}</h3>
                <p>Status: ${colaborador.status}</p>
                <p>Matrícula: ${colaborador.matricula}</p>
                <p>Cargo: ${colaborador.cargo}</p>
                <p>Setor: ${colaborador.setor}</p>
                <p>Data de Admissão: ${colaborador.dataAdmissao}</p>
                <p>Tempo de Casa: ${calcularTempoDeCasa(colaborador.dataAdmissao)}</p>
                <button class="popup-btn"><i class="bi bi-image"></i>
                Ver Foto</button>
            </div>
        `;

        // Adiciona evento para abrir o pop-up da imagem
        card.querySelector('.popup-btn').addEventListener('click', () => {
            abrirFotoPopup(colaborador.foto);
        });

        return card;
    };

    // Renderizar os cards
    colaboradores.forEach((colaborador) => {
        container.appendChild(criarCardColaborador(colaborador));
    });

    // Filtro de categorias
    const botoesFiltro = document.querySelectorAll('.filter-btn');
    botoesFiltro.forEach((botao) => {
        botao.addEventListener('click', () => {
            const categoria = botao.dataset.category;

            document.querySelectorAll('.card').forEach((card) => {
                if (categoria === 'all' || card.classList.contains(categoria)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

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



// Função para exibir foto em um pop-up
function abrirFotoPopup(fotoUrl) {
    const modal = document.getElementById('fotoModal');
    const modalImg = document.getElementById('fotoPopup');
    modal.style.display = 'block';
    modalImg.src = fotoUrl;

    // Fecha o modal ao clicar no botão ou fora da imagem
    document.getElementById('fecharFotoModal').addEventListener('click', () => {
        modal.style.display = 'none';
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}