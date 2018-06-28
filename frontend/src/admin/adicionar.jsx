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
        alimentacaoPremium: '', lazerPremium: '', homePremium: '', site: '', pesca: '', 
        imagemOne: '', imagemTwo: '', imagemThree: '', imagemFour: '',
        imagemFive: '', id: '', list: [] }
        

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
        this.handleChangePesca = this.handleChangePesca.bind(this)
        this.handleChangeImagemOne = this.handleChangeImagemOne.bind(this)
        this.handleChangeImagemTwo = this.handleChangeImagemTwo.bind(this)
        this.handleChangeImagemThree = this.handleChangeImagemThree.bind(this)
        this.handleChangeImagemFour = this.handleChangeImagemFour.bind(this)
        this.handleChangeImagemFive = this.handleChangeImagemFive.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.sendImage = this.sendImage.bind(this)
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
    handleChangePesca(e){
        this.setState({...this.state, pesca: e.target.value })
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
    handleChangeImagemOne(e){
        this.setState({...this.state, imagemOne: e.target.value })
    }
    handleChangeImagemTwo(e){
        this.setState({...this.state, imagemTwo: e.target.value })
    }
    handleChangeImagemThree(e){
        this.setState({...this.state, imagemThree: e.target.value })
    }
    handleChangeImagemFour(e){
        this.setState({...this.state, imagemFour: e.target.value })
    }
    handleChangeImagemFive(e){
        this.setState({...this.state, imagemFive: e.target.value })
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
        const pesca = this.state.pesca
        const imagemOne = this.state.imagemOne.replace("C:\\fakepath\\", "")//  Date.now()+'.png' salvar assim no bd e mandar com esse nome pro back pra evitar repetição. Tem que mandar o nome do arquivo assim pro back tbm, n so mudar no bd
        const imagemTwo = this.state.imagemTwo.replace("C:\\fakepath\\", "")
        const imagemThree = this.state.imagemThree.replace("C:\\fakepath\\", "")
        const imagemFour = this.state.imagemFour.replace("C:\\fakepath\\", "")
        const imagemFive = this.state.imagemFive.replace("C:\\fakepath\\", "")

     
        console.log(imagemOne)
        console.log(imagemTwo)
        console.log(imagemThree)
        console.log(imagemFour)
        console.log(imagemFive)

        axios.post(URL, {description, name, tipo, hospedagemPremium, rua, 
        cep, bairro, numero, email, telefone,
        horario_funcionamento, ondeIrPremium, alimentacaoPremium, lazerPremium,
        homePremium, site, pesca, imagemOne, imagemTwo, imagemThree, imagemFour, imagemFive})
            .then(resp => this.refresh(resp.data))
       
            
    }
    refresh(help){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, description: '', tipo: '', name: '', rua: '', 
            cep: '', bairro: '', numero: '', email: '', 
            telefone: '', horario_funcionamento: '', hospedagemPremium: '', ondeIrPremium: '', 
            alimentacaoPremium: '', lazerPremium: '', homePremium: '', site: '', 
            pesca: '', imagemOne:'', imagemTwo:'', imagemThree:'', imagemFour:'', imagemFive:'', list: resp.data})) 
        this.state.id = help
        console.log(this.state.id)
    }
    sendImage(event) {
        
        const URL = "http://localhost:3003/file"
        var bodyFormData = new FormData();
        bodyFormData.set('imagem', event.target.files[0]);
        //console.log(this.state.id)
        //console.log('chegou')
        // console.log(event.target.files[0])
        //console.log(bodyFormData)
        axios({
            method: 'post',
            url: URL,
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (resp) {
            //handle success
            console.log(resp)
          
        })
        .catch(function (err) {
            //handle error
            console.log(err);
        });
    
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
                    pesca={this.state.pesca}
                    imagemOne={this.state.imagemOne}
                    imagemTwo={this.state.imagemTwo}
                    imagemThree={this.state.imagemThree}
                    imagemFour={this.state.imagemFour}
                    imagemFive={this.state.imagemFive}
                    id={this.state.id}

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
                    handleChangePesca={this.handleChangePesca}
                    handleChangeImagemOne={this.handleChangeImagemOne}
                    handleChangeImagemTwo={this.handleChangeImagemTwo}
                    handleChangeImagemThree={this.handleChangeImagemThree}
                    handleChangeImagemFour={this.handleChangeImagemFour}
                    handleChangeImagemFive={this.handleChangeImagemFive}
                    sendImage={this.sendImage}
                   
                    />
             
           
            </div>
        )
    }
}

/*criar login, colocar pra upar imagem */