import React from 'react'

export default props => (
    <section id="contact">
    
    <div className="container">
     <h1 className="page-header">Sobre Nós</h1>

     <div className="row">
       <div className="col-sm-6 text-justify">
        <p> Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum. Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
       </div>

        
       <div className="col-sm-6">
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