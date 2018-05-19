import React from 'react'
import Imagem from '../../public/img/renan.png'
import Imagem2 from '../../public/img/twitter.png'
import Imagem3 from '../../public/img/facebook.png'
import Imagem4 from '../../public/img/instagram.png'
import Imagem5 from '../../public/img/ufms.png'

export default props => (
  
  
  <footer id="rodape">
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <img src={Imagem} alt="" className="img-logo mr-3 mt-3 rounded-circle" />
          </div>

          <div className="col-sm-2">
            <h4>SHOW</h4>
            <ul className="nav">
              <li><a href="a">Sobre</a></li>
            </ul>
          </div>

          <div className="col-sm-2">
            <h4>URSO</h4>
            <ul className="nav">
               <li><a href="a">Desenvolvedores</a></li>
            </ul>
          </div>

          <div className="col-sm-2">
            <h4>THINGS</h4>
            <ul className="nav">
              <li><a href="a">Sei lá</a></li>
            </ul>
          </div>

          <div className="col-sm-3">
            <ul className="nav d-flex justify-content-md-end">
              <li className="item-rede-social"><a href="a"><img src={Imagem2} alt="twitter" /></a></li>
              <li className="item-rede-social"><a href="a"><img src={Imagem3} alt="facebook" /></a></li>
              <li className="item-rede-social"><a href="a"><img src={Imagem4} alt="instagram" /></a></li>
              
           </ul>
          </div>

        
        </div>
      </div>
    </footer>

) 



/*

      parte do email que tava antes. 

      <div className="row">
        <div className="col-lg-4 ml-auto text-center">
          <i className="fa fa-phone fa-3x mb-3 sr-contact"></i>
          <p>123-456-6789</p>
        </div>
        <div className="col-lg-4 mr-auto text-center">
          <i className="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
          <p>
            <a href="mailto:your-email@your-domain.com">feedback@startbootstrap.com</a>
          </p>
        </div>
      </div>

      
      parte do kelvin

      <div className="col-lg-4 text-left">
          <h2 className="section-heading">Fale Conosco</h2>
          
          <p className="mb-5"> 
            <input type="text" class="form-control" id="usr" placeholder='Nome'  />
            <br/>
            <input type="text" class="form-control" id="pwd" placeholder='Email' />
            <br />
            <textarea class="form-control" id="comment" placeholder='Mensagem' rows='3' />
            <br/>
            <button type="button" class="btn btn-outline-secondary">Enviar</button>

          </p>
        </div>

        novo footer 

        <div className="rodape">
    <div className="row"> 
       <div className="col-lg-4 text-center mx-auto">
         <h4> Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus </h4>
         <a role="button" className="btn btn-dark" href="#/sobre_nos">Sobre Nós</a>
       </div>
   </div>
 </div>
      
      */

      