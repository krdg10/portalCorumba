import React from 'react'
//colocar pontos turisticos, dentro de lazer passeios, noite, eventos turisticos.
export default props => (
    <div id="botoes_hospedagem" className="text-center">
        <a role="button" className="btn btn-outline-dark" href="#/onde_ir">Principais</a>
        <a role="button" className="btn btn-outline-dark" href="#/pontos_turisticos">Pontos Turísticos</a> 
        
            <a role="button" className="btn btn-outline-dark dropdown-toggle" href=" " data-toggle="dropdown">
                Lazer
            </a>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="#/lazer">Principais</a>
                <a className="dropdown-item" href="#/passeio">Passeios</a>
                <a className="dropdown-item" href="#/noite">Noite</a>
                <a className="dropdown-item" href="#/evento_turistico">Eventos Turisticos</a>
             </div>
         
    </div>
    
) 