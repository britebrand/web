import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { observer } from 'mobx-react';

//import store from './store/Store';

import Header from './components/Header';
import Home from './components/scenes/Home';

@observer class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;
