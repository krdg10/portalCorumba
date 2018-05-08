import React, { Component } from 'react'
import axios from 'axios'

import Card from '../hotel/card'
const URL = 'http://localhost:3003/api/posts'

export default class Alimentacao extends Component {
    constructor(props){
        super(props)
        this.state = {description: '', tipo: '', name: '', list: [] }


        this.refresh()
       
    }

  
   
    refresh(){
        const search = `&tipo__regex=alimentacao` 
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description: '', tipo: '', name: '', list: resp.data}))
    }

    render() {
        return (
            <div className='alimentacao'>
                <br/> 
               
                <Card list={this.state.list} />
               

              
            </div>
        )
    }
}