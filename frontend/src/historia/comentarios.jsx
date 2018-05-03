import React, { Component } from 'react'
import axios from 'axios'


import Comentario from './comentariosStruct'
const URL = 'http://localhost:3003/api/posts'


export default class Historia extends Component {
    
    constructor(props){
        super(props)
        this.state = {description: '', tipo: '', name: '', list: [] }

        this.refresh()
       
    }

  
   
    refresh(){
        const search = `&tipo__regex=histoComentario` 
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description: '', tipo: '', name: '', list: resp.data}))
    }

   

    render() {
        return (
            <div className='comentarios'> 
             <Comentario list={this.state.list} />
           
            </div>
        )
    }
}