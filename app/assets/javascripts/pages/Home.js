'use strict';

import React, { Component }  from 'react';
import { Link } from 'react-router';

export default class Home extends Component {

  render () {
    return (
      <div className='Home Page'>
        <div className='Home-container'>{ this.state.title }</div>
      </div>
    );
  }
};
