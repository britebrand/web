import React from 'react';

const Domain = (props) => {
    const {domain} = props;
    return (
    <div className="domain-container">
        <p style={{fontFamily: `${domain.font}`}}key={domain.name}> {domain.displayName} </p>
        {`$${domain.price}`}
    </div>
);
}

export default Domain;