import React from 'react';

import Button from './Button';
import AddOrRemove from './AddOrRemove';

const Domain = (props) => {
    const { domain } = props;
    return (
        <div className="domain-container flex-column">
            <div className="domain-name-container flex-center">
                <p
                    className="domain-name"
                    style={{ fontFamily: `${domain.font}` }}
                    key={domain.name}>
                    {domain.displayName}
                </p>
                <AddOrRemove isAdd/>
            </div>
            <div className="domain-price-container flex-row">
                <p className="domain-price">
                {`$${domain.price}`}
                </p>
                <Button 
                    className="domain-buy-button"
                    name="buy now"/>
            </div>
        </div>
    );
}

export default Domain;