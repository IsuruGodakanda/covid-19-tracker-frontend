import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Header from 'Packages/Header';
import Footer from 'Packages/Footer';

import ErrorBoundary from 'Packages/ErrorBoundary';
import MainRoutes from './routes/MainRoutes';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <ErrorBoundary>
            <MainRoutes />
          </ErrorBoundary>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
