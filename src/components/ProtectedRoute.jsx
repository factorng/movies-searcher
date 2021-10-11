/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ component: Component, path, ...props }) => {
  const user = useSelector((state) => state.user);

  return (
    <Route path={path}>
      {() => (user.name ? <Component {...props} /> : <Redirect to="/sign-in" />)}
    </Route>
  );
};

export default ProtectedRoute;
