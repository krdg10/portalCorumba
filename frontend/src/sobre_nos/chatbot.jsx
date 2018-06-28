import React from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#123203',
    headerFontColor: '#261B03',
    headerFontSize: '15px',
    botBubbleColor: '#123203',
    botFontColor: '#556B2F',
    userBubbleColor: '#fff',
    userFontColor: 'red',
  };


const Message = (props) => {

    var response = 'Desculpe, não consegui entender sua pergunta ):'

    var test1, test2, test3;
    // Qual seu nome
    test1 = new RegExp('^(?=.*qual)(?=.*nome).*$', 'im')

    if( test1.test(question) ){
        response = 'Neyruto!'
    }
    // Sobre o que é o portal turismo Corumbá?
    test1 = new RegExp('^(?=.*sobre)(?=.*portal).*$|^(?=.*sobre)(?=.*corumba).*$', 'im')
    
    if( test1.test(question) ){
        response = 'É um site que fornece informações como a história do local, hospedagens, lugares para alimentação, pontos turísticos, etc. Para informações mais detalhadas acesse o link "sobre nós", disponibilizado no rodapé da página.'
    }
     // As informaçoes do site sao gratuitas
     test1 = new RegExp('^(?=.*informaçoes)(?=.*site).*$|^(?=.*informações)(?=.*gratuitas).*$', 'im')
    
    if( test1.test(question) ){
        response = 'Todo o acervo de informações é disponibilizado gratuitamente a todos os usuários.'
    }
    //Como posso saber se as informações disponibilizadas são confiáveis
    test1 = new RegExp('^(?=.*informaçoes)(?=.*disponibilizadas).*$|^(?=.*informações)(?=.*confiáveis).*$', 'im')
    
    if( test1.test(question) ){
        response = 'Todas as informações foram coletadas do site da prefeitura, complementadas com dados coletados pelos sites dos fornecedores e encontrados no buscador da Google.'

    }
    //Caso eu queira dar sugestões ou reclamações sobre o site, onde posso enviar uma mensagem?
    test1 = new RegExp('^(?=.*sugestoes)(?=.*site)(?=.*reclamacoes).*$|^(?=.*site)(?=.*reclamaçao).*$|^(?=.*site)(?=.*reclamações)(?=.*sugestões).*$', 'im')
    
    if( test1.test(question) ){
        response = 'Próximo ao rodapé de todas as páginas tem um espaço para postar qualquer informação que desejar ou caso queira mandar uma mensagem direta aos desenvolvedores, pode acessar em "contatos", disponibilizado no rodapé, e enviar uma mensagem.'

    }
    
    //Estou interessado em divulgar informações da minha empresa no portal, como posso solicitar junto aos desenvolvedores? essa bugada
    test1 = new RegExp('^(?=.*divulgar)(?=.*informações).*$|^(?=.*divulgar)(?=.*empresa)(?=.*portal).*$|^(?=.*informacoes)(?=.*empresa)(?=.*portal).*$', 'im')
    
    if( test1.test(question) ){
        response = 'Acesse, no rodapé do site, o link "contatos". Nessa página pode ser realizado o envio de mensagem direta aos desenvolvedores. O contato será retornado com informações sobre os dados necessários para postagem, disposição das informações na página, etc.'
    }

    //Eu gostaria de acompanhar as atualizações do site em tempo real, como posso realizá-lo?
    test1 = new RegExp('^(?=.*acompanhar)(?=.*atualizacoes).*$|^(?=.*acompanhar)(?=.*site).*$', 'im')
    
    if( test1.test(question) ){
        response = 'Acompanhem-nos em nossas redes sociais, todas as atualizações do Portal Turismo Corumbá são publicadas no mesmo instante facilitando o acompanhamento dos usuários.'

    }

    //Gostaria de aumenta a visibilidade da minha empresa no portal, o que posso fazer?
    test1 = new RegExp('^(?=.*visibilidade)(?=.*empresa).*$|^(?=.*empresa)(?=.*portal).*$', 'im')
    
    if( test1.test(question) ){
        response = 'Entre em contato conosco no link "contatos", disponibilizado no rodapé da página. Retornaremos o contato fornecendo os planos de contrato financeiro para aumentar a visualização da empresa. '

    }

    //Gostaria de postar fotos da minha viagem a Corumbá e dividir as experiências obtidas no lugar, onde posso fazê-lo?
    test1 = new RegExp('^(?=.*fotos)(?=.*viagem).*$|^(?=.*corumbá)(?=.*fotos).*$', 'im')
    
    if( test1.test(question) ){
        response = 'No menu superior da portal, existe a opção "minha viagem", o qual permite a postagem de fotos e adicionar relatos sobre a foto em questão.'


    }

    //Onde consigo informações sobre rodoviária, aeroporto, pontos de taxi, etc.?
    test1 = new RegExp('^(?=.*informacoes)(?=.*taxi).*$|^(?=.*informações)(?=.*aeroporto).*$', 'im')
    
    if( test1.test(question) ){
        response = 'No menu superior do portal existe a opção "serviços" que disponibiliza informações sobre os meios de locomoção na cidade além de outros  serviços como de locomoção (avião, ônibus, taxi, etc.), delegacia, hospitais e bombeiros.'

    }

    //Onde encontro informações sobre os hotéis pesqueiros disponíveis pela cidade de Corumbá?
    test1 = new RegExp('^(?=.*informacoes)(?=.*pesca).*$|^(?=.*informações)(?=.*pesqueiro).*$', 'im')
    
    if( test1.test(question) ){
        response = 'No menu superior do portal existe a opção "Pesca" que disponibiliza informações sobre os hotéis e pousadas destinadas ao público pesqueiro disponíveis em Corumbá.'

    }


    return (
        <div className="text-dark">
            { response }
        </div>
    )
}

var question = ''

export default props => {
    var steps = [
        {
            id: '1',
            message: 'Olá, como posso ajudar?',
            trigger: '2',
        },
        {
            id: '2',
            validator: (value) => {
                if (isNaN(value)) {
                    question = value
                    //console.log(question)
                }
                return true;
              },
            user: true,
            trigger: '3',
        },
        {
            id: '3',
            component: <Message/>,
            trigger: '4',
        },
        {
            id: '4',
            message: 'Você deseja realizar alguma outra pergunta?',
            trigger: '5',
        },
        {
            id: '5',
            options: [
              { value: 1, label: 'Sim', trigger: '6' },
              { value: 2, label: 'Não', trigger: '7' },
            ],
        },
        {
            id: '6',
            message: 'Qual pergunta deseja fazer?',
            trigger: '2',
        },
        {
            id: '7',
            message: 'Até mais meu parceiro!',
            end: true
        },
    ]

    return (
        <div id="chatbot">
        <ThemeProvider theme={theme}>
            <ChatBot
                headerTitle="Dúvidas"
                placeholder="Fala aí meu consagrado!"
                steps={ steps }
            />
        </ThemeProvider>
        </div>
    )
}