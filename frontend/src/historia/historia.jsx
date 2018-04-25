import React, { Component } from 'react'
import axios from 'axios'

import Publicacao from './historiaPubli'
const URL = 'http://localhost:3003/api/posts'


export default class Historia extends Component {
    
    constructor(props){
        super(props)
        this.state = {description: '', tipo: '', list: [] }

        this.refresh()
    }

    refresh(){
      //const search = tipo ? `&tipo=/${tipo}/` : ''
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, description: '', tipo: '', list: resp.data}))
            //.then(resp => this.setState({...this.state, description, list: resp.data}))
    }
  
    render() {
        return (
            <div className='publicacoes'> 
             <Publicacao list={this.state.list} />
            </div>
        )
    }
}