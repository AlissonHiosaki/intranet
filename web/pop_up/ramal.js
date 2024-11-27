  // Lista de contatos
  const contacts = [
    { ramal: "1147", nome: "EDILEIA OLIVEIRA", setor: "ADMINISTRÇÃO DE PESSOA" },
    { ramal: "1197", nome: "ESTEFANIA MARQUES", setor: "ADMINISTRÇÃO DE PESSOA" },
    { ramal: "1197", nome: "JANETE COSTA", setor: "ADMINISTRÇÃO DE PESSOA" },
    { ramal: "1206", nome: "JULIANA BARBOSA", setor: "ADMINISTRÇÃO DE PESSOA" },
    { ramal: "1206", nome: " MARIA EDUARDA MARTINS", setor: " ADMINISTRÇÃO DE PESSOA" },
    { ramal: "1192", nome: "RAISSA GALHARDO ", setor: " ADMINISTRÇÃO DE PESSOA" },
    { ramal: "1142", nome: " ALMOXERIFADO", setor: "ALMOXERIFADO " },
    { ramal: "1177", nome: " FABIO ALMEIDA", setor: " ALMOXERIFADO" },
    { ramal: "1127", nome: " AMALIA OLIVEIRA", setor: "COMPRAS " },
    { ramal: "1124", nome: "CAMILA CAVALLARO ", setor: " COMPRAS" },
    { ramal: "1133", nome: "CAROLINA INF TESSARO ", setor: " COMPRAS" },
    { ramal: "1123", nome: " CRISTIANE CEZAR", setor: "COMPRAS " },
    { ramal: "1129", nome: "DARLENE DE MELO ", setor: " COMPRAS" },
    { ramal: "1120", nome: " GERUSA REZENDE ", setor: " COMPRAS" },
    { ramal: "1181", nome: "GHIULIA ALVES ", setor: " COMPRAS" },
    { ramal: "1219", nome: "JOSE LAETER(JUNIOR) ", setor: " COMPRAS" },
    { ramal: "1251", nome: "RODRIGO BEZEIRRA ", setor: " COMPRAS" },
    { ramal: "1132", nome: "TATIANY ", setor: "COMPRAS " },
    { ramal: "1122", nome: " VIVIANE ALVES", setor: " COMPRAS" },
    { ramal: "1111", nome: "ADELINE ABRAHAO ", setor: " CONTROLADORIA" },
    { ramal: "1173", nome: "FABIANO SANTOS ", setor: "CONTROLADORIA " },
    { ramal: "1136", nome: " DEBORAH ZAMPINI", setor: "ESTILO " },
    { ramal: "1195", nome: " LUCAS VIRGILIO", setor: "ESTILO " },
    { ramal: "1150", nome: " CRISTIANE LEITE", setor: "FINANCEIRO " },
    { ramal: "1196", nome: " ELAINE BATISTA", setor: "FINANCEIRO " },
    { ramal: "1184", nome: "GIANNE CAMARGO", setor: "FINANCEIRO " },
    { ramal: "1149", nome: "LARISSA CAMARGO ", setor: "FINANCEIRO " },
    { ramal: "1170", nome: "TAMIRES COSTAS ", setor: "FINANCEIRO " },
    { ramal: "1199", nome: " THAIS SILVEIRA", setor: "FINANCEIRO " },
    { ramal: "1154", nome: "ROSANA LATORRE ", setor: " FINANCEIRO" },
    { ramal: "1152", nome: "BRUNA SILVA ", setor: " FISCAL" },
    { ramal: "1150", nome: " JULIA RODRIGUES", setor: "FISCAL " },
    { ramal: "1110", nome: "MARRARA MONTANHA ", setor: " FISCAL" },
    { ramal: "1228", nome: "FERNANDO LUCAS ", setor: "GESTÃO DE FORNECEDORES " },
    { ramal: "1172", nome: "MATHEUS ALVES ", setor: "GESTÃO DE FORNECEDORES  " },
    { ramal: "1183", nome: "MIRIAN SERRALVO ", setor: " JURIDICO" },
    { ramal: "1205", nome: " BRUNO CONSTANTE", setor: " LOGISTICA" },
    { ramal: "1138", nome: "CLAYTON BORGES ", setor: " LOGISTICA" },
    { ramal: "1162", nome: "JEFERSON HONORIO ", setor: "LOGISTICA " },
    { ramal: "1125", nome: "JACKSON WILLIAN ", setor: " LOGISTICA REVERSA - DEFEITOS" },
    { ramal: "1188", nome: "BRENDA OLIVEIRA ", setor: " MANUTENÇÃO E OBRAS " },
    { ramal: "1194", nome: " CAIO RUBUNATO", setor: "MANUTENÇÃO E OBRAS " },
    { ramal: "1104", nome: "TAILA FELIPE ", setor: " MANUTENÇÃO E OBRAS" },
    { ramal: "1218 ", nome: " THAIANE SOUZA", setor: "MANUTENÇÃO E OBRAS " },
    { ramal: "1190", nome: "ANA PRADO ", setor: "MARKETING " },
    { ramal: "1108", nome: " MONISE MONTANHER", setor: " MARKETING" },
    { ramal: "1153", nome: "RAFAELA OLIVEIRA ", setor: " MARKETING" },
    { ramal: "1175", nome: " RAPHAEL BARBOSA", setor: " MARKETING" },
    { ramal: "1227", nome: " VICTAOR KLAUS", setor: " MARKETING" },
    { ramal: "1126", nome: " DANIEL PINHEIRO", setor: "PLANEJAMENTO " },
    { ramal: "1226", nome: "GIAN MOTTA ", setor: " PLANEJAMENTO" },
    { ramal: "1128", nome: "ERICH SANTOS ", setor: " PLANEJAMENTO" },
    { ramal: "1214", nome: " DIOGO SOUZA", setor: " PLANEJAMENTO" },
    { ramal: "1161", nome: "GABRIEL SILVA ", setor: "PRIVATE LABEL " },
    { ramal: "1160", nome: "LUCILENE TONELLI ", setor: " PRIVATE LABEL" },
    { ramal: "1105", nome: "MILCA ARAUJA ", setor: " PRIVATE LABEL" },
    { ramal: "1179", nome: "RALQUEL SILVA ", setor: "PRIVATE LABEL " },
    { ramal: "1104", nome: " RENATO LOPES", setor: " PRIVATE LABEL" },
    { ramal: "1252", nome: "RODOLFO GONÇALVES ", setor: "PRIVATE LABEL " },
    { ramal: "1100", nome: "RECEPÇÃO ", setor: " RECEPÇÃO" },
    { ramal: "1178", nome: " ANDRESSA PAHINS", setor: "RECURSOS HUMANOS " },
    { ramal: "1140", nome: "HELOISA ZANETTI ", setor: "RECURSOS HUMANOS " },
    { ramal: "1146", nome: " JULINA PAES", setor: "RECURSOS HUMANOS " },
    { ramal: "1193", nome: "KALLYNE CAMPOS ", setor: " RECURSOS HUMANOS" },
    { ramal: "1144", nome: " LARISSA TOMIOKA", setor: "RECURSOS HUMANOS " },
    { ramal: "1144", nome: "MATEUS LUCAS ", setor: "RECURSOS HUMANOS " },
    { ramal: "1137", nome: "RODRIGO OLIVEIRA ", setor: "RECURSOS HUMANOS " },
    { ramal: "1117", nome: "SAMUEL GONÇALVES ", setor: " SUPRIMENTOS" },
    { ramal: "1139", nome: "ORLANDO LIMA ", setor: "TESOURARIA " },
    { ramal: "1200", nome: " SUPORTE TI", setor: " TI" },
    { ramal: "1107", nome: "JENIFER CRUZ ", setor: "VMDL " },
    { ramal: "1204", nome: " JOÃO DOMICILIANO", setor: " VMDL" },
    { ramal: "1116", nome: " SIMONE DOMINGOS", setor: " VMDL" },
];

