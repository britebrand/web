import React, { Component } from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash';

import store from './../../store/Store';

@observer class Cart extends Component {

    render() {

        const {
            selectedDomains,
            numSelectedDomains,
            totalPrice
        } = store;

        return (
            <div className="max-width body-container">
                {
                    numSelectedDomains > 0 ?
                        <div>
                            {_.map(selectedDomains, each => <p> {each.displayName} </p>)}
                            {totalPrice}
                        </div> :
                        <h1> No domains added to cart yet. </h1>
                }
            </div>
        );
    }

}

export default Cart;
