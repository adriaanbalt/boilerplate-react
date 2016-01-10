'use strict';

import React, {Component} from 'react';
import AppStore from '../stores/AppStore';
import ActionCreator from '../actions/AppActions';
import cx from 'classnames';
import { Link } from 'react-router';

export default class Nav extends Component {

	constructor (props) {
		super(props);
		this.state = AppStore.getState();
		this._onChange = (o) => {
			this.setState( AppStore.getState() );
		}
		this.toggleNav = () => {
			console.log("navOpen");
			ActionCreator.toggleNav();
		}
		this.goToBlog = () => {
			console.log("gotoBlog");
		}
	}

	componentDidMount () {
		AppStore.listen(this._onChange);
	}

	componentWillUnmount () {
		AppStore.unlisten(this._onChange);
	}

	render () {
		console.log("Nav render")
		return (
			<div className="menu">
			{
				this.state.isNavOpen 
				&& 
				<div className="nav">
					<a onClick={this.goToBlog}>Blog</a>
					<a onClick={this.goToBlog}>Projects</a>
					<a onClick={this.goToBlog}>Blog</a>
				</div>
			}
				<a onClick={this.toggleNav} className="btn">nav toggle</a>
			</div>
		)
	}
};
