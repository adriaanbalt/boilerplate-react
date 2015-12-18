'use strict';

import React from 'react'
import { Router } from 'react-router'
import ActionCreator from './actions/AppActions';
import AppStore from './stores/AppStore';
import ReactTransitionGroup from "react-addons-transition-group";

import Hero from './components/Hero';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = React.createClass({

  mixins: [Router.State],

  componentWillAppear(callback) {
    console.log("App componentWillAppear");
    _animateIn(callback);
  },

  componentWillEnter(callback) {
    console.log("App componentWillEnter");
    _animateIn(callback);
  },

  componentWillLeave(callback) {
    console.log("App componentWillLeave");
    _animateOut(callback);
  },

  _animateIn(callback) {
    console.log("_animateIn");
    callback();
    // var el = React.findDOMNode(this);
    // TweenLite.set(el, {opacity: 0});
    // setTimeout(function() {
    //   console.log("timed in");
    //   TweenLite.to(el, 1, {opacity: 1}).play().eventCallback("onComplete", callback);
    // }, this.props.animateInDelay);
  },

  _animateOut(callback) {
    console.log("_animateOut");
    callback();
    // var el = React.findDOMNode(this);
    // setTimeout(function() {
    //   TweenLite.to(el, 1, {opacity: 0}).play().eventCallback("onComplete", callback);
    // }, this.props.animateOutDelay);
  },

  render () {
    const pathname = (this.props.location.pathname === "/" ? 'home' : this.props.location);
    return (
      <div id='main' rel="main">
        <Hero />
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
