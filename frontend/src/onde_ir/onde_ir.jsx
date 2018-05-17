import React, { Component } from 'react'
import axios from 'axios'
import Botoes from './botoes_onde_ir'



export default class Onde_Ir extends Component {

    render() {
        return (
            <div className='onde_ir'> 
                <br />
                <Botoes />
        
            </div>
        )
    }
}