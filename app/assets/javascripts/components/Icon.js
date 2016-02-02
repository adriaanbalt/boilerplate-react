'use strict';

import React, { Component } from 'react';
import AppStore from '../stores/AppStore';
import cx from 'classnames';

export default class Icon extends Component {

	constructor (props) {
		super(props);
	}

	render () {
		return (
			<span className={`icon icon-${ this.props.name }`}></span>
		)
	}
};
