import React, { Component } from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash';

import CartDomain from './../widgets/CartDomain';
import Button from './../widgets/Button';

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
                        <div className="cart-container">
                            <div className="cart-container-left">
                                <h1> Your items </h1>
                                {
                                    _.map(selectedDomains, domain => <CartDomain
                                        domain={domain}
                                        onRemove={() => store.removeDomain(domain)}
                                        key={domain.name} />)
                                }
                            </div>
                            <div className="cart-container-right">
                                <h1> Total: ${totalPrice} </h1>
                                <Button 
                                    name="buy now"
                                    className="cart-buy-now-button"/>
                            </div>
                        </div> :
                        <h1> No domains added to cart yet. </h1>
                }
            </div>
        );
    }

}

export default Cart;
