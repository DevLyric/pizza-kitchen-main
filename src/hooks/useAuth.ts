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

      if (token) {
        setAuthState({ ...authState, isAuthenticated: true });
      } else {
        setAuthState({ ...authState, isAuthenticated: false });
      }
    };

    checkAuthentication();
  }, [authState]);

  function loginAuth() {
    // Lógica de autenticação, por exemplo, salvar o token no localStorage
    localStorage.setItem("token", "seu_token_aqui");

    // Atualizar o estado de autenticação
    setAuthState({
      isAuthenticated: true,
    });
  }

  function logoutAuth() {
    // Lógica para deslogar, por exemplo, remover o token do localStorage
    localStorage.removeItem("token");

    // Atualizar o estado de autenticação
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
