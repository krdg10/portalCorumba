import React from 'react'
import ImagemSeis from '../../public/img/portfolio/thumbnails/6.jpg'


const img = 'http://localhost:3003/assets/img/'
export default props => {
    const renderRows = () =>{
        const list = props.list || []
        return list.map(post => (
            
             <div className="container">
                 <div className="row">
                 
                  <div className="col-md-5 tratar">
                    <div key={post._id} id="texto-info" className="text-justify">
                    <img className="thumb img-fluid" src={img+post._id+'.jpg'} alt="Foto"/> 
                    </div>
                  </div>
                
                    <div className="col-md-4 tratar mx-auto d-block">
                        <h3 className="descrip"><strong>{post.name}</strong></h3><br /><br />
                        <p className="descrip"> 
                            <strong>Descrição:</strong> {post.description} <br />
                            <strong>Rua:</strong> {post.rua} <br />
                            <strong>Bairro:</strong> {post.bairro}  <br />
                            <strong>Número:</strong> {post.numero} <br />
                            <strong>CEP:</strong> {post.cep} <br />
                            <strong>Telefone:</strong> {post.telefone} <br />
                            <strong>Email:</strong> {post.email} <br />
                            Tipo: {post.tipo} <br /> 
                        </p>
                            {post._id} <br /> 
           
                   </div>
                 
                    <div className="col-md-3 square">
                      <h5>Anuncie aqui!</h5>
                        <img className="img-fluid" src={ImagemSeis} alt="" />
                        <img className="img-fluid" src={ImagemSeis} alt="" />
                        <img className="img-fluid" src={ImagemSeis} alt="" />
                        <img className="img-fluid" src={ImagemSeis} alt="" />
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