'use strict';

import React from 'react'
import { Router } from 'react-router'
import ActionCreator from './actions/AppActions';
import AppStore from './stores/AppStore';

import Header from './components/Header';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Home from './pages/Home';

export default class App {

  constructor() {
    this.mixins = [Router.State];
  }
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
}