import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
export default props => {

    return (

        
        <div role='form' className='comentarioForm'>
            <div className="container">
             
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
                    <span className="align-middle">
                    <button className="btn btn-outline-dark" onClick={props.handleAdd}>Enviar</button>
                    </span>
                </div>
            
            </div>
    
          
        </div>
    )
}

//<Grid cols ='12 3 2'>
               
//</Grid>