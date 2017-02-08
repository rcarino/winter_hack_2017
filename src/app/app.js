import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import Main from './Main';
import Entry from './Entry';
import Details from './Details';
import TabsExampleSwipeable from './tabs';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Entry} />
      <Router path="search" component={TabsExampleSwipeable} />
      <Route path="details" component={Details} />
      <Route path="*" component={TabsExampleSwipeable} />
    </Route>
  </Router>), document.getElementById('app'));
