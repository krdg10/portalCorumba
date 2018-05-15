import React from 'react'
import Imagem from '../../public/img/comentario.png'
export default props => {
    const renderRows = () =>{
        const list = props.list || []
        return list.map(post => (
            <tr key={post._id}>
                <td>
                <div className="media border p-3">
                    <img src={Imagem} alt="John Doe" className="mr-3 mt-3 rounded-circle" id="imagem_comentario" />
                    <div className="media-body">
                        <h4>{post.name} <small><i>Postado em {post.createdAt}</i></small></h4>
                        <p>{post.description}</p>
                    </div>
                </div>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Comentarios</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}