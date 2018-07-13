import React from 'react'

export default props => (
    
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#/home">Portal de Turismo Corumbá</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#/historia">História</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#/hospedagem">Hospedagem</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#/alimentacao">Alimentação</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#/onde_ir">Onde ir</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#/servicos">Serviços</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#/pesca">Pesca</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#adicionar_infos">Inserir Informações</a>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
)