'use strict';

import React, { Component }  from 'react';
import { Link } from 'react-router';
import AppStore from '../stores/AppStore';
import ActionCreator from '../actions/AppActions';
import cx from 'classnames';


export default class Home extends Component {
  constructor (props) {
    super(props);

    this.state = AppStore.getState();

    this._onChange = () => {
      this.setState( AppStore.getState() );
    }
  }

  componentWillMount () {
    AppStore.listen(this._onChange);
  }

  componentWillUnmount () {
    AppStore.unlisten(this._onChange);
  }

  render () {
    return (
      <div className='Home Page'>
        <div className='Home-container'>{ this.state.title }</div>
      </div>
    );
  }
};
