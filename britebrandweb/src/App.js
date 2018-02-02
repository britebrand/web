import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  //Link
} from 'react-router-dom'

import Home from './components/scenes/Home';

class App extends Component {

  render() {
    return (
      <div>
        <header />
        <BrowserRouter>
          <Route exact path="/" component={Home} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
