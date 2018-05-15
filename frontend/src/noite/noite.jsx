import React, { Component } from 'react'
import axios from 'axios'



import Botoes from '../onde_ir/botoes_onde_ir'
import Card from '../template/card'
const URL = 'http://localhost:3003/api/posts'

export default class Noite extends Component {
    constructor(props){
        super(props)
        this.state = {description: '', tipo: '', name: '', list: [] }


        this.refresh()
       
    }

  
   
    refresh(){
        const search = `&tipo=noite` 
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description: '', tipo: '', name: '', list: resp.data}))
    }

    render() {
        return (
            <div className='noite'>
                <br/> 
                <Botoes /> 
                <br/>
                <Card tipo="noite" list={this.state.list} />
               

              
            </div>
        )
    }
}