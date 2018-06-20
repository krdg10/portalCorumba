
import React from 'react'
import Imagem5 from '../../public/img/ufms.png'
 
 export default props => (  
 
    <footer id="assinatura">
        <div className="container-fluid">
            <div className="row">
              <div className="mx-auto d-block"> 
                <p> Site desenvolvido por: 
                  <img className="ufms" src={Imagem5} alt="UFMS"/> 
                </p>
               </div> 
            </div>
        </div>      

    </footer>
   

 )

 /*      <li className="item-rede-social"><a href="a"><img src={Imagem2} alt="twitter" /></a></li>
              <li className=" item-rede-social"><a href="a"><img src={Imagem3} alt="facebook" /></a></li>
              <li className=" item-rede-social"><a href="a"><img src={Imagem4} alt="instagram" /></a></li>*/
