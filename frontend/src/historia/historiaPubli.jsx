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
        
       <div className="container" id="historia">
            <div className="row"> 
                <div className="col-lg-10 text-justify align-center">
                    <h2>História de Corumbá</h2>

                     {renderRows()}

                    <p>Lorem ipsum nullam etiam ultrices aliquam donec nibh lacus, praesent sollicitudin porta curabitur lobortis placerat turpis semper, class ligula suscipit neque vitae lorem maecenas. varius morbi semper lobortis volutpat porta aenean viverra libero est, primis fames porttitor feugiat viverra aenean sagittis vehicula donec ligula, lobortis conubia platea arcu donec quisque tristique consequat. vitae lacinia ultricies luctus dui leo quis donec malesuada dictum, felis morbi vulputate mi fringilla lobortis ut quam venenatis torquent, potenti erat ac quam netus quis turpis hac. aliquam ligula nam venenatis viverra non velit accumsan habitasse feugiat malesuada curae dictumst, auctor quisque congue fusce orci nulla dolor sodales varius purus aptent. 
</p>        
                </div>
            </div>
        </div>
)
}
        
/*<table className='table' id="historia">
<thead>
    <tr>
        <th>Publicações</th>
    </tr>
</thead>
<tbody>
    {renderRows()}
</tbody>
</table>*/