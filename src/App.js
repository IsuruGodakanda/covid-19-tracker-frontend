import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Header from 'Common/Header';
import Footer from 'Common/Footer';

import ErrorBoundary from 'Common/ErrorBoundary';
import MainRoutes from './routes/MainRoutes';

class App extends Component {
  render() {
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
  }
}

export default App;
