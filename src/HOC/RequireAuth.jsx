import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function requireAuth(Component) {
  return function WrappedComponent(props) {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    if (!isLoggedIn) {
      return <Navigate to="/" replace />;
    }

    return <Component {...props} />;
  };
}

export default requireAuth;
