import { useState, useEffect } from "react";

interface AuthState {
  isAuthenticated: boolean;
}

interface AuthActions {
  loginAuth: () => void;
  logoutAuth: () => void;
}

type AuthHook = AuthState & AuthActions;

function useAuth(): AuthHook {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
  });

  useEffect(() => {
    const checkAuthentication = () => {
      const token = localStorage.getItem("token");

      setAuthState((prevState) => ({
        ...prevState,
        isAuthenticated: Boolean(token),
      }));
    };

    checkAuthentication();
  }, []);

  function loginAuth() {
    localStorage.setItem("token", "seu_token_aqui");
    setAuthState({
      isAuthenticated: true,
    });
  }

  function logoutAuth() {
    localStorage.removeItem("token");
    setAuthState({
      isAuthenticated: false,
    });
  }

  return {
    ...authState,
    loginAuth,
    logoutAuth,
  };
}

export default useAuth;
