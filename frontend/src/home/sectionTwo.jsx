import React from 'react'

export default props => (

    <section className="servicos" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Ao seu dispor temos</h2>
            <hr className="my-4" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <a className="fas fa-4x fa-bed text-primary mb-3 sr-icons" href="#/hospedagem"></a>
              <h3 className="mb-3">Hospedagem</h3>
              <p className="text-muted mb-0">Hotéis, pousadas, hostels e mais.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <a className="fas fa-4x fa-utensils text-primary mb-3 sr-icons" href='#/alimentacao'></a>
              <h3 className="mb-3">Alimentação</h3>
              <p className="text-muted mb-0">Restaurantes, lanchonetes e outros para todos os tipos de gostos.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <a className="fas fa-4x fa-map-signs text-primary mb-3 sr-icons" href='#/onde_ir'></a>
              <h3 className="mb-3">Onde ir</h3>
              <p className="text-muted mb-0">Locais históricos, de entretenimento e naturais para enriquecer sua experiência.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <i className="fas fa-4x fa-building text-primary mb-3 sr-icons"></i>
              <h3 className="mb-3">Serviços</h3>
              <p className="text-muted mb-0">Informações sobre os serviços locais.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

)