import React from 'react';
import { Link } from 'react-router-dom';

import logo from './../../assets/logo.png'

const Logo = () => (
    <Link
        to="/"
        className="logo-container">
        <img
            className="logo-img"
            alt="BriteBrand"
            src={logo} />
    </Link>
);

export default Logo;