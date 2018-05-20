import React, { Component } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import axios from 'axios'

import Tratar from './tratar'
import Comentario from '../comentarios/comentarios'
const URL = 'http://localhost:3003/api/posts'

export default class Detail extends Component {
  constructor(props){
    
    super(props)
    this.state = {description: '', tipo: '', name: '', list: [] }
    
    this.refresh()
   
  } 
  refresh(){
    
    const search = `&_id=${this.props.params.id}`
    axios.get(`${URL}?sort=-createdAt${search}`)
        .then(resp => this.setState({...this.state, description: '', tipo: '', name: '', list: resp.data}))

   
}

  render() { 
    if(!this.props.params.id) return null;
    return (
      <div className="margin-left">
        <Tratar list={this.state.list} />
        <Link to='/hospedagem'>Voltar para Hospedagem</Link>
        <Comentario tipocomentario={this.props.params.id} />
      </div>
    );
  }
}