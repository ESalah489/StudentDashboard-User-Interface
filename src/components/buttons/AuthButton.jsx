import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

const AuthButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleClick = () => {
    if (isLoggedIn) {
      dispatch(logout());
      navigate("/");
    } else {
      dispatch(login());
      navigate("/layout");
    }
  };

  return (
    <button className="_btn" onClick={handleClick}>
      {isLoggedIn ? "Logout" : "Login"}
    </button>
  );
};

export default AuthButton;
