import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Home from '../home/home'
import Historia from '../historia/historia'
import Informacoes from '../informacoes/informacoes'
import Hospedagem from '../hospedagem/hospedagem'
import Alimentacao from '../alimentacao/alimentacao'
import Onde_Ir from '../onde_ir/onde_ir'
import Hotel from '../hotel/hotel'
import Pousada from '../pousada/pousada'
import Hostel from '../hostel/hostel'
import Teste from '../teste/hotel'
import Detail from '../info/info'
export default props =>(
    <Router history={hashHistory}>
        <Route path='/home' component={Home}/>
        <Route path='/historia' component={Historia}/>
        <Route path='/informacoes' component={Informacoes} />
        <Route path='/hospedagem' component={Hospedagem} />
        <Route path='/alimentacao' component={Alimentacao} />
        <Route path='/onde_ir' component={Onde_Ir} />
        <Route path='/hotel' component={Hotel} />
        <Route path='/pousada' component={Pousada} />
        <Route path='/hostel' component={Hostel} />
        <Route path='/teste' component={Teste} />
        <Route path='/hotel/:id' component={Detail} />
        <Route path='/teste/:id' component={Detail} />

        <Redirect from='*' to='/home'/>
    </Router>
)