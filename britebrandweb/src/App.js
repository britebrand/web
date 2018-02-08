import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';

//import store from './store/Store';

import Header from './components/Header';
import Home from './components/scenes/Home';
import About from './components/scenes/About';
import Cart from './components/scenes/Cart';

@observer class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
