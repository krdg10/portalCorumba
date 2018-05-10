import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'

export default props => {
    const { params } = this.props;

    if(!params._id) return null;

    return (
      <div>
        <h2>Contact Detail</h2>
       {params.name}
       
      </div>
    );
    
    

}
