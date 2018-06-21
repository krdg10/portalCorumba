import React, { Component } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import axios from 'axios'
import Hospedagem from '../hospedagem/botoes_hospedagem'
import OndeIr from '../onde_ir/botoes_onde_ir'
import Alimentacao from '../alimentacao/botoes'
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
    if(this.props.params.tipo=='hotel' || this.props.params.tipo=='hostel' || this.props.params.tipo=='pousada'){
      return (
        <div className="margin-left">
         <br/> 
          <Hospedagem />
          <br/> 
          <Tratar list={this.state.list} />
          <Comentario tipocomentario={this.props.params.id} />
        </div>
      );
    }
    else if(this.props.params.tipo=='restaurante' || this.props.params.tipo=='bar' || this.props.params.tipo=='lanchonete'){
      return (
        <div className="margin-left">
         <br/> 
          <Alimentacao />
          <br/> 
          <Tratar list={this.state.list} />
          <Comentario tipocomentario={this.props.params.id} />
        </div>
      );
    }
    else if(this.props.params.tipo=='noite' || this.props.params.tipo=='passeio' || this.props.params.tipo=='pontos_turisticos' || this.props.params.tipo=='evento_turistico'){
      return (
        <div className="margin-left">
         <br/> 
          <OndeIr />
          <br/> 
          <Tratar list={this.state.list} />
          <Comentario tipocomentario={this.props.params.id} />
        </div>
      );
    }
    return null;
  }
}