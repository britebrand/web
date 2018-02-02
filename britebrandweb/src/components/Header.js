import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from './widgets/Logo';

class Header extends Component {

    render() {
        return (
            <header>
                <div className="flex-row">
                    <Logo />
                    <div>
                        <Link to='/'>
                            About
                        </Link>
                        <Link to='/'>
                            Blog
                        </Link>
                        <Link to='/'>
                            Cart
                        </Link>
                    </div>
                </div>
                <div>
                    <h1> Find your next Brite idea. </h1>
                    <input />
                </div>
            </header>
        )
    }

}

export default Header;
