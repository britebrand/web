import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from './widgets/Logo';
import SearchBar from './widgets/SearchBar';

import header from './../assets/header.jpg';

class Header extends Component {

    render() {
        return (
            <header style={{backgroundImage: `url(${header})`}}>
                <div className="max-width flex-row header-top">
                    <Logo />
                    <div className="header-links">
                        <Link 
                            className="header-link"
                            to='/'>
                            About
                        </Link>
                        <Link 
                            className="header-link"
                            to='/'>
                            Blog
                        </Link>
                        <Link 
                            className="header-link"
                            to='/'>
                            Cart
                        </Link>
                    </div>
                </div>
                <div className="max-width header-bottom">
                    <h1 className="header-tagline"> Find your next Brite idea. </h1>
                    <SearchBar />
                </div>
            </header>
        )
    }

}

export default Header;
