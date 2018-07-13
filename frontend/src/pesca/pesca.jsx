import React, { Component } from 'react'
import axios from 'axios'


import Card from '../template/card'

const URL = 'http://localhost:3003/api/posts'



export default class Pesca extends Component {
    constructor(props){
        super(props)
        this.state = {description: '', tipo: '', name: '', pesca: '', list: [] }


        this.refresh()
       
    }

  
   
    refresh(){
        const search = `&pesca=true` 
        axios.get(`${URL}?aceito=true&sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description: '', tipo: '', name: '', pesca: '', list: resp.data}))
    }


    render() {
        return (
            <div className='pesca'>
                <br/> 
               
                
                <Card list={this.state.list} />
                
               

              
            </div>
        )
    }
}