
import React from 'react'


const img = 'http://localhost:3003/assets/img/'
export default props => {
    const renderRows = () =>{
        const list = props.list || []
        return list.map(post => (
            <div key={post._id}>
                <img height='200' src={img+post._id+'.jpg'} alt="Foto" className="img-fluid" />
                {post.name} - {post.description} - {post.tipo} - {post._id}</div>
                      
           
        ))
    }
    

    return (
       
        <div>
           {renderRows()}
          
        </div>
    )
}