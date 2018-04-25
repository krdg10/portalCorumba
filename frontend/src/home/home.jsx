import React, { Component } from 'react'
import SectionOne from './sectionOne'
import SectionTwo from './sectionTwo'
import SectionThree from './sectionThree'
import SectionFour from './sectionFour'

export default class Home extends Component {
    
    render() {
        return (
            <div> 
               <SectionOne />
               <SectionTwo />
               <SectionThree />
               <SectionFour />
            </div>
        )
    }
}