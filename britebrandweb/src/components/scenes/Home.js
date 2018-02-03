import React, { Component } from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash';
import { BeatLoader } from 'react-spinners';

import store from './../../store/Store';

import Domain from './../widgets/Domain';

@observer class Home extends Component {

    componentDidMount() {
        store.getAvailableDomains();
    }

    render() {

        const {
            loading,
            availableDomains
        } = store;

        if (loading) {
            return (
                <div className="loading-container">
                    <BeatLoader 
                        size={22}
                        color="#305CC0"/>
                </div>
            )
        }

        return (
            <div>
                {
                    availableDomains &&
                    <div className="max-width domains-container">
                        {_.map(availableDomains, domain => (
                            <Domain
                                key={domain.name}
                                domain={domain} />)
                        )}
                    </div>
                }
            </div>
        );
    }

}

export default Home;
