import React from "react";
import { Route, Redirect } from "react-router-dom";

export function ProtectedRoute({ component: Component, ...rest }) {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <Route
      {...rest}
      render={(props) => {
        var path = props.location.pathname.substring(0, 16);
        var id = parseInt(props.location.pathname.substring(16));

        if (
          user &&
          user.role === "ROLE_USER" &&
          path === "/manage/address/" &&
          id === user.id
        ) {
          return <Component {...rest} {...props} />;
        } else if (
          user &&
          (path === "/basket" || path === "/history" || path === "/account")
        ) {
          return <Component {...rest} {...props} />;
        } else if (user && user.role === "ROLE_ADMIN") {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/unauthorized",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
