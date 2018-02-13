import React from 'react';

import AddOrRemove from './AddOrRemove';

const CartDomain = (props) => {

    const {
        domain,
        onRemove
    } = props;

    return (
        <div className="cart-domain-container flex-row">
            <div className="flex-row cart-domain-left-container">
                <p>
                    {domain.displayName}
                </p>
                <p>
                    ${domain.price}
                </p>
            </div>
            <div className="cart-domain-right-container flex-center">
                <AddOrRemove
                    className="cart-remove-button"
                    onClick={() => onRemove()} />
            </div>
        </div>
    );
}

export default CartDomain;