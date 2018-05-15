
import React from 'react'
import Imagem from '../../public/img/img_avatar1.png'
import { Router, Route, Link, hashHistory } from 'react-router'

export default props => {
    const renderRows = () =>{
        const list = props.list || []
        return list.map(post => (
           
                <span key={post._id} className="display">
                <div className="card" >
                    <img className="card-img-top" src={Imagem} alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">{post.name}</h4>
                        <p className="card-text">{post.description}</p>
                        <Link to={`/${props.tipo}/${post._id}`}>
                            {post.name} - {post.description}
                        </Link>
                    </div>
                </div>
                </span>
           
        ))
    }
    

    return (
       
        <div>
           {renderRows()}
          
        </div>
    )
}

/*
export default props => {
    const renderRows = () =>{
        const list = props.list || []
        return list.map(post => (
           
                <span key={post._id} className="display">
                <div className="card" >
                    <img className="card-img-top" src={Imagem} alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">{post.name}</h4>
                        <p className="card-text">{post.description}</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
                </span>
           
        ))
    }

    return (
       
        <div>
           {renderRows()}
          
        </div>
    )
}

anterior  */
