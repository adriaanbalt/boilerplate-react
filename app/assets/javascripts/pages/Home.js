'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { Link } from 'react-router';

import API from '../redux/API';
import ActionCreator from '../redux/ActionCreator';
import UI from '../lib/UI';
import Config from '../lib/Config';
import pathJoin from '../lib/pathJoin';

class Home extends UI {

  componentWillMount () {
    document.title = `Contracktor`;
  }

  render () {
    return (
      <div className='Home Page'>
        <div className="inner">
          <h1>Hello World!</h1>
        </div>
      </div>
    );
  }

};

function mapStateToProps(store) {
  return {
  };
}

Home.propTypes = {
};

export default connect(mapStateToProps)(Home);
