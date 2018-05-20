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
              <li><a href="#/sobre_nos">Sobre</a></li>
            </ul>
          </div>

          <div className="col-sm-2">
            <h4>URSO</h4>
            <ul className="nav">
               <li><a href="#">Desenvolvedores</a></li>
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
@@ -44,6 +88,17 @@ export default props => (
 
           </p>
         </div>
+
+        novo footer 
+
+        <div className="rodape">
+    <div className="row"> 
+       <div className="col-lg-4 text-center mx-auto">
+         <h4> Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus </h4>
+         <a role="button" className="btn btn-dark" href="#/sobre_nos">Sobre Nós</a>
+       </div>
+   </div>
+ </div>
       
       */
 