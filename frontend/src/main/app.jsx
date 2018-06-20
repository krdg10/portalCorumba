import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/creative.css'
import Menu from '../template/menu'
import Header from '../template/header'
import React from 'react'
import Rodape from '../template/rodape'
import Assinatura from '../template/assinatura'

import Routes from './routes'
//nao colocar conteiner na div
export default props => (
    <div >
        
        <Menu />
        <Header />
        <Routes />
        <Rodape />
        <Assinatura />
    </div>
)