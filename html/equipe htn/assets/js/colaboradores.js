    // exibição de xml ou js na webpage
    const colaboradores = [
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/Aline.jpg',
categoria: ['idc'],
status: 'ATIVO',
nome: 'ALINE COELHO',
matricula: '43915',
cpf: 'null',
telefone: 'null',
cargo: 'OPERADORA DE LOJA',
setor: 'CAIXA/CREDIARIO',
dataAdmissao:'29/01/2024',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/alisson.jpeg',
            categoria: ['vm', 'lideres'],
	         		status: 'ATIVO',
            nome: 'ALISSON HIOSAKI ',
            matricula: '39633 ',
		        	cpf: '50251035840',
		        	telefone: 'null',
            cargo: 'VISUAL MERCHANDISING ',
            setor: 'VITRINE ',
            dataAdmissao:'26/01/2022 ',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/profile.png',
            categoria: ['idc'],
			status: 'AFASTADA',
            nome: 'APARECIDA CARIOCA ',
            matricula: '42850 ',
			cpf: '37689876803',
			telefone: 'null',
            cargo: 'OPERADORA DE LOJA ',
            setor: 'CAIXA/CREDIARIO ',
            dataAdmissao:'01/11/2023',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/profile.png',
            categoria: ['vendas'],
			status: 'FERIAS',
            nome: 'CAMILA SALUSTIANO ',
            matricula: '26144 ',
			cpf: '36882814899',
			telefone: 'null',
            cargo: 'VENDEDORA ',
            setor: 'VENDAS ',
            dataAdmissao:'26/11/2014 ',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/profile.png',
            categoria: ['idc'],
			status: 'ATIVO',
            nome: 'CRISTIANE BENTO',
            matricula: '45113',
			cpf: '36882814899',
			telefone: 'null',
            cargo: 'OPERADORA DE LOJA',
            setor: 'CAIXA/CREDIARIO',
            dataAdmissao:'05/11/2024',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/eduarda.jpg',
            categoria: ['vendas'],
			status: 'ATIVO',
            nome: 'EDUARDA GUIMARAES',
            matricula: '44775',
			cpf: '39416777803',
			telefone: 'null',
            cargo: 'VENDEDORA',
            setor: 'VENDAS',
            dataAdmissao:'05/09/2024',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/Elis.jpg',
            categoria: ['vendas'],
			status: 'ATIVO',
            nome: 'ELIS PAULA',
            matricula: '42170',
			cpf: '50583856861',
			telefone: 'null',
            cargo: 'VENDEDORA',
            setor: 'VENDAS',
            dataAdmissao:'29/05/2023',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/Ester.jpg',
            categoria: ['vendas'],
			status: 'ATIVO',
            nome: 'ESTER LIMA',
            matricula: '43546',
			cpf: '09238448566',
			telefone: 'null',
            cargo: 'VENDEDORA',
            setor: 'VENDAS',
            dataAdmissao:'05/12/2023',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/Gabriel.jpg',
            categoria: ['idc'],
			status: 'ATIVO',
            nome: 'GABRIEL SIPRAKI',
            matricula: '41818',
			cpf: '49435038883',
			telefone: 'null',
            cargo: 'OPERADOR DE LOJA',
            setor: 'CAIXA/CREDIARIO',
            dataAdmissao:'08/03/2023',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/gabriela.png',
            categoria: ['idc'],
			status: 'ATIVO',
            nome: 'GABRIELA CAMARGO',
            matricula: '42526',
			cpf: '47402457877',
			telefone: 'null',
            cargo: 'OPERADORA DE LOJA',
            setor: 'CAIXA/CREDIARIO',
            dataAdmissao:'01/09/2023',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/profile.png',
            categoria: ['idc'],
			status: 'ATIVO',
            nome: 'JANAINA PESSOA',
            matricula: '44986',
			cpf: '46006030870',
			telefone: 'null',
            cargo: 'OPERADORA DE LOJA',
            setor: 'CAIXA/CREDIARIO',
            dataAdmissao:'10/10/2024',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/jaciele.jpg',
            categoria: ['vendas'],
			status: 'ATIVO',
            nome: 'JASIELE CORDEIRO',
            matricula: '44786',
			cpf: '50119996880',
			telefone: 'null',
            cargo: 'VENDEDORA',
            setor: 'VENDAS',
            dataAdmissao:'10/09/2024',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/jessica.jpeg',
            categoria: ['idc','lideres'],
			status: 'ATIVO',
            nome: 'JESSICA THOMAZ',
            matricula: '21121',
			cpf: '37689808808',
			telefone: 'null',
            cargo: 'ANALISTA ADMINISTRATIVO',
            setor: 'ADMINISTRACAO',
            dataAdmissao:'26/11/2012',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/joao.png',
            categoria: ['estoque'],
			status: 'ATIVO',
            nome: 'JOAO SANTOS',
            matricula: '44420',
			cpf: '44653510890',
			telefone: 'null',
            cargo: 'ASSISTENTE DE OPERACOES',
            setor: 'ESTOQUE',
            dataAdmissao:'11/06/2024',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/lavinia.jpg',
            categoria: ['estoque'],
			status: 'ATIVO',
            nome: 'LAVINIA SILVA',
            matricula: '44456',
			cpf: '48897669875',
			telefone: 'null',
            cargo: 'ASSISTENTE DE OPERACOES',
            setor: 'ESTOQUE',
            dataAdmissao:'02/07/2024',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/profile.png',
            categoria: ['vendas'],
			status: 'ATIVO',
            nome: 'LENITA PLACIDO',
            matricula: '42046',
			cpf: '47581113833',
			telefone: 'null',
            cargo: 'VENDEDORA',
            setor: 'VENDAS',
            dataAdmissao:'26/04/2023',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/profile.png',
            categoria: ['vendas'],
			status: 'ATIVO',
            nome: 'LEONARDO PEREIRA',
            matricula: '44688',
			cpf: '46274811877',
			telefone: 'null',
            cargo: 'VENDEDOR',
            setor: 'VENDAS',
            dataAdmissao:'20/08/2024',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/Maira.jpg',
            categoria: ['estoque'],
			status: 'ATIVO',
            nome: 'MAIRA ANDRADE',
            matricula: '43619',
			cpf: '55287471807',
			telefone: 'null',
            cargo: 'ASSISTENTE DE OPERACOES',
            setor: 'ESTOQUE',
            dataAdmissao:'06/12/2023',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/matheus.jpeg',
            categoria: ['gestores'],
			status: 'ATIVO',
            nome: ' MATHEUS SOARES',
            matricula: '44433',
			cpf: 'null',
			telefone: 'null',
            cargo: 'GERENTE JUNIOR',
            setor: 'GESTORES',
            dataAdmissao:'23/11/2020',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/Mirela.png',
            categoria: ['idc'],
            nome: 'MIRELA FERREIRA',
            matricula: '44790',
			cpf: '48820058839',
			telefone: 'null',
            cargo: 'OPERADORA DE LOJA',
            setor: 'CAIXA/CREDIARIO',
            dataAdmissao:'10/09/2024',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/Nayriane.jpg',
            categoria: ['vendas'],
			status: 'ATIVO',
            nome: 'NAYRIANE ROCHA',
            matricula: '43901',
			cpf: '42062482817',
			telefone: 'null',
            cargo: 'VENDEDORA',
            setor: 'VENDAS',
            dataAdmissao:'24/01/2024',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/Rhyan.jpg',
            categoria: ['vendas'],
			status: 'FERIAS',
            nome: 'RHYAN LEMOS',
            matricula: '42066',
			cpf: '52315031850',
			telefone: 'null',
            cargo: 'VENDEDOR',
            setor: 'VENDAS',
            dataAdmissao:'27/04/2023',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/samira.jpg',
            categoria: ['vendas'],
			status: 'ATIVO',
            nome: 'SAMIRA DOS SANTOS',
            matricula: '44414',
			cpf: '39416803820',
			telefone: 'null',
            cargo: 'VENDEDORA',
            setor: 'VENDAS',
            dataAdmissao:'10/06/2024',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/sergio.jpg',
            categoria: ['gestores'],
			status: 'ATIVO',
            nome: 'SERGIO MUZIOL',
            matricula: '43984',
			cpf: 'null',
			telefone: 'null',
            cargo: 'GERENTE',
            setor: 'GESTORES',
            dataAdmissao:'12/05/2017',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/victor.jpeg',
            categoria: ['estoque','lideres'],
			status: 'FERIAS',
            nome: 'VICTOR SILVA',
            matricula: '32036',
			cpf: '45354530806',
			telefone: 'null',
            cargo: 'ANALISTA DE OPERACOES',
            setor: 'ESTOQUE',
            dataAdmissao:'06/07/2017',
        },
        {
            foto: 'https://alissonhiosaki.github.io/intranet/html/equipe%20htn/assets/photos/profile.png',
            categoria: ['vendas'],
			status: 'ATIVO',
            nome: 'WARLEY OLIVEIRA',
            matricula: '38777',
			cpf: '45414023867',
			telefone: 'null',
            cargo: 'VENDEDOR',
            setor: 'VENDAS',
            dataAdmissao:'16/11/2021',
        },

    ];
