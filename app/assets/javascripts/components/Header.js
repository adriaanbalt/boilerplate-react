'use strict';

import React, {Component} from 'react';
import AppStore from '../stores/AppStore';
import cx from 'classnames';
import { Link } from 'react-router';

export default class Header extends Component {

	constructor (props) {
		super(props);
		this.state = AppStore.getState();
		this._onChange = (o) => {
			this.setState( AppStore.getState() );
		}
	}

	componentDidMount () {
		AppStore.listen(this._onChange);
	}

	componentWillUnmount () {
		AppStore.unlisten(this._onChange);
	}

	 render () {
		 return (
			 <header>
				 <div className="inner">
				 </div>
			 </header>
		 )
	 }
};