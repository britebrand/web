import React, { Component } from 'react';
import _ from 'lodash';

const ABOUT_SECTIONS = [
    {
        title: 'What We Do',
        body: 'BriteBrand offers domain investors a marketplace to promote and resell their Internet properties. Our mission is to connect buyers and sellers with a creative platform that brings your brite ideas to the public.'
    },
    {
        title: 'Contact Us',
        body: '<a href="www.google.com> nick@britebrand.com </a>'
    },
    { 
        title: 'About Our Team',
        body: 'Actively involved in domain investing since 1999, BriteBrand owner/operator Nick Schrunk continues to actively network with fellow domain investors as well as market and sell domain names from his portfolio of nearly 5,000 names - totaling more than $300,000 in sales to date. Over his career, Nick has been instrumental in launching such brands as CSDN, iDNX, QIVOS, EVIEX and inHD, just to name a few. The world of domain reselling is ever-evolving, let our years of experience guide you in the brite direction. Connect on LinkedIn'
    }
]

class About extends Component {

    render() {

        return (
            <div>
                <h1> About </h1>
            </div>
        );
    }

}

export default About;
