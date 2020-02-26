import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./Login";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Login />;
        } else {
          console.log("poop");
          return <Redirect to='/Login' />;
        }
      }}
    />
  );
};

export default PrivateRoute;
