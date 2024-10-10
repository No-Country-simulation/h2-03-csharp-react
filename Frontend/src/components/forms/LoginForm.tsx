import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../styles/theme.tsx";
import GoogleButton from "../buttons/GoogleButton.tsx";
import style from "./login-view.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{ justifyContent: "center" }}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography component="h1" variant="h6">
            <div className={style.title}>
              <h3>Hola de nuevo,</h3>
              <p>Por favor inicia sesión</p>
            </div>
          </Typography>
          <Box
            component="form"
            onSubmit={handleLogin}
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ mt: 3, width: "100%" }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              sx={{
                backgroundColor: "#EFEFF0",
                width: "90%",
              }}
              required
              id="login-email"
              label="Correo"
              name="login-email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              sx={{
                backgroundColor: "#EFEFF0",
                width: "90%",
              }}
              required
              name="login-password"
              label="Contraseña"
              type={showPassword ? "text" : "password"}
              id="login-password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility}>
                      {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Link to="#">
              <p>¿Olvidaste tu contraseña?</p>
            </Link>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ mt: 2 }}
            >
              Iniciar sesión
            </Button>
          </Box>
          <section className={style.divider}>
            <div></div>
            <p>O inicia sesión con</p>
            <div></div>
          </section>
          <GoogleButton />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginForm;
