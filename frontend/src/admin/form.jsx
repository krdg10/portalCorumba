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
                    onChange={props.handleChangeName}></input>
                <textarea id='description' className='form-control'
                    placeholder='Descriçao'
                    value={props.description} 
                    onChange={props.handleChangeDescription}></textarea>
                <select id="tipo" className='form-control' onChange={props.handleChangeTipo} >
                    <option value="hotel">Hotel</option>
                    <option value="hostel">Hostel</option>
                    <option value="pousada">Pousada</option>
                    <option value="restaurante">Restaurante</option>
                    <option value="bar">Bar</option>
                    <option value="lanchonete">Lanchonete</option>
                    <option value="pontos_turisticos">Pontos Turísticos</option>
                    <option value="passeio">Passeio</option>
                    <option value="noite">Noite</option>
                    <option value="evento_turistico">Eventos Turísticos</option>
                </select>
                Hospedagem Premium:
                <div className="form-check-inline">
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="hospedagemPremium" id="hospedagemPremium" value='false' onChange={props.handleChangeHospedagemPremium}/>false
                    </label>
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="hospedagemPremium" id="hospedagemPremium" value='true' onChange={props.handleChangeHospedagemPremium} />true
                    </label>
                </div>
                <br/>
                OndeIr Premium: 
                <div className="form-check-inline">
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="ondeIrPremium" id="ondeIrPremium" value='false' onChange={props.handleChangeOndeIrPremium}/>false
                    </label>
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="ondeIrPremium" id="ondeIrPremium" value='true' onChange={props.handleChangeOndeIrPremium}/>true
                    </label>
                </div>
                <br/>
                
                Alimentacao Premium: 
                <div className="form-check-inline">
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="alimentacaoPremium" id="alimentacaoPremium" value='false' onChange={props.handleChangeAlimentacaoPremium}/>false
                    </label>
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="alimentacaoPremium" id="alimentacaoPremium" value='true' onChange={props.handleChangeAlimentacaoPremium}/>true
                    </label>
                </div>
                <br/>
                Lazer Premium: 
                <div className="form-check-inline">
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="lazerPremium" id="lazerPremium" value='false' onChange={props.handleChangeLazerPremium}/>false
                    </label>
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="lazerPremium" id="lazerPremium" value='true' onChange={props.handleChangeLazerPremium}/>true
                    </label>
                </div>
                <br/>
                Home Premium: 
                <div className="form-check-inline">
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="homePremium" id="homePremium" value='false' onChange={props.handleChangeHomePremium}/>false
                    </label>
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="homePremium" id="homePremium" value='true' onChange={props.handleChangeHomePremium}/>true
                    </label>
                </div>
                <input id='rua' className='form-control'
                    placeholder='Rua'
                    value={props.rua} 
                    onChange={props.handleChangeRua}></input>
                <input id='bairro' className='form-control'
                    placeholder='Bairro'
                    value={props.bairro} 
                    onChange={props.handleChangeBairro}></input>
                <input id='numero' className='form-control'
                    placeholder='Numero'
                    value={props.numero} 
                    onChange={props.handleChangeNumero}></input>
                <input id='cep' className='form-control'
                    placeholder='CEP'
                    value={props.cep} 
                    onChange={props.handleChangeCEP}></input>
                <input id='email' className='form-control'
                    placeholder='Email'
                    value={props.email} 
                    onChange={props.handleChangeEmail}></input>
                <input id='telefone' className='form-control'
                    placeholder='Telefone'
                    value={props.telefone} 
                    onChange={props.handleChangeTelefone}></input>
                <input id='horario_funcionamento' className='form-control'
                    placeholder='Horario de Funcionamento'
                    value={props.horario_funcionamento} 
                    onChange={props.handleChangeHorario_Funcionamento}></input>
                


            </Grid>
    
            <Grid cols ='12 3 2'>
                <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
            </Grid>
        </div>
    )
}
