import React, { Component } from 'react'
import axios from 'axios'

import Botoes from './botoes'
import Card from '../template/card'
const URL = 'http://localhost:3003/api/posts'

export default class Alimentacao extends Component {
    constructor(props){
        super(props)
        this.state = {description: '', tipo: '', name: '', list: [] }


        this.refresh()
       
    }

  
   
    refresh(){
        const search = `&alimentacaoPremium=true` 
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description: '', tipo: '', name: '', list: resp.data}))
    }

    render() {
        return (
            <div className='alimentacao'>
                <br/> 
                <Botoes />
                <Card list={this.state.list} />
                <br />
               

              
            </div>
        )
    }
}