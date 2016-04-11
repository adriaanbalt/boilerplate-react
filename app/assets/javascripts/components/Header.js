'use strict';

import React, {Component} from 'react';
import AppStore from '../stores/AppStore';
import cx from 'classnames';
import ActionCreator from '../actions/AppActions';
import { Link } from 'react-router';
import Nav from './Nav';

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
				<Nav />
				{
				 	this.state.isNavOpen
						&&				 
				 	<h1>Logo</h1>
				}
			 </header>
		 )
	 }
};
