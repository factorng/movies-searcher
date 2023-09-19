/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoginPopup } from '../store/actions/actions';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ component: Component, path, ...props }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user.name) {
      dispatch(toggleLoginPopup());
    }
  }, [user]);
  return (
    <Route path={path}>
      {() => (user.name ? <Component {...props} /> : <Redirect to="/" />)}
    </Route>
  );
};

export default ProtectedRoute;
