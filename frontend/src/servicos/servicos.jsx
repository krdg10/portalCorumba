import React, { Component } from 'react'
import axios from 'axios'


import Card from '../template/card'

const URL = 'http://localhost:3003/api/posts'



export default class Servicos extends Component {
    constructor(props){
        super(props)
        this.state = {description: '', tipo: '', name: '', list: [] }


        this.refresh()
       
    }

  
   
    refresh(){
        const search = `&tipo=servicos` 
        axios.get(`${URL}?aceito=true&sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description: '', tipo: '', name: '', list: resp.data}))
    }


    render() {
        return (
            <div className='servicos'>
                <br/> 
               
                
                <Card list={this.state.list} />
                
               

              
            </div>
        )
    }
}