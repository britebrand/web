import React from 'react';

const Button = (props) => {

    const { 
        name,
        className,
        onClick
    } = props;

    return (
        <button 
            onClick={() => onClick && onClick()}
            className={`button-container ${className}`}>
            {name}
        </button>
    );
}

export default Button;