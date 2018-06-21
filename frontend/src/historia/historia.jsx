import React, { Component } from 'react'
import axios from 'axios'

import Publicacao from './historiaPubli'
import Comentario from '../comentarios/comentarios'
const URL = 'http://localhost:3003/api/posts'


export default class Historia extends Component {
    
    constructor(props){
        super(props)
        this.state = {description: '', tipo: '', list: [] }

        this.refresh_publi()
       
    }

  
   
    refresh_publi(){
        const search = `&tipo__regex=historia` 
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description: '', tipo: '', list: resp.data}))
    }

   

    render() {
        return (
            <div id="historia" className='publicacoes'> 
            <left> <Publicacao list={this.state.list} /></left>
            </div>
        )
    }
}