import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import store from './../store/Store';

import Logo from './widgets/Logo';
import SearchBar from './widgets/SearchBar';
import Counter from './widgets/Counter';

import header from './../assets/header.jpg';

@observer class Header extends Component {

    render() {

        const { numSelectedDomains } = store;

        return (
            <header style={{ backgroundImage: `url(${header})` }}>
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
                        <Counter count={numSelectedDomains} />
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
