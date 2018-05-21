
import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import IconButton from '../template/iconButton'

export default props => {
    const renderRows = () =>{
        const img = "http://localhost:3003/assets/img/" // imagens tem que ser salvas no pubic do backend com o id dos posts que elas pertencem e em jpg. Ai da pra chamar de boa. So nao sei se da pra fazer o upload da mesma forma, tipo salvar no public do backend e tal. Na minha cabeça teria que usar o public do front
        const list = props.list || []
        return list.map(post => (
           
                <span key={post._id} className="display">
                <div className="card" >
                    <Link to={`/${post.tipo}/${post._id}`}>
                       <img className="card-img-top img-thumbnail img-fluid"  alt="Card image" />
                    </Link>
                    <div className="card-body">
                        <Link to={`/${post.tipo}/${post._id}`}>
                          <h4 className="card-title">{post.name}</h4>
                        </Link>
                        <p className="card-text"></p>
                        <IconButton style='primary' icon='plus' onClick={() => props.handleRemove(post)}></IconButton>

                    </div>
                </div>
                </span>
           
        ))
    }
   

    return (
       
        <div>
           {renderRows()}
          
        </div>
    )
}

/*no onclick do icon remove ver se da pra passar só o id e nao todo o objeto */