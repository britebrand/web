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
            availableDomains,
            searchedDomains
        } = store;

        const domains = searchedDomains || availableDomains;

        if (loading) {
            return (
                <div className="loading-container">
                    <BeatLoader
                        size={22}
                        color="#243C54" />
                </div>
            )
        }

        return (
            <div>
                {
                    domains &&
                    <div className="max-width body-container domains-container">
                        {_.map(domains, domain => {

                            const toAdd = store.toAdd(domain);

                            return (
                                <Domain
                                    key={domain.name}
                                    toAdd={toAdd}
                                    onAddOrRemove={() => toAdd ? store.selectDomain(domain) : store.removeDomain(domain)}
                                    domain={domain} />
                            )
                        }
                        )}
                    </div>
                }
            </div>
        );
    }

}

export default Home;
