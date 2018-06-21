import React from 'react'

import ImagemSeis from '../../public/img/portfolio/thumbnails/6.jpg'


export default props => {
    const renderRows = () =>{
        const img = "http://localhost:3003/assets/img/" // imagens tem que ser salvas no pubic do backend com o id dos posts que elas pertencem e em jpg. Ai da pra chamar de boa. So nao sei se da pra fazer o upload da mesma forma, tipo salvar no public do backend e tal. Na minha cabeça teria que usar o public do front
        const list = props.list || []
        return list.map(post => (
            <div key={post._id}>
                <figure className="figure fix2">
                    <img src={img+post.name+'1'+'.png'}  className="histimg" />
                </figure>
                <h2>{post.name} Corumbá</h2>
                <hr className="coment" />
                <p> {post.description} </p>

                <figure className="figure fix2">
                    <img src={img+post.name+'2'+'.png'}  className="histimg" />
                </figure>
                <figure className="figure fix2">
                    <img src={img+post.name+'3'+'.png'}  className="histimg" />
                </figure>
                <figure className="figure fix2">
                    <img src={img+post.name+'4'+'.png'}  className="histimg" />
                </figure>
                <figure className="figure fix2">
                    <img src={img+post.name+'5'+'.png'}  className="histimg" />
                </figure>
            </div>
        ))
    }
   
    return (
        
        <div className="container" id="historia">
            <div className="row"> 
                <div className="col-md-9 text-justify">
                   
                    {renderRows()}
                    
                </div>
                
           
                <div className="col-md-3 background squarehist">     
                      <h5>Anuncie aqui!</h5>
                        <img className="img-fluid" src={ImagemSeis} alt="Ads" />
                        <img className="img-fluid" src={ImagemSeis} alt="Ads" />
                        <img className="img-fluid" src={ImagemSeis} alt="Ads" />
                        <img className="img-fluid" src={ImagemSeis} alt="Ads" />
                      
                </div>
            </div>
        </div>
)
}