
import React from 'react'

 
 export default props => (  
 
 <footer id="rodape" className="background">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-2 d-flex justify-content-md-end ">
        <span className="img-logo"></span>
      </div>

      <div className="col-md-2 ">
        <h4>Mapa do Site</h4>
        <ul>
        <li><a href="#/sobre_nos">Sobre Nós | Contato</a></li>
          <li><a href="#/historia">História da Cidade</a></li>
          <li><a href="#/hospedagem">Hospedagem</a></li>
          <li><a href="#/alimentacao">Alimentação</a></li>
          <li><a href="#/onde_ir">Onde ir</a></li>
        </ul>
      </div>

      <div className="col-md-2 ">
        <h4>Comunidades</h4>
        <ul>
           
          <li><a href="a">Desenvolvedores</a></li>
        </ul>
      </div>

      <div className="col-md-2 ">
        <h4>Links Úteis</h4>
        <ul>
          <li><a href="a">Ajuda</a></li>
        </ul>
      </div>

      <div className="col-md-4">
        <ul className="nav d-flex justify-content-md-start">
        <li className="item-rede-social"><a href="https://twitter.com/CorumbaPortal" className="fa fa-twitter" alt="twitter"></a></li>
              <li className=" item-rede-social"><a href="https://www.facebook.com/Portal-Turismo-Corumba-192325484939619/" className="fa fa-facebook" alt="facebook" ></a></li>
              <li className=" item-rede-social"><a href="https://www.instagram.com/ptrcba/?hl=pt-br" className="fa fa-instagram"alt="instagram" ></a></li>
        </ul>
      </div>
      
    </div>


  </div>

  </footer>
   
 
 )

 /*      <li className="item-rede-social"><a href="a"><img src={Imagem2} alt="twitter" /></a></li>
              <li className=" item-rede-social"><a href="a"><img src={Imagem3} alt="facebook" /></a></li>
              <li className=" item-rede-social"><a href="a"><img src={Imagem4} alt="instagram" /></a></li>*/
