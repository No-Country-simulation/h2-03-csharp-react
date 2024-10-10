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

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
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
              <h3>Bienvenido a Waki,</h3>
              <p>Crea tu cuenta completando los datos</p>
            </div>
          </Typography>
          <Box
            component="form"
            onSubmit={handleRegister}
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
              id="register-username"
              label="Nombre de usuario"
              name="register-username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              sx={{
                backgroundColor: "#EFEFF0",
                width: "90%",
              }}
              required
              id="register-email"
              label="Correo o teléfono"
              name="register-email"
              autoComplete="email"
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
              name="register-password"
              label="Contraseña"
              type={showPassword ? "text" : "password"}
              id="register-password"
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
            <TextField
              variant="outlined"
              margin="normal"
              sx={{
                backgroundColor: "#EFEFF0",
                width: "90%",
              }}
              required
              name="register-confirm-password"
              label="Repetir contraseña"
              type={showPassword ? "text" : "password"}
              id="register-confirm-password"
              autoComplete="current-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              Registrarse
            </Button>
          </Box>
          <section className={style.divider}>
            <div></div>
            <p>O regístrate con</p>
            <div></div>
          </section>
          <GoogleButton />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default RegisterForm;
