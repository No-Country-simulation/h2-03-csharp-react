import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginView from "../components/forms/LoginView";
import { useUserContext } from "../hooks/UserContext";

const Login = () => {
  const { state } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.token) {
      navigate("/partidos");
    }
  }, [state, navigate]);
  
  return (
    <div>
      <LoginView />
    </div>
  );
};

export default Login;
