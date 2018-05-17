import React from 'react'

export default props => (
    <section id="contact">
    
      
        <div className="col-lg-4 text-left">
          <h2 className="section-heading">Fale Conosco</h2>
          
          <p className="mb-5"> 
            <input type="text" class="form-control" id="usr" placeholder='Nome' />
            <br/>
            <input type="text" class="form-control" id="pwd" placeholder='Email' />
            <br />
            <textarea class="form-control" id="comment" placeholder='Mensagem' rows='3' />
            <br/>
            <button type="button" class="btn btn-outline-secondary">Enviar</button>

          </p>
        </div>
      
    
  </section>
) 

/*
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

      parte do email que tava antes. 
      */

      