import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
export default props => {

    return (

        
        <div role='form' className='comentarioForm'>
            <div className="container">
              <div className="row">
                <div className="col-md-10">
                   <h3 className="teste"> Deixe seu comentário! </h3>
                   <div className="form-group">
                     <input id='name' className='form-control'
                      placeholder='Nome'
                      value={props.name} 
                       onChange={props.handleChange2}></input>
                    </div>
             
                    <div className="form-group">
                     <textarea id='description' className='form-control'
                       placeholder='Adicione um comentário'
                      value={props.description} 
                       onChange={props.handleChange}></textarea>
                    
                      </div> 
                 
                      <button type="submit" className="btn btn-outline-dark mx-auto d-block" onClick={props.handleAdd}>Enviar</button>
            
                </div>
             </div>
            </div>
        </div>
    )
}

//mx-auto d-block centraliza
// <button className="btn btn-outline-dark" onClick={props.handleAdd}>Enviar</button>
//<Grid cols ='12 3 2'>
               
//</Grid>