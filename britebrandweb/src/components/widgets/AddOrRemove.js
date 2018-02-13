import React from 'react';

const AddOrRemove = (props) => {

    const {
        onClick,
        toAdd,
        className
    } = props;

    return (
        <button
            onClick={() => onClick && onClick()}
            className={`add-remove-button ${className}`}>
            {toAdd ? '+' : '-'}
        </button>
    );
}

export default AddOrRemove;