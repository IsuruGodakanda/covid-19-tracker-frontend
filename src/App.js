import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Header from 'Packages/Header';
import Footer from 'Packages/Footer';

import ErrorBoundary from 'Packages/ErrorBoundary';
import MainRoutes from './routes/MainRoutes';

const App = () => {
  return (
    <Provider store={store}>
      <div className='flex flex-col h-screen justify-between'>
        <Router>
          <Header />
          <ErrorBoundary>
            <MainRoutes />
          </ErrorBoundary>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
