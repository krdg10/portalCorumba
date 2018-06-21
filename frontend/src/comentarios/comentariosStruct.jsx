import React from 'react'
import Imagem from '../../public/img/comentario.png'
export default props => {
    const renderRows = () =>{
        const list = props.list || []
        return list.map(post => {
            const teste = new Date(post.createdAt)
            return (
                <div key={post._id}>
                    <div className="media border p-3">
                        <img src={Imagem} alt="John Doe" className="mr-3 mt-3 rounded-circle" id="imagem_comentario" />
                        <div className="media-body text-left">
                            <h4>{post.name} <small><i>~ Postado em {("0"+ teste.getDate()).slice(-2)+'/'+("0"+(teste.getMonth()+1)).slice(-2)+'/'+teste.getFullYear()} - {("0"+ teste.getHours()).slice(-2)+':'+ ("0"+ teste.getMinutes()).slice(-2)}</i></small></h4>
                            <p>{post.description}</p>
                        </div>
                    </div>    
                </div>
            )
        })
    }

    return (

        <div className="container">
            <div className="row" >
               <div className="col-md-9"> 
            <h3>Comentários</h3>

                 <hr className="coment" />
            {renderRows()}

                </div>
            </div>
        </div> 
    )
}


/*
  { post.createdAt }      
*/
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