import React from 'react';

const Counter = (props) => {

    const { count } = props;

    if (!count || count < 1) return null;

    return (
        <div className="counter flex-center">
            {count}
        </div>
    );
}

export default Counter;