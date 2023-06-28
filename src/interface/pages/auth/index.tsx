import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { useEffect } from "react";
import { useAuthStore } from "../../../store";

const Auth = () => {
  const [{ isAuthenticating, isAuthenticated }, { handleSignIn }] =
    useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/accounts");
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen min-w-full flex items-center justify-center">
      <Button
        loading={isAuthenticating}
        type="primary"
        size="large"
        onClick={handleSignIn}
      >
        Signin with Google
      </Button>
    </div>
  );
};

export default Auth;
