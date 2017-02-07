import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Main from './Main';
import Login from './login';
import TabsExampleSwipeable from './tabs';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Login} />
      <Route path="app" component={TabsExampleSwipeable}/>
      <Route path="*" component={TabsExampleSwipeable}/>
    </Route>
  </Router>), document.getElementById('app'));
