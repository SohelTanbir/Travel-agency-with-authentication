import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
           <div className="container">
               <div className="row">
                   <div className="col-md-2">
                       <div className="brand">
                           <Link to="/home">Travel Agency</Link>
                       </div>
                   </div>
                   <div className="col-md-9 menu">
                        <nav>
                            <Link to="/home">Home</Link>
                            <Link to="/destination">Destination</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/contact">Contact</Link>
                           
                        </nav>
                   </div>
                   <div className="col-md-1 text-right loginBtn">
                   <button className="btn btn-dark"> <Link to="/login">Login</Link></button>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Header;