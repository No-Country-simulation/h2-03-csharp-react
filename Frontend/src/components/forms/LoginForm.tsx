import { useState } from "react";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useUserContext } from "../../hooks/UserContext";
import FormErrorModal from "../modals/FormErrorModal";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
// import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  // const { dispatch } = useUserContext();
  // const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const showTemporaryModal = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Ingrese correo y contraseña");
      showTemporaryModal();
      return;
    }
    if (!validateEmail(username)) {
      setError("Ingrese un correo válido");
      showTemporaryModal();
      return;
    }
    // try {
    //   const response = await axiosInstance.post("Security/Login", {
    //     username,
    //     password,
    //   });
    //   if (response.data.token) {
    //     localStorage.setItem("token", response.data.token);
    //     dispatch({
    //       type: "LOGIN_SUCCESS",
    //       payload: {
    //         token: response.data.token,
    //         email: response.data.email,
    //         username: response.data.username,
    //       },
    //     });
    //     navigate("/");
    //   }
    // } catch (error) {
    //   if (axios.isAxiosError(error)) {
    //     setError(error?.response?.data);
    //     showTemporaryModal();
    //   }
    // }
  };

  return (
    <form onSubmit={handleLogin}>
      {showModal && <FormErrorModal error={error} />}
      <Box mb={0.2}>
        <TextField
          label="Email"
          fullWidth
          variant="filled"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{
            backgroundColor: "white",
            borderRadius: "0",
          }}
        />
      </Box>
      <Box mb={0.2}>
        <TextField
          label="Contraseña"
          type={showPassword ? "text" : "password"}
          fullWidth
          variant="filled"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            backgroundColor: "white",
            borderRadius: "0",
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  {!showPassword ? (
                    <IoEyeOutline
                      onClick={togglePasswordVisibility}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <IoEyeOffOutline
                      onClick={togglePasswordVisibility}
                      style={{ cursor: "pointer", width: "100%" }}
                    />
                  )}
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          borderRadius: "0 0 8px 8px",
          fontSize: "0.8rem",
          fontWeight: 400,
          marginBottom: "10px",
          padding: "10px 0",
          textTransform: "none",
        }}
      >
        Iniciar sesión
      </Button>
    </form>
  );
};

export default LoginForm;

// Versión con solo CSS
// import React, { useState } from "react";
// import { useUserContext } from "../../hooks/UserContext.tsx";
// import style from "./login-view.module.css";
// import { axiosInstance } from "../../utils/axios.ts";
// import CustomInput from "../buttons/CustomInput.tsx";
// import FormErrorModal from "../modals/FormErrorModal.tsx";

// const LoginForm = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const { dispatch } = useUserContext();

//   const validateEmail = (email: string) => {
//     const re =
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
//   };

//   const showTemporaryModal = () => {
//     setShowModal(true);
//     setTimeout(() => {
//       setShowModal(false);
//     }, 3000);
//   };

//   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!username || !password) {
//       setError("Ingrese correo y contraseña");
//       showTemporaryModal();
//       return;
//     }
//     if (!validateEmail(username)) {
//       setError("Ingrese un correo válido");
//       showTemporaryModal();
//       return;
//     }
//     try {
//       const response = await axiosInstance.post("Security/Login", {
//         username,
//         password,
//       });
//       if (response.data.token) {
//         localStorage.setItem("token", response.data.token);
//         dispatch({
//           type: "LOGIN_SUCCESS",
//           payload: {
//             token: response.data.token,
//             email: response.data.email,
//             username: response.data.username,
//           },
//         });
//         console.log(response.data);
//       }
//     } catch (error) {
//       setError(error.response.data);
//       showTemporaryModal();
//     }
//   };

//   return (
//     <form className={style.form} onSubmit={handleLogin}>
//       {showModal && <FormErrorModal error={error} />}
//       <div>
//         <CustomInput
//           type="text"
//           placeholder="Email"
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <div>
//         <CustomInput
//           type="password"
//           placeholder="Contraseña"
//           showPasswordIcon
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <button className={style.button} type="submit">
//         Iniciar sesión
//       </button>
//     </form>
//   );
// };

// export default LoginForm;

// Versión original
// import React, { useState } from "react";
// import { useUserContext } from "../../hooks/UserContext.tsx";
// import { Link } from "react-router-dom";
// import {
//   TextField,
//   Button,
//   Container,
//   Typography,
//   Box,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
// import { ThemeProvider } from "@mui/material/styles";
// import theme from "../../styles/theme.tsx";
// import GoogleButton from "../buttons/GoogleButton.tsx";
// import style from "./login-view.module.css";
// import { axiosInstance } from "../../utils/axios.ts";

// const LoginForm = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const { dispatch } = useUserContext();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const response = await axiosInstance.post("Security/Login", {
//       username,
//       password,
//     });
//     if (response.data.token) {
//       localStorage.setItem("token", response.data.token);
//       dispatch({
//         type: "LOGIN_SUCCESS",
//         payload: {
//           token: response.data.token,
//           // email: response.data.email,
//           // username: response.data.username,
//         },
//       });
//       console.log(response.data);
//     }
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container maxWidth="sm" sx={{ justifyContent: "center" }}>
//         <Box
//           sx={{
//             marginTop: 2.5,
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           <Typography component="h1" variant="h6">
//             <div className={style.title}>
//               <h3>Hola de nuevo,</h3>
//               <p>Por favor inicia sesión</p>
//             </div>
//           </Typography>
//           <Box
//             component="form"
//             onSubmit={handleLogin}
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             sx={{ mt: 3, width: "100%" }}
//           >
//             <TextField
//               variant="outlined"
//               margin="normal"
//               sx={{
//                 backgroundColor: "#EFEFF0",
//                 width: "90%",
//               }}
//               required
//               id="login-email"
//               label="Correo"
//               name="login-email"
//               autoComplete="email"
//               autoFocus
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               sx={{
//                 backgroundColor: "#EFEFF0",
//                 width: "90%",
//               }}
//               required
//               name="login-password"
//               label="Contraseña"
//               type={showPassword ? "text" : "password"}
//               id="login-password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={togglePasswordVisibility}>
//                       {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <Link to="#">
//               <p>¿Olvidaste tu contraseña?</p>
//             </Link>
//             <Button
//               type="submit"
//               variant="contained"
//               color="secondary"
//               sx={{ mt: 2 }}
//             >
//               Iniciar sesión
//             </Button>
//           </Box>
//           <section className={style.divider}>
//             <div></div>
//             <p>O inicia sesión con</p>
//             <div></div>
//           </section>
//           <GoogleButton />
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default LoginForm;
