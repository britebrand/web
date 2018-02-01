import React, { Component } from 'react';

import store from './../../store/Store';

class Home extends Component {

    componentDidMount() {

    }

    render() {

        const {
            loading
        } = store;

        if (loading) {
            return (
                <div>
                    Loading...
                </div>    
            )
        }

        return (
            <div>
                Home
            </div>
        );
    }

}

export default Home;
