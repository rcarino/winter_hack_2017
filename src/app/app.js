import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import Main from './Main';
import Entry from './Entry';
import Details from './Details';
import Confirmation from './Confirmation';
import TabbedView from './TabbedView';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={TabbedView} />
      <Router path="search" component={TabbedView} />
      <Route path="details" component={Details} />
      <Route path="confirmation" component={Confirmation} />
      <Route path="*" component={TabbedView} />
    </Route>
  </Router>), document.getElementById('app'));
