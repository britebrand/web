import React, { Component } from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash';

import store from './../../store/Store';

@observer class Home extends Component {

    componentDidMount() {
        store.getAvailableDomains();
    }

    render() {

        const {
            loading,
            availableURLs
        } = store;

        if (loading) {
            return (
                <div>
                    <h1> Loading... </h1>
                </div>
            )
        }

        return (
            <div>
                {
                    availableURLs && _.map(availableURLs, each => <p style={{fontFamily: `${each.font}`}}key={each.name}> {each.displayName} </p>)
                }
            </div>
        );
    }

}

export default Home;
