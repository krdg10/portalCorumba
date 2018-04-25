import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Home from '../home/home'
import Historia from '../historia/historia'

export default props =>(
    <Router history={hashHistory}>
        <Route path='/home' component={Home}/>
        <Route path='/historia' component={Historia}/>
        <Redirect from='*' to='/home'/>
    </Router>
)