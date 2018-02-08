import React, { Component } from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash';

import store from './../../store/Store';

@observer class Cart extends Component {

    render() {

        const { selectedDomains } = store;

        return (
            <div>
                <h1> Cart </h1>
            </div>
        );
    }

}

export default Cart;
