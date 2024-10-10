import { useState } from "react";
import { Container } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../../styles/theme.tsx";
import style from "./login-view.module.css";
import RegisterForm from "./RegisterForm.tsx";
import LoginForm from "./LoginForm.tsx";

const LoginView = () => {
  const [login, setLogin] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{ marginBottom: "3%", gap: 0 }}>
        <nav className={style.navbar}>
          <div
            className={login ? style.blue : ""}
            onClick={() => setLogin(true)}
          >
            <p>Iniciar sesión</p>
          </div>
          <div
            className={login ? "" : style.blue}
            onClick={() => setLogin(false)}
          >
            <p>Regístrate</p>
          </div>
        </nav>
        {login ? <LoginForm /> : <RegisterForm />}
      </Container>
    </ThemeProvider>
  );
};

export default LoginView;
