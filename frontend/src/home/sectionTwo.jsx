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
              <i className="fas fa-4x fa-bed text-primary mb-3 sr-icons"></i>
              <h3 className="mb-3">Hospedagem</h3>
              <p className="text-muted mb-0">Hotéis, pousadas, hostels</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <i className="fas fa-4x fa-utensils text-primary mb-3 sr-icons"></i>
              <h3 className="mb-3">Alimentação</h3>
              <p className="text-muted mb-0">You can use this theme as is, or you can make changes!</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <i className="fas fa-4x fa-map-signs text-primary mb-3 sr-icons"></i>
              <h3 className="mb-3">Onde ir</h3>
              <p className="text-muted mb-0">We update dependencies to keep things fresh.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <i className="fas fa-4x fa-building text-primary mb-3 sr-icons"></i>
              <h3 className="mb-3">Serviços</h3>
              <p className="text-muted mb-0">You have to make your websites with love these days!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

)