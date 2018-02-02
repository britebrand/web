import React, { Component } from 'react';
import { observer } from 'mobx-react';

import store from './../../store/Store';

@observer class Home extends Component {

    componentDidMount() {
        store.getAvailableURLs();
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
