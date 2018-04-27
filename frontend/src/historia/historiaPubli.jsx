import React from 'react'


export default props => {
    const renderRows = () =>{
        const list = props.list || []
        return list.map(post => (
            <tr key={post._id}>
                <td>{post.description}</td>
            </tr>
        ))
    }
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Publicações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

