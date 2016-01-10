'use strict';

import React, {Component} from 'react';
import AppStore from '../stores/AppStore';
import cx from 'classnames';
import { Link } from 'react-router';

export default class Footer extends Component {

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
	 	console.log("footer render")
		 return (
			 <footer>
				 <div className="inner">
				 	&copy; 2016 Jeesun Kim
				 </div>
			 </footer>
		 )
	 }
};
