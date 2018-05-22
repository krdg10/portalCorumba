import React, { Component } from 'react'
import axios from 'axios'
import { Router, Route, Link, hashHistory } from 'react-router'


import Card from './card_adm'
const URL = 'http://localhost:3003/api/posts'

export default class Admin_Delete extends Component {
    constructor(props){
        super(props)
        this.state = {description: '', tipo: '', name: '', list: [] }

        this.handleRemove = this.handleRemove.bind(this)
        this.handleChangeTipo = this.handleChangeTipo.bind(this)
        this.refresh()
        this.refresh = this.refresh.bind(this)
       
    }

    handleRemove(post){
       
        axios.delete(`${URL}/?_id=${post._id}`)
            .then(resp => this.refresh())
    }
    handleChangeTipo(e){
        this.setState({...this.state, tipo: e.target.value })
        
    }
   
    refresh(){
        const tipo = this.state.tipo
        const search = `&tipo=${tipo}` 
        if(tipo==''){
            axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, description: '', tipo: '', name: '', list: resp.data}))
        }
        else{
            axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description: '', tipo: '', name: '', list: resp.data}))
        }
        
       
    }

    render() {
        return (
            <div className='excluir'>
                <Link to={`/admin`}>
                Adicionar registros
                </Link>
                
                
                <Card list={this.state.list} handleRemove={this.handleRemove} handleChangeTipo={this.handleChangeTipo} refresh={this.refresh} />
               

              
            </div>
        )
    }
}