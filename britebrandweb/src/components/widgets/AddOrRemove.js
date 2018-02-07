import React from 'react';

const AddOrRemove = (props) => {

    const {
        onClick,
        isAdd
    } = props;

    return (
        <button
            onClick={() => onClick && onClick()}
            className="add-remove-button">
            {isAdd ? '+' : '-'}
        </button>
    );
}

export default AddOrRemove;