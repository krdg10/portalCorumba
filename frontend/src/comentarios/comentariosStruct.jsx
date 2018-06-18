import React from 'react'
import Imagem from '../../public/img/comentario.png'
export default props => {
    const renderRows = () =>{
        const list = props.list || []
        return list.map(post => {
            const teste = new Date(post.createdAt)
            return (
                <tr key={post._id}>
                    <td>
                    { post.createdAt }         
                    <div className="media border p-3">
                        <img src={Imagem} alt="John Doe" className="mr-3 mt-3 rounded-circle" id="imagem_comentario" />
                        <div className="media-body text-left">
                            <h4>{post.name} <small><i>Postado em {teste.getDate()+'/'+(teste.getMonth()+1)+'/'+teste.getFullYear()} {teste.getHours()+':'+teste.getMinutes()}</i></small></h4>
                            <p>{post.description}</p>
                        
                        </div>
                    </div>
                    </td>
                </tr>
            )
        })
    }

    return (

        <div className="container">
            <div className="row" >
               <div className="col-md-10"> 
            <h3>Comentários</h3>

                 <hr className="coment" />
            {renderRows()}

                </div>
            </div>
        </div> 
    )
}

/*<table className='table'>
            <thead>
                <tr>
                    <th>Comentarios</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table> */