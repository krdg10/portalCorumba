import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Home from '../home/home'
import Historia from '../historia/historia'
import Hospedagem from '../hospedagem/hospedagem'
import Alimentacao from '../alimentacao/alimentacao'
import Onde_Ir from '../onde_ir/onde_ir'
import Hotel from '../hotel/hotel'
import Pousada from '../pousada/pousada'
import Hostel from '../hostel/hostel'
import Teste from '../teste/hotel'
import Detail from '../info/info'
import Lazer from '../lazer/lazer'
import Noite from '../noite/noite'
import Bar from '../bar/bar'
import Restaurante from '../restaurante/restaurante'
import Lanchonente from '../lanchonete/lanchonete'
import PontosTuristicos from '../pontosTuristicos/pontosTuristicos'
import Passeio from '../passeio/passeio'
import EventoTuristico from '../eventos_turisticos/eventos_turisticos'
import SobreNos from '../sobre_nos/sobre_nos'
export default props =>(
    <Router history={hashHistory}>
        <Route path='/home' component={Home}/>
        <Route path='/historia' component={Historia}/>
        <Route path='/hospedagem' component={Hospedagem} />
        <Route path='/alimentacao' component={Alimentacao} />
        <Route path='/onde_ir' component={Onde_Ir} />
        <Route path='/hotel' component={Hotel} />
        <Route path='/pousada' component={Pousada} />
        <Route path='/hostel' component={Hostel} />
        <Route path='/teste' component={Teste} />
        <Route path='/hotel/:id' component={Detail} />
        <Route path='/teste/:id' component={Detail} />
        <Route path='/lazer' component={Lazer} />
        <Route path='/lazer/:id' component={Detail} />
        <Route path='/hostel/:id' component={Detail} />
        <Route path='/pousada/:id' component={Detail} />
        <Route path='/noite' component={Noite} />
        <Route path='/noite/:id' component={Detail} />
        <Route path='/alimentacao/:id' component={Detail} />
        <Route path='/bar' component={Bar} />
        <Route path='/bar/:id' component={Detail} />
        <Route path='/restaurante' component={Restaurante} />
        <Route path='/lanchonete' component={Lanchonente} />
        <Route path='/lanchonete/:id' component={Detail} />
        <Route path='/restaurante/:id' component={Detail} />
        <Route path='/pontos_turisticos' component={PontosTuristicos} />
        <Route path='/pontos_turisticos/:id' component={Detail} />
        <Route path='/passeio' component={Passeio} />
        <Route path='/passeio/:id' component={Detail} />
        <Route path='/evento_turistico' component={EventoTuristico} />
        <Route path='/evento_turistico/:id' component={Detail} />
        <Route path='/sobre_nos' component={SobreNos} />
        <Redirect from='*' to='/home'/>
    </Router>
)