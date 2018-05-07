import React, { Component } from 'react'
import axios from 'axios'


import MenuHospedagem from './menuHospedagem'
import Botoes from './botoes_hospedagem'


export default class Hospedagem extends Component {
   

    render() {
        return (
            <div className='hospedagem'>
                <br/> 
                <Botoes /> 
                <br/>
                
               

              
            </div>
        )
    }
}