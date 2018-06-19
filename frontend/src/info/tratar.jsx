import React from 'react'


const img = 'http://localhost:3003/assets/img/'
export default props => {
    const renderRows = () =>{
        const list = props.list || []
        return list.map(post => (
            
             <div className="container">
                 <div className="row">
                    <div key={post._id} id="texto-info" className="col-md-10 text-justify">
                    <img height='200' width="200" src={img+post._id+'.png'} alt="Foto"/>  <br />
                    Nome: {post.name}  <br />
                    Descrição: {post.description} <br />
                    Rua: {post.rua} <br />
                    Bairro: {post.bairro}  <br />
                    Numero: {post.numero} <br />
                    CEP: {post.cep} <br />
                    Telefone: {post.telefone} <br />
                    Email: {post.email} <br />
                    Tipo: {post.tipo} <br />
                    {post._id} <br />
                
           

                   </div>
                </div>  
            </div>
        ))
    }
    

    return (
       
    
            <div>
           {renderRows()}
            </div>
        
           
     
    )
}