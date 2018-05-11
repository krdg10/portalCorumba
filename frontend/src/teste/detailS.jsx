import React, { Component } from 'react'
import axios from 'axios'
import Detail from './detail'

const URL = 'http://localhost:3003/api/posts'


export default class Historia2 extends Component {
     constructor(props){
        super(props)
        this.state = {description: '', tipo: '', list: [] }

        this.refresh_publi()
       
    }

  
   
    refresh_publi(){
        const search = `&tipo__regex=hotel` 
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description: 'aaaa', tipo: '', list: resp.data})) 
        
    }
   
    render() {
        return (
            <div>
                
            <Detail name={this.state.list} description={this.state.description} />
            </div>
        )
    }
}