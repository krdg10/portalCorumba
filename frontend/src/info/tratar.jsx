import React from 'react'
import ImagemSeis from '../../public/img/portfolio/thumbnails/6.jpg'


const img = 'http://localhost:3003/assets/img/'
export default props => {
    const renderRows = () =>{
        const list = props.list || []
        return list.map(post => (
            
             <div className="container">
                 <div className="row">
                 
                  <div className="col-md-9 tratar mx-auto d-block">
                    <div key={post._id} id="texto-info" className="text-justify">
                    <img className="thumb img-responsive" src={img+post._id+'.png'} alt="Foto"/> 
                        
                        <h3 className="descrip"><strong>{post.name}</strong></h3><br /><br />
                        <p className="descrip"> 
                            Descrição: {post.description} <br />
                            Rua: {post.rua} <br />
                            Bairro: {post.bairro}  <br />
                            Número: {post.numero} <br />
                            CEP: {post.cep} <br />
                            Telefone: {post.telefone} <br />
                            Email: {post.email} <br />
                            Tipo: {post.tipo} <br /> 
                            

                         </p>
                            {post._id} <br /> 
           
                   </div>
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