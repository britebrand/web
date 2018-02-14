import React, { Component } from 'react';
import _ from 'lodash';

const ABOUT_SECTIONS = [
    {
        title: 'What We Do',
        body: 'BriteBrand offers domain investors a marketplace to promote and resell their Internet properties. Our mission is to connect buyers and sellers with a creative platform that brings your brite ideas to the public.'
    },
    {
        title: 'Contact Us',
        body: '<a href="mailto:nick@britebrand.com" target="_blank"> nick@britebrand.com </a>'
    },
    { 
        title: 'About Our Team',
        body: 'Actively involved in domain investing since 1999, BriteBrand owner/operator Nick Schrunk continues to actively network with fellow domain investors as well as market and sell domain names from his portfolio of nearly 5,000 names - totaling more than $300,000 in sales to date.<br /><br/> Over his career, Nick has been instrumental in launching such brands as <a href="http://www.csdn.com" target="_blank">CSDN</a>, <a href="http://www.idnx.com" target="_blank">iDNX</a>, <a href="http://www.qivos.com" target="_blank">QIVOS</a>, <a href="http://www.eviex.com" target="_blank">EVIEX</a> and <a href="http://www.inhd.com" target="_blank">inHD</a>, just to name a few.<br /><br /> The world of domain reselling is ever-evolving, let our years of experience guide you in the brite direction.<br /> <br/> <a href="https://www.linkedin.com/in/infinitynetworks/" target="_blank"> Connect on LinkedIn </a>'
    }
]

class About extends Component {

    render() {

        return (
            <div className="max-width body-container">
                {
                    _.map(ABOUT_SECTIONS, each => (
                        <div 
                            key={each.title}
                            className="about-section-container">
                            <h1 className="about-section-title"> {each.title} </h1>
                            <p 
                                className="about-section-body"
                                dangerouslySetInnerHTML={{__html: each.body}} />
                        </div>    
                    ))
                }
            </div>
        );
    }

}

export default About;
