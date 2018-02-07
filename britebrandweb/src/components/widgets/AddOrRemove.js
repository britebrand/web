import React from 'react';

const AddOrRemove = (props) => {

    const {
        onClick,
        toAdd
    } = props;

    return (
        <button
            onClick={() => onClick && onClick()}
            className="add-remove-button">
            {toAdd ? '+' : '-'}
        </button>
    );
}

export default AddOrRemove;