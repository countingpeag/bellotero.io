import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation'
import Testimonial from './components/Testimonial';
import Configurator from './components/Configurator';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation />
          <Configurator />
      </div>
    );
  }
}

export default App;
