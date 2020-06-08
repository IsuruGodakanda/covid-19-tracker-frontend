import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import Spinner from 'Common/Spinner';

const Dashboard = lazy(() => import('Pages/Dashboard'));
const Patient = lazy(() => import('Pages/Patient'));
const NotFound = lazy(() => import('Components/common/NotFound'));

class MainRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/addPayment' component={Patient} />

          <Route component={NotFound} />
        </Switch>
      </Suspense>
    );
  }
}

export default MainRoutes;
