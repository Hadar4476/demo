import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer';

import Page404 from './components/Page404/Page404';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='*' exact component={Page404} />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
