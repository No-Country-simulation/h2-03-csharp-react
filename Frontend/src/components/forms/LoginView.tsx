import { useState } from "react";
import { Box, Button, Typography, Paper, Divider } from "@mui/material";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import FacebookButton from "../buttons/FacebookButton";
import GoogleButton from "../buttons/GoogleButton";

const LoginView = () => {
  const [login, setLogin] = useState(true);

  const toggleFormView = () => {
    setLogin(!login);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "95vh",
        background: "linear-gradient(#8f3bef, #011027)",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: { xs: "90%", sm: "60%", md: "40%", lg: "23%" },
          padding: "2rem",
          textAlign: "center",
          backgroundColor: "transparent",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={900}
          sx={{ marginBottom: "2rem", color: "white" }}
        >
          WAKI
        </Typography>
        {login && (
          <>
            <Typography
              variant="body1"
              gutterBottom
              textAlign={"left"}
              color="white"
              fontSize={"0.75rem"}
              fontWeight={500}
            >
              Ingresa usando Google o Facebook
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                height: "2.8rem",
                marginBottom: "1rem",
              }}
            >
              <GoogleButton />
              <FacebookButton />
            </Box>
          </>
        )}
        <Divider
          sx={{ marginBottom: "1rem", border: "1px solid white" }}
          color="white"
        />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 3fr",
          }}
        >
          <Button
            onClick={toggleFormView}
            variant="contained"
            sx={{
              backgroundColor: login ? "white" : "lightgray",
              color: "black",
              borderRadius: "8px 8px 0 0",
              padding: "9px 0",
            }}
          >
            Ingresa
          </Button>
          <Button
            onClick={toggleFormView}
            variant="contained"
            sx={{
              backgroundColor: login ? "lightgray" : "white",
              color: "black",
              borderRadius: "8px 8px 0 0",
              padding: "9px 0",
            }}
          >
            Regístrate
          </Button>
        </Box>
        {login ? <LoginForm /> : <RegisterForm />}
        <Typography
          component={"a"}
          href="#"
          variant="body2"
          sx={{ marginTop: "1rem", color: "white", textDecoration: "none" }}
        >
          ¿Olvidaste tu contraseña?
        </Typography>
      </Paper>
    </Box>
  );
};

export default LoginView;

// Versión con solo CSS
// import { useState } from "react";
// import style from "./login-view.module.css";
// import RegisterForm from "./RegisterForm.tsx";
// import LoginForm from "./LoginForm.tsx";
// import FacebookButton from "../buttons/FacebookButton.tsx";
// import GoogleButton from "../buttons/GoogleButton.tsx";

// const LoginView = () => {
//   const [login, setLogin] = useState(true);

//   const toggleFormView = () => {
//     setLogin(!login);
//   };
//   return (
//     <>
//       <div className={style.container}>
//         <div className={style.content}>
//           <header className={style.header}>
//             <section>
//               <h1>WAKI</h1>
//             </section>
//             {login ? (
//               <>
//                 <section className={style.text}>
//                   <p>Ingresa usando Google o Facebook</p>
//                 </section>
//                 <section className={style.buttons}>
//                   <GoogleButton />
//                   <FacebookButton />
//                 </section>
//               </>
//             ) : undefined}

//             <hr />
//           </header>
//           <main className={style.formContainer}>
//             <section className={style.options}>
//               <div
//                 style={
//                   login
//                     ? { backgroundColor: "white" }
//                     : { backgroundColor: "lightgray" }
//                 }
//                 onClick={toggleFormView}
//               >
//                 Ingresa
//               </div>
//               <div
//                 style={
//                   login
//                     ? { backgroundColor: "lightgray" }
//                     : { backgroundColor: "white" }
//                 }
//                 onClick={toggleFormView}
//               >
//                 Regístrate
//               </div>
//             </section>
//             <section className={style.form}>
//               {login ? <LoginForm /> : <RegisterForm />}
//             </section>
//             <a href="#">¿Olvidaste tu contraseña?</a>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginView;

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
