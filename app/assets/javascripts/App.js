'use strict';

import React from 'react'
import { Router } from 'react-router'

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = React.createClass({

  mixins: [Router.State],

  render () {
    const pathname = (this.props.location.pathname === "/" ? 'home' : this.props.location);
    return (
      <div id='main' rel="main">
        <Header />
        {
          this.props.children
            ||
          <Home />
        }
        <Footer />
      </div>
    );
  }
});

export default App;
