import React, { Component } from 'react'
import axios from 'axios'


const URL = 'http://localhost:3003/api/posts'

import PostForm from './form'

export default class Admin extends Component {
    
    constructor(props){
        super(props)
        this.state = {description: '', tipo: '', name: '', rua: '', cep: '', 
        bairro: '', numero: '', email: '', telefone: '', 
        horario_funcionamento: '', hospedagemPremium: '', ondeIrPremium: '',
        alimentacaoPremium: '', lazerPremium: '', homePremium: '', site: '', list: [] }
        

        this.handleChangeDescription = this.handleChangeDescription.bind(this)
        this.handleChangeTipo = this.handleChangeTipo.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeRua = this.handleChangeRua.bind(this)
        this.handleChangeCEP = this.handleChangeCEP.bind(this)
        this.handleChangeBairro = this.handleChangeBairro.bind(this)
        this.handleChangeNumero = this.handleChangeNumero.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeTelefone = this.handleChangeTelefone.bind(this)
        this.handleChangeHorario_Funcionamento = this.handleChangeHorario_Funcionamento.bind(this)
        this.handleChangeHospedagemPremium = this.handleChangeHospedagemPremium.bind(this)
        this.handleChangeOndeIrPremium = this.handleChangeOndeIrPremium.bind(this)
        this.handleChangeAlimentacaoPremium = this.handleChangeAlimentacaoPremium.bind(this)
        this.handleChangeLazerPremium = this.handleChangeLazerPremium.bind(this)
        this.handleChangeHomePremium = this.handleChangeHomePremium.bind(this)
        this.handleChangeSite = this.handleChangeSite.bind(this)

        this.handleAdd = this.handleAdd.bind(this)
        this.refresh()
       
    }

  
    handleChangeTelefone(e){
        this.setState({...this.state, telefone: e.target.value })
    }
    handleChangeHospedagemPremium(e){
        this.setState({...this.state, hospedagemPremium: e.target.value })
    }
    handleChangeOndeIrPremium(e){
        this.setState({...this.state, ondeIrPremium: e.target.value })
    }
    handleChangeAlimentacaoPremium(e){
        this.setState({...this.state, alimentacaoPremium: e.target.value })
    }
    handleChangeLazerPremium(e){
        this.setState({...this.state, lazerPremium: e.target.value })
    }
    handleChangeHomePremium(e){
        this.setState({...this.state, homePremium: e.target.value })
    }
    handleChangeDescription(e){
        this.setState({...this.state, description: e.target.value })
    }
    handleChangeName(e){
        this.setState({...this.state, name: e.target.value })
    }
    handleChangeEmail(e){
        this.setState({...this.state, email: e.target.value })
    }
    handleChangeRua(e){
        this.setState({...this.state, rua: e.target.value })
    }
    handleChangeCEP(e){
        this.setState({...this.state, cep: e.target.value })
    }
    handleChangeNumero(e){
        this.setState({...this.state, numero: e.target.value })
    }
    handleChangeHorario_Funcionamento(e){
        this.setState({...this.state, horario_funcionamento: e.target.value })
    }
    handleChangeBairro(e){
        this.setState({...this.state, bairro: e.target.value })
    }
    handleChangeTipo(e){
        this.setState({...this.state, tipo: e.target.value })
    }
    handleChangeSite(e){
        this.setState({...this.state, site: e.target.value })
    }
    /* this.state = {description: '', tipo: '', name: '', rua: '', cep: '', 
        bairro: '', numero: '', email: '', telefone: '', 
        horario_funcionamento: '', hospedagemPremium: '', ondeIrPremium: '',
        alimentacaoPremium: '', lazerPremium: '', homePremium: '', list: [] } */
    handleAdd(){
        const description = this.state.description//arrumar forma de passar mais parametros, no caso nome e tipo. Tipo é fixo entao é mais de boa. Quando deixei default na collection deu
        const name = this.state.name
        const tipo = this.state.tipo
        const hospedagemPremium = this.state.hospedagemPremium
        const rua = this.state.rua
        const cep = this.state.cep
        const bairro = this.state.bairro
        const numero = this.state.numero
        const email = this.state.email
        const telefone = this.state.telefone
        const horario_funcionamento = this.state.horario_funcionamento
        const ondeIrPremium = this.state.ondeIrPremium
        const alimentacaoPremium = this.state.alimentacaoPremium
        const lazerPremium = this.state.lazerPremium
        const homePremium = this.state.homePremium
        const site = this.state.site
        
        axios.post(URL, {description, name, tipo, hospedagemPremium, rua, cep, bairro, numero, email, telefone,
        horario_funcionamento, ondeIrPremium, alimentacaoPremium, lazerPremium, homePremium, site})
            .then(resp => this.refresh())
            
    }
    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, description: '', tipo: '', name: '', rua: '', cep: '', bairro: '', numero: '', email: '', telefone: '', horario_funcionamento: '', hospedagemPremium: '', ondeIrPremium: '', alimentacaoPremium: '', lazerPremium: '', homePremium: '', site: '', list: resp.data}))
    }

   

    render() {
        return (
            <div className='admin'> 
             <PostForm description={this.state.description} 
                    name={this.state.name}
                    rua={this.state.rua}
                    bairro={this.state.bairro}
                    alimentacaoPremium={this.state.alimentacaoPremium}
                    cep={this.state.cep}
                    email={this.state.email}
                    homePremium={this.state.homePremium}
                    horario_funcionamento={this.state.horario_funcionamento}
                    hospedagemPremium={this.hospedagemPremium}
                    lazerPremium={this.lazerPremium}
                    numero={this.state.numero}
                    ondeIrPremium={this.state.ondeIrPremium}
                    telefone={this.state.telefone}
                    tipo={this.state.tipo}
                    site={this.state.site}

                    handleAdd={this.handleAdd}
                    handleChangeAlimentacaoPremium={this.handleChangeAlimentacaoPremium}
                    handleChangeBairro={this.handleChangeBairro}
                    handleChangeCEP={this.handleChangeCEP}
                    handleChangeDescription={this.handleChangeDescription}
                    handleChangeEmail={this.handleChangeEmail}
                    handleChangeHomePremium={this.handleChangeHomePremium}
                    handleChangeHorario_Funcionamento={this.handleChangeHorario_Funcionamento}
                    handleChangeHospedagemPremium={this.handleChangeHospedagemPremium}
                    handleChangeLazerPremium={this.handleChangeLazerPremium}
                    handleChangeName={this.handleChangeName}
                    handleChangeNumero={this.handleChangeNumero}
                    handleChangeOndeIrPremium={this.handleChangeOndeIrPremium}
                    handleChangeRua={this.handleChangeRua}
                    handleChangeTelefone={this.handleChangeTelefone}
                    handleChangeTipo={this.handleChangeTipo}
                    handleChangeSite={this.handleChangeSite}
                    />
             
           
            </div>
        )
    }
}

/*criar login, colocar pra upar imagem */