// Função para abrir o popup e carregar a lista
 // Função para abrir o popup e carregar a lista
 function showPhonebookPopup() {
    const phonebookList = document.getElementById('phonebookList');
    phonebookList.innerHTML = ''; // Limpa a lista para evitar duplicações

    // Adiciona os contatos dinamicamente em formato de tabela
    contacts.forEach(contact => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contact.ramal}</td>
            <td>${contact.nome}</td>
            <td>${contact.setor}</td>
        `;
        phonebookList.appendChild(row);
    });

    // Mostra o popup e o overlay
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('phonebookPopup').style.display = 'block';
}

// Função para fechar o popup
function closePhonebookPopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('phonebookPopup').style.display = 'none';
}

// Função para filtrar os contatos na barra de pesquisa
function filterContacts() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const phonebookList = document.getElementById('phonebookList');
    phonebookList.innerHTML = ''; // Limpa a lista

    // Filtra os contatos com base no ramal, nome ou setor
    contacts
        .filter(contact => 
            contact.ramal.includes(query) || 
            contact.nome.toLowerCase().includes(query) || 
            contact.setor.toLowerCase().includes(query)
        )
        .forEach(contact => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${contact.ramal}</td>
                <td>${contact.nome}</td>
                <td>${contact.setor}</td>
            `;
            phonebookList.appendChild(row);
        });
}