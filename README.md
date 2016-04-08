# Boilerplate to build a React app

1. [General](#general)
2. [Installation](#installation)
3. [Build Process: Development](#build-process-development)
4. [Application Logic](#application-logic)
5. [Flux Data Flow: An Overview](#flux-data-flow-an-introduction)
6. [Code Structure](#code-structure)
7. [Additional Resources](#additional-resources)

## Tool Specs 
* Node: 4.2.1
* NPM: 2.14.7
* React: 0.14.0

## General
This application uses the following tools:

* [Homebrew](http://brew.sh/) 
* [NVM](https://github.com/creationix/nvm)
* [Node.js](http://nodejs.org) 4.2.1
* [npm](http://npmjs.org) 2.14.7
* [Gulp](http://github.com/gulpjs/gulp) and various Gulp plugins (gulp-imagemin, gulp-autoprefixer, etc.)
* [React](http://github.com/facebook/react) 0.14.6
* [Alt](http://github.com/goatslacker/alt) 
* [Flux-style data management](http://facebook.github.io/flux/)
* [Webpack](http://github.com/webpack/webpack) JavaScript compiler
* [react-hot-loader](http://github.com/gaearon/react-hot-loader) Reload browser

## Installation

#### Optional [Node.js](http://nodejs.org) and [npm](http://npmjs.org) installation via [NVM](https://github.com/creationix/nvm)

```bash
# Recommend installing NVM
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.1/install.sh | bash

# Install Node and NPM
$ nvm install v4.2.0

# Set Node default
$ nvm alias default v4.2.0
```

### Localhost

```bash
# clone the Git repository
$ git clone git@github.com:thebarbariangroup/pepsico-pepfeed.git

# change directory to the project folder
$ cd pepsico-pepfeed

# if node_modules folder is an alias, remove it
$ rm node_modules

# install the node modules
$ npm install

# build the code
$ gulp

In browser navigate to `localhost:3000`
```

## File Structure

Once the application is installed, you'll find everything in the `app` folder:

```
app/
├── assets/
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   ├── javascripts/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── __tests__/
│   │   ├── actions/
│   │   │   └── AppActions.js
│   │   ├── components/
│   │   ├── lib/
│   │   │   ├── alt.js
│   │   │   ├── Localization.js
│   │   │   ├── Config.js
│   │   │   └── API.js
│   │   ├── pages/
│   │   └── stores/
│   │       └── AppStore.js
│   ├── stylesheets/
│   │   ├── base/
│   │   ├── generated/
│   │   ├── components/
│   │   ├── mixins/
│   │   ├── pages/
│   │   ├── _components.scss
│   │   ├── _mixins.scss
│   │   ├── _pages.scss
│   │   ├── _base.scss
│   │   └── global.scss
│   └── localization/
│       └── en.json
└── views/
    └── index.html (bare bone html file where the css/js are loaded )

public/
├── assets/
│   ├── fonts/
│   ├── localization/
│   └── stylesheets/
└── index.html
```

## Build Process:
```shell
$ gulp
```
You may need to alias `gulp` to `node_modules/.bin/gulp`, or `npm install -g gulp`.

Start editing assets and views from the `gulp/assets` folder. Files compile to `public`.

## Code Structure

#### 1. Actions
```js
'use strict';
class AppActions {
  constructor () {
    this.generateActions(
        'updateContent',
        'toggleEditMode'
    )
  }
}

export default alt.createActions(AppActions)
```
---
#### 2. Store
```js
'use strict';
class AppStore {
  constructor () {
    this.bindListeners({
      updateContent: ActionCreator.UPDATE_CONTENT,
      toggleEditMode: ActionCreator.TOGGLE_EDIT_MODE
    })
  }
  ...
  updateContent(o) {
    this.data[o.field] = o.value
  }
}

export default alt.createStore(AppStore, 'AppStore');
```
---
#### 3. View
```js
'use strict';
import React, { Component }  from 'react';
import AppStore from '../stores/AppStore';
import ActionCreator from '../actions/AppActions';
import UI from './UI';
export default class Widget extends UI {
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
};
```
---
#### 4. Implement View
```js
'use strict';
import ActionCreator from '../actions/AppActions';
import Widget from '../components/Widget';
...
this.updateContent (object) {
  ActionCreator.updateContent(object)
},
...
...
<Widget onClick={ this.updateContent } />
```

## Creating/Adding Icons
Inside this file: `/app/assets/stylesheets/_icons.scss`

You will see all of the icons' names that exist within the `/app/assets/images/icons` folder.  Each name has the following syntax: `icon-whatever-image-name`

I add the precursor `icon-` to associate icons that have short names, like `Bookmarks` or `Home`.

When we create new icons, we add them to the same icons folder.  After adding them, you must create the classes and reference their corresponding mixin as follows:

```css
.icon-Home {
  @include get-sprite( Home );
}
```

This dynamically creates the icon, in retina, for the specified icon.

To use the icon within our DOM, I've created a JS Directive  `/app/assets/javascripts/components/Icon.js`.  When you want to use an Icon, simply write <Icon name="whatever-image-name"/> within your JSX markup.

This will dynamically create the following syntax: `<span className="icon icon-whatever-image-name"/>`  I do this because if we want to change all Icons across the entire site, all we need to do is change this Icon.js file rather than going everywhere searching for all the instances.


## Additional Resources
More information on the following:
* [JSX: HTML in your JavaScript](https://facebook.github.io/react/docs/jsx-in-depth.html)
* [react-router](http://rackt.github.io/react-router)
* [Facebook's Flux overview](https://facebook.github.io/flux/)
* [Alt.js (Flux implementation): a user guide](http://alt.js.org/guide/)
* [How to use Alt with React's lifecycle hooks](http://alt.js.org/guide/view/)
* [Creating actions (events) with Alt/Flux](http://alt.js.org/guide/actions/)
* [Stores: your data warehouse](http://alt.js.org/guide/store/)
