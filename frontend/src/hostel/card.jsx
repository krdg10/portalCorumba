import React from 'react'
import Imagem from '../../public/img/img_avatar1.png'

export default props => {
    const renderRows = () =>{
        const list = props.list || []
        return list.map(post => (
           
                <td key={post._id}>
                <div className="card" >
                    <img className="card-img-top" src={Imagem} alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">{post.name}</h4>
                        <p className="card-text">{post.description}</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
                </td>
           
        ))
    }

    return (
       
        <table className='table'>
            <thead>
              
            </thead>
            <tbody>
            <tr>
                {renderRows()}
            </tr>
            </tbody>
        </table>
    )
}
