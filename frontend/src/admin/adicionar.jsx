import React, { Component } from 'react'
import axios from 'axios'


const URL = 'http://localhost:3003/api/posts'

import PostForm from './form'

export default class Admin extends Component {
    
    constructor(props){
        super(props)
        this.state = {description: '', tipo: '', name: '', rua: '', cep: '', bairro: '', list: [] }
        

        this.handleChange = this.handleChange.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.refresh()
       
    }

  
   
    handleChange(e){
        this.setState({...this.state, description: e.target.value })
    }
    handleChange2(e){
        this.setState({...this.state, name: e.target.value })
    }
    handleAdd(){
        const description = this.state.description//arrumar forma de passar mais parametros, no caso nome e tipo. Tipo é fixo entao é mais de boa. Quando deixei default na collection deu
        const name = this.state.name
        const tipo = this.state.tipo
        axios.post(URL, {description, name, tipo})
            .then(resp => this.refresh())
    }
    refresh(){
        const tipo = this.tipocomentario
        const search = `&tipo=${tipo}` 
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description: '', tipo: '', name: '', list: resp.data}))
    }

   

    render() {
        return (
            <div className='admin'> 
             <PostForm description={this.state.description} 
                    name={this.state.name}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleChange2={this.handleChange2} />
             
           
            </div>
        )
    }
}