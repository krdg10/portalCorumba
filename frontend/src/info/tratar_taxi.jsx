import React from 'react'
import ImagemSeis from '../../public/img/portfolio/thumbnails/6.jpg'


const img = 'http://localhost:3003/assets/img/'
export default props => {
    const renderRows = () =>{
        const list = props.list || []
        return list.map(post => (
            
             <div className="container" key={post._id} >
                 <div className="row">
                 
                  <div className="col-md-5 tratar">
                    <div id="texto-info" className="text-justify">
                    <img className="thumb img-fluid" src={img+post._id+'.png'} alt="Foto"/> 
                    </div>
                  </div>
                
                    <div className="col-md-4 tratar mx-auto d-block">
                        <h3 className="descrip"><strong>{post.name}</strong></h3>
                        <p className="text-justify"> 
                            <strong> {post.horario_funcionamento}</strong><br />
                            <strong> {post.description}</strong><br />
                            <strong> {post.rua} </strong><br />
                            <strong> {post.bairro} </strong> <br />
                            <strong> {post.numero} </strong><br />
                            <strong> {post.cep}</strong> <br />
                            <strong> {post.telefone}</strong> <br />
                            <strong> {post.email}</strong> <br /> 
                        </p>
                            
           
                   </div>
                 
                    <div className="col-md-3 background square">     
                      <h5>Anuncie aqui!</h5>
                 
                        <img className="img-fluid" src={ImagemSeis} alt="Ads" />
                        <img className="img-fluid" src={ImagemSeis} alt="Ads" />
                        <img className="img-fluid" src={ImagemSeis} alt="Ads" />
                        <img className="img-fluid" src={ImagemSeis} alt="Ads" />
                      
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