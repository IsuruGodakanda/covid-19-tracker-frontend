import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import Spinner from 'Packages/Spinner';

const Dashboard = lazy(() => import('Pages/dashboard'));
const Patient = lazy(() => import('Pages/patient'));
const NotFound = lazy(() => import('Packages/NotFound'));

const MainRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/addPayment' component={Patient} />

        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default MainRoutes;
