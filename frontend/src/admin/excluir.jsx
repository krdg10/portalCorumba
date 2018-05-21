import React, { Component } from 'react'
import axios from 'axios'



import Card from './card_adm'
const URL = 'http://localhost:3003/api/posts'

export default class Admin_Delete extends Component {
    constructor(props){
        super(props)
        this.state = {description: '', tipo: '', name: '', list: [] }

        this.handleRemove = this.handleRemove.bind(this)
        this.refresh()
       
    }

    handleRemove(post){
       
        axios.delete(`${URL}/?_id=${post._id}`)
            .then(resp => this.refresh())
    }
   
    refresh(){
      
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, description: '', tipo: '', name: '', list: resp.data}))
    }

    render() {
        return (
            <div className='excluir'>
              
                
                <Card list={this.state.list} handleRemove={this.handleRemove} />
               

              
            </div>
        )
    }
}