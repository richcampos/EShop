import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path={`/product/${id}`} component={ProductDetail} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
