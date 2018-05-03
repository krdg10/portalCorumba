import React, { Component } from 'react'
import axios from 'axios'

import Publicacao from './historiaPubli'
import Comentario from './comentarios'
const URL = 'http://localhost:3003/api/posts'


export default class Historia extends Component {
    
    constructor(props){
        super(props)
        this.state = {description: '', tipo: '', list: [] }

        this.refresh_publi()
       
    }

  /*  refresh(){
        const search = tipo?`&tipo__regex=historia` : '' //isso aqui ta errado pq tipo recebe ou aquilo ali ou vazio. Ai como nao tem uma tag/variavel num possivel form definindo tipo dá bo e pq nesse caso nunca vai ser vazio tbm
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, tipo, list: resp.data})) //description e tipo tem que ter valor atribuido
    }*/
   
    refresh_publi(){
        const search = `&tipo__regex=historia` 
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description: '', tipo: '', list: resp.data}))
    }

   

    render() {
        return (
            <div className='publicacoes'> 
             <Publicacao list={this.state.list} />
             <Comentario />
            </div>
        )
    }
}