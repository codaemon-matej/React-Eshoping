import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { checkIndexAuthorization } from '../../lib/check-auth';

const PrivateRoute = ({ store, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      checkIndexAuthorization(store) ? <Component {...props} /> : <Redirect to='/login' />
    )} />
)

export default PrivateRoute
