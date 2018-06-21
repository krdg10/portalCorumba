import React from 'react'

export default props => (

    <section className="servicos" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Ao seu dispor</h2>
            <hr className="my-4" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <a className="fas fa-4x fa-bed mb-3 sr-icons" href="#/hospedagem"></a>
              <h3 className="mb-3">Hospedagem</h3>
              <p className="text-muted mb-0 text-justify">Corumbá conta com uma variedades de hotéis, de todos os preços e tipos, como hotéis-fazendas, barco hotel,
pousadas, hostel e muito mais. Encontre o que mais combina com você e agende sua reserva, aproveite a estadia.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <a className="fas fa-4x fa-utensils  mb-3 sr-icons" href='#/alimentacao'></a>
              <h3 className="mb-3">Alimentação</h3>
              <p className="text-muted mb-0 text-justify">A tradicional comida pantaneira pode ser encontrada em vários restaurantes da cidade. Comidas tipicas, caseiras, lanches,
pizzarias, bares e sorveterias também podem ser encontrados. Escolha o sabor que mais te agrade e venha provar da culinária regional.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <a className="fas fa-4x fa-map-signs mb-3 sr-icons" href='#/onde_ir'></a>
              <h3 className="mb-3">Onde ir</h3>
              <p className="text-muted mb-0 text-justify">A cidade conta com diversos estilos de passeios, desde ecológicos e naturais, histórico, eventos típicos e muita cultura.
Venham conhecer o pantanal sul-mato-grossense, e prestigie os principais eventos que ocorrem na cidade.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <a className="fas fa-4x fa-building mb-3 sr-icons" href='#/servicos'></a>
              <h3 className="mb-3">Serviços</h3>
              <p className="text-muted mb-0 text-justify">Ao chegar na cidade você pode precisar de alguns serviços, aqui voce encontra os serviços essenciais disponiveis na cidade.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

)