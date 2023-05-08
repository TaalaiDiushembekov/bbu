import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, role: propRole, ...rest }) => {
  const role = JSON.parse(localStorage.getItem('role'))
  // const accessToken = useSelector(s => s.auth.accessToken)
  return (
    <Route {...rest} render={props =>   
      role === propRole ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
    />
  );
};

export default PrivateRoute;