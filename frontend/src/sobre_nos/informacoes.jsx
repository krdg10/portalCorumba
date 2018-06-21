import React from 'react'

export default props => (
    <section id="contact">
    
    <div className="container">


     <div className="row">
       <div className="col-sm-6 text-justify fix3">
       <h1 className="page-header">Sobre Nós</h1>
        <p> Este portal de turismo de Corumbá-MS foi desenvolvido por alunos do curso de Sistemas de Informação da Universidade
Federal do Mato Grosso do Sul, Campus Pantanal (UFMS-CPAN). Identificamos a necessidade de um site onde as informações
necessárias para o turistas estejam organizadas e disponibilizadas em apenas um site. O portal tem a intenção de divulgar e
compartilhar informações para o público-alvo de uma maneira adequada e clara, e oferecer o serviço de divulgação para
empresas da região. O site foi desenvolvido no Laboratório de Desenvolvimento de Software do Pantanal (LADESP), que
está localizado na UFMS-CPAN. Os alunos responsáveis são Maria Luiza Mazó, Kelvin Rodrigues, Thiago Pires e José Luis Barboza.</p>
       </div>

        
       <div className="col-sm-6">
       <h1 className="page-header">Fale Conosco</h1>
         <form>

           <div className="form-group">
             <input type="text" className="form-control" id="nome" placeholder="Nome"/>
           </div>

           <div className="form-group">
            
             <input type="email" className="form-control" id="email" placeholder="Email"/>
           </div>

            <div className="form-group">
             
             <textarea type="mensagem" className="form-control" id="comment" placeholder="Mensagem"/>
           </div>
          
           <button type="submit" className="btn btn-outline-dark">Enviar</button>

         </form>
       </div>
  
     </div>

    
   </div>
    
  </section>
)