import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
export default props => {

    return (
        <div role='form' className='comentarioForm'>
            <Grid cols = '12 9 10'>
               <input id='name' className='form-control'
                    placeholder='Nome'
                    value={props.name} 
                    onChange={props.handleChange2}></input>
                <textarea id='description' className='form-control'
                    placeholder='Descriçao'
                    value={props.description} 
                    onChange={props.handleChange}></textarea>
                <select id="tipo" className='form-control'>
                    <option value="hotel">Hotel</option>
                    <option value="hostel">Hostel</option>
                    <option value="pousada">Pousada</option>
                    <option value="restaurante">Restaurante</option>
                </select>

            </Grid>
    
            <Grid cols ='12 3 2'>
                <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
            </Grid>
        </div>
    )
}
/*
hospedagemPremium: {type: Boolean, default: false},
    name: {type: String},
    rua: {type: String},
    bairro: {type: String},
    numero: {type: String},
    telefone: {type: String},
    email: {type: String},
    cep: {type: String},
    horario_funcionamento: {type: String},
    ondeIrPremium: {type: Boolean, default: false},
    alimentacaoPremium: {type: Boolean, default: false},
    lazerPremium: {type: Boolean, default: false}, 
    homePremium: {type: Boolean},*/