import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Home from '../home/home'
import Historia from '../historia/historia'
import Informacoes from '../informacoes/informacoes'
import Hospedagem from '../hospedagem/hospedagem'
import Alimentacao from '../alimentacao/alimentacao'
import Onde_Ir from '../onde_ir/onde_ir'

export default props =>(
    <Router history={hashHistory}>
        <Route path='/home' component={Home}/>
        <Route path='/historia' component={Historia}/>
        <Route path='/informacoes' component={Informacoes} />
        <Route path='/hospedagem' component={Hospedagem} />
        <Route path='/alimentacao' component={Alimentacao} />
        <Route path='/onde_ir' component={Onde_Ir} />
        <Redirect from='*' to='/home'/>
    </Router>
)