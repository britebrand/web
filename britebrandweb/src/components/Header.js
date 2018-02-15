import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import store from './../store/Store';

import Logo from './widgets/Logo';
import SearchBar from './widgets/SearchBar';
import Counter from './widgets/Counter';

import header from './../assets/header.jpg';

@observer class Header extends Component {

    @observable addShadow = !this.atTop;

    get atTop() {
        return window.scrollY < 10
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (!this.atTop && this.addShadow) return;
            if (this.atTop) {
                this.addShadow = false;
            } else {
                this.addShadow = true;
            }
        })
    }

    render() {

        const { numSelectedDomains } = store;
        const { showSearchBar } = this.props;

        return (
            <header style={{ backgroundImage: `url(${header})` }}>
                <div className={`header-top ${this.addShadow ? 'with-shadow' : ''}`}>
                <div className="max-width flex-row header-top-container">
                    <Logo />
                    <div className="header-links">
                        <Link
                            className="header-link"
                            to='/about'>
                            About
                        </Link>
                        <Link
                            className="header-link"
                            to='/'>
                            Blog
                        </Link>
                        <Link
                            className="header-link"
                            to='/cart'>
                            Cart
                        </Link>
                        <Counter count={numSelectedDomains} />
                    </div>
                    </div>
                </div>
                {
                    showSearchBar &&
                    <div className="max-width header-bottom">
                        <h1 className="header-tagline"> Find your next Brite idea. </h1>
                        <SearchBar onChange={(val) => setTimeout(100, store.searchDomain(val))} />
                    </div>
                }
            </header>
        )
    }

}

export default Header;
