import React, { Component } from 'react'
import axios from 'axios'
import MenuHospedagem from './menuHospedagem'
import Rodape from '../home/sectionFour'


export default class Hospedagem extends Component {

    render() {
        return (
            <div className='hospedagem'> 
                <MenuHospedagem />

                <Rodape />
            </div>
        )
    }
}