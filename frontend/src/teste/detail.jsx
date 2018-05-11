import React from 'react'


export default props => {
  const renderRows = () =>{
      const list = props.name || []
      return list.map(post => (
        <div>
          {post.name} = {post.description}
        </div>
      ))
  }
  return (
    <div>
     {renderRows()}
    </div>
  )
    

}
