import React from 'react'
import ChatBot from 'react-simple-chatbot';

const Message = (props) => {

    var response = 'Descupe, mas não há irei conseguir responder a sua pergunta'

    var test1, test2, test3;
    test1 = new RegExp('^(?=.*fixo)(?=.*preço).*$|^(?=.*constante)(?=.*preço).*$|^(?=.*preço)(?=.*produto).*$', 'im')

    if( test1.test(question) )
        response = 'Os preços dos produtos/serviços são inseridos pelos nossos fornecedores podendo sofrer ajustes de orçamento.'
    
    test1 = new RegExp('^(?=.*produto)(?=.*vendido).*$|^(?=.*produto)(?=.*exposto).*$|^(?=.*item)(?=.*vendido).*$', 'im')

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
            message: 'Até a proxima, falou!',
            end: true
        },
    ]

    return (
        <div id="chatbot">
            <ChatBot
                steps={ steps }
            />
        </div>
    )
}