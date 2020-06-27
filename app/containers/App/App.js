/**
 *
 * App
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - BMO Assignment"
      defaultTitle="BMO Assignment"
    >
      <meta name="description" content="Assignment" />
    </Helmet>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
