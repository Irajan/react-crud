import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { userContext } from "../App";

function ProtectedRoute({ component: Component, ...rest }) {
  const { login } = useContext(userContext);
  const [isLogged] = login;
  return (
    <Route {...rest}>
      {isLogged ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
}

export default ProtectedRoute;
