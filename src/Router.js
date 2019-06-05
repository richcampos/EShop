import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

export default (props) => {
  let { catched } = props
  let { user } = props

  return(
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path={`/product/${id}`} component={ProductDetail} />
      <Route exact path={orders} component={ProductDetail}/>
      <Route exact path={auth} component={ProductDetail}/>
    </Switch>
  )
}