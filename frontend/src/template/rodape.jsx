
import React from 'react'
import Imagem from '../../public/img/renan.png'
import Imagem2 from '../../public/img/twitter.png'
import Imagem3 from '../../public/img/facebook.png'
import Imagem4 from '../../public/img/instagram.png'
import Imagem5 from '../../public/img/ufms.png'
 
 export default props => (  
  <footer id="rodape">
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
        <li className="item-rede-social"><a href="a"><img src={Imagem2} alt="twitter" /></a></li>
              <li className=" item-rede-social"><a href="a"><img src={Imagem3} alt="facebook" /></a></li>
              <li className=" item-rede-social"><a href="a"><img src={Imagem4} alt="instagram" /></a></li>
        </ul>
      </div>

    </div>
  </div>
  </footer>
 
 )
