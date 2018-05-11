import React, { Component } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

export default class HotelDetail extends Component {
    
    render() {
        const { params } = this.props;
    
        if(!params.id) return null;
        console.log(params)
    
        return (
          <div>
            <h2>{params.id}</h2>
            <Link to='/teste'>List all contacts</Link>
          </div>
        );
      }
}