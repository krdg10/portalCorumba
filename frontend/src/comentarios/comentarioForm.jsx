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
                    placeholder='Adicione um comentário'
                    value={props.description} 
                    onChange={props.handleChange}></textarea>

            </Grid>
    
            <Grid cols ='12 3 2'>
                <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
            </Grid>
        </div>
    )
}