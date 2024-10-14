import { useState } from "react";
import style from "./login-view.module.css";
import RegisterForm from "./RegisterForm.tsx";
import LoginForm from "./LoginForm.tsx";
import FacebookButton from "../buttons/FacebookButton.tsx";
import GoogleButton from "../buttons/GoogleButton.tsx";
import Footer from "../layout/Footer.tsx";

const LoginView = () => {
  const [login, setLogin] = useState(true);

  const toggleFormView = () => {
    setLogin(!login);
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <header className={style.header}>
            <section>
              <h1>WAKI</h1>
            </section>
            {login ? (
              <>
                <section className={style.text}>
                  <p>Ingresa usando Google o Facebook</p>
                </section>
                <section className={style.buttons}>
                  <GoogleButton />
                  <FacebookButton />
                </section>
              </>
            ) : undefined}

            <hr />
          </header>
          <main className={style.formContainer}>
            <section className={style.options}>
              <div
                style={
                  login
                    ? { backgroundColor: "white" }
                    : { backgroundColor: "lightgray" }
                }
                onClick={toggleFormView}
              >
                Ingresa
              </div>
              <div
                style={
                  login
                    ? { backgroundColor: "lightgray" }
                    : { backgroundColor: "white" }
                }
                onClick={toggleFormView}
              >
                Regístrate
              </div>
            </section>
            <section className={style.form}>
              {login ? <LoginForm /> : <RegisterForm />}
            </section>
            <a href="#">¿Olvidaste tu contraseña?</a>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginView;

// Versión original
// import { useState } from "react";
// import { Container } from "@mui/material";

// import { ThemeProvider } from "@mui/material/styles";
// import theme from "../../styles/theme.tsx";
// import style from "./login-view.module.css";
// import RegisterForm from "./RegisterForm.tsx";
// import LoginForm from "./LoginForm.tsx";

// const LoginView = () => {
//   const [login, setLogin] = useState(true);
//   return (
//     <ThemeProvider theme={theme}>
//       <Container maxWidth="sm" sx={{ marginBottom: "3%", gap: 0 }}>
//         <nav className={style.navbar}>
//           <div
//             className={login ? style.blue : ""}
//             onClick={() => setLogin(true)}
//           >
//             <p>Iniciar sesión</p>
//           </div>
//           <div
//             className={login ? "" : style.blue}
//             onClick={() => setLogin(false)}
//           >
//             <p>Regístrate</p>
//           </div>
//         </nav>
//         {login ? <LoginForm /> : <RegisterForm />}
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default LoginView;
