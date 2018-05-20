
import React from 'react'


const img = 'http://localhost:3003/assets/img/'
export default props => {
    const renderRows = () =>{
        const list = props.list || []
        return list.map(post => (
            <div key={post._id} id="texto-info">
                <img height='200' width="200" src={img+post._id+'.png'} alt="Foto"/> - {post.name} - {post.description} - {post.tipo} - {post._id}
                
                
            </div>
        ))
    }
    

    return (
        <div>
           {renderRows()}
          
        </div>
    )
}