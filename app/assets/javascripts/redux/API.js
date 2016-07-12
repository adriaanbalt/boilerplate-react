/**
 * name: API
 * description: Handles loading of external resources and APIs
 */

import request from 'superagent';
import Promise from 'bluebird';
import _ from 'lodash';

import pathJoin from '../lib/pathJoin';
import isJSON from '../lib/isJSON';
import Config from '../lib/Config';
import ActionCreator from './ActionCreator';

export default {

	initialize() {
		return dispatch =>
			// Loads multiple endpoints and returns an array of responses
			Promise.all([
				this.get({ route:`/projects` })
			])
			.then(([projects]) =>{
				// store projects on the state
				return dispatch(ActionCreator.initialize({
					projects
				}));
			});
	},

	make(o){
		o.route = o.route || [];
		o.params = o.params || [];
		o.query = o.query ? `?${Object.keys(o.query).map((val) => val + "=" + (o.query[val] && typeof o.query[val] === 'object'? JSON.stringify(o.query[val]) : o.query[val]) ).join("&")}` : "";
		o.body = o.body || {};
		o.headers = o.headers || {'Accept':'application/json'}; // default to 'Accept': 'application/json' header

		console.log ( "!! API makeRequest ", o.method, o.route, o.body, o.params, o.query );

		return new Promise((resolve, reject) => {
			request
				[o.method]( o.route + o.query )
				// [o.method](pathJoin(o.route, typeof o.params === 'string' ? o.params : pathJoin(...o.params)) + o.query) // if o.params is not string destructure it
				.set(o.headers)
				.send(o.body)
				.end((err, res) => err ?
				reject(err) :
				resolve(isJSON(res.text) ? JSON.parse(res.text) : res.text));
		});

	},

	get (o) {
		if(typeof o === 'string') o = {route: o}; // if string is passed just use that as route
		o.method = 'get';
		return this.make(o);
	},

	del (o) {
		if(typeof o === 'string') o = {route: o}; // if string is passed just use that as route
		o.method = 'del';
		return this.make(o);
	},

	post (o) {
		if(typeof o === 'string') o = {route: o}; // if string is passed just use that as route
		o.method = 'post';
		return this.make(o);
	},

	put (o) {
		if(typeof o === 'string') o = {route: o}; // if string is passed just use that as route
		o.method = 'put';
		return this.make(o);
	}

};