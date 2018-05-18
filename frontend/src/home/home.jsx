import React, { Component } from 'react'
import axios from 'axios'

import SectionOne from './sectionOne'
import SectionTwo from './sectionTwo'
import SectionThree from './sectionThree'

const URL = 'http://localhost:3003/api/posts'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {description: '', tipo: '', name: '', list: [] }


        this.refresh()
       
    }

  
   
    refresh(){
        const search = `&homePremium=true` 
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description: '', tipo: '', name: '', list: resp.data}))
    }

    render() {
        return (
            <div> 
               <SectionOne list={this.state.list} />
               <SectionTwo />
               <SectionThree />
               
            </div>
        )
    }
}