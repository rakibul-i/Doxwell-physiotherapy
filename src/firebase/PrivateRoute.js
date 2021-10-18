import { Route, Redirect, useHistory, useLocation } from "react-router-dom";
import useAuth from "../context/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email || user?.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/account",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
