import React, { Component } from 'react'
import axios from 'axios'
import Botoes from './botoes_onde_ir'

import Card from '../template/card'

const URL = 'http://localhost:3003/api/posts'


export default class Onde_Ir extends Component {
    constructor(props){
        super(props)
        this.state = {description: '', tipo: '', name: '', list: [] }


        this.refresh()
       
    }

  
   
    refresh(){
        const search = `&ondeIrPremium=true` 
        axios.get(`${URL}?aceito=true&sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description: '', tipo: '', name: '', list: resp.data}))
    }


    render() {
        return (
            <div className='onde_ir'> 
                <br />
                <Botoes />
                <br />
                <Card list={this.state.list} />
            </div>
        )
    }
}