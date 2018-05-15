
import React from 'react'



export default props => {
    const renderRows = () =>{
        const list = props.list || []
        return list.map(post => (
           
               <div key={post._id}>
                          {post._id} -  {post.name} - {post.description} - {post.tipo}</div>
                      
           
        ))
    }
    

    return (
       
        <div>
           {renderRows()}
          
        </div>
    )
}