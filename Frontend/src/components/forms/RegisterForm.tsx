import React, { useState } from "react";
import { useUserContext } from "../../hooks/UserContext.tsx";
import { axiosInstance } from "../../utils/axios.ts";
import style from "./login-view.module.css";
import CustomInput from "../buttons/CustomInput.tsx";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [secondLastName, setSecondLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [isMale, setIsMale] = useState(true);
  // const [isSocialLogin, setIsSocialLogin] = useState(true);
  // const [loginTypeId, setLoginTypeId] = useState(0);
  const [birthDate, setBirthDate] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  const { dispatch } = useUserContext();
  // errors {BirthDate: ["The date format must be DD/MM/YYYY", "The Birthdate must be a valid Date"]}

  const formatDate = (date: string) => {
    const [day, month, year] = date.split("-");
    return `${year}/${month}/${day}`;
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formatDate(birthDate));
    const response = await axiosInstance.post("Security/Register", {
      name: name,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      secondLastName: "Litwin",
      phoneNumber: phoneNumber,
      isMale: true,
      isSocialLogin: true,
      loginTypeId: 0,
      birthDate: formatDate(birthDate),
    });

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          token: response.data.token,
          email: response.data.email,
          username: response.data.username,
        },
      });
      console.log(response.data);
    }
  };

  return (
    <form className={style.form} onSubmit={handleRegister}>
      <div>
        <CustomInput
          type="text"
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <CustomInput
          type="text"
          placeholder="Apellido"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <CustomInput
          type="text"
          placeholder="Teléfono"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div>
        <CustomInput
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <CustomInput
          type="password"
          placeholder="Contraseña"
          showPasswordIcon
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <CustomInput
          type="password"
          placeholder="Repetir contraseña"
          showPasswordIcon
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div>
        <CustomInput
          type="date"
          placeholder="Fecha de nacimiento"
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <button className={style.button} type="submit">
        Registrarse
      </button>
    </form>
  );
};

export default RegisterForm;

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

// const RegisterForm = () => {
//   const [name, setName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [secondLastName, setSecondLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [isMale, setIsMale] = useState(true);
//   const [isSocialLogin, setIsSocialLogin] = useState(true);
//   const [loginTypeId, setLoginTypeId] = useState(0);
//   const [birthDate, setBirthDate] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const { dispatch } = useUserContext();
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const response = await axiosInstance.post("Security/Register", {
//       name: "Wilsconidel",
//       lastName: "Yanez",
//       email: "wius@gmail.com",
//       password: "aA!123456",
//       confirmPassword: "aA!123456",
//       secondLastName: "Litwin",
//       phoneNumber: 935448591,
//       isMale: true,
//       isSocialLogin: true,
//       loginTypeId: 0,
//       birthDate: "25/10/1993",
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
//               <h3>Bienvenido a Waki,</h3>
//               <p>Crea tu cuenta completando los datos</p>
//             </div>
//           </Typography>
//           <Box
//             component="form"
//             onSubmit={handleRegister}
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
//               id="register-username"
//               label="Nombre de usuario"
//               name="register-username"
//               autoComplete="username"
//               autoFocus
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               sx={{
//                 backgroundColor: "#EFEFF0",
//                 width: "90%",
//               }}
//               required
//               id="register-email"
//               label="Correo o teléfono"
//               name="register-email"
//               autoComplete="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               sx={{
//                 backgroundColor: "#EFEFF0",
//                 width: "90%",
//               }}
//               required
//               name="register-password"
//               label="Contraseña"
//               type={showPassword ? "text" : "password"}
//               id="register-password"
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
//             <TextField
//               variant="outlined"
//               margin="normal"
//               sx={{
//                 backgroundColor: "#EFEFF0",
//                 width: "90%",
//               }}
//               required
//               name="register-confirm-password"
//               label="Repetir contraseña"
//               type={showPassword ? "text" : "password"}
//               id="register-confirm-password"
//               autoComplete="current-password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
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
//               Registrarse
//             </Button>
//           </Box>
//           <section className={style.divider}>
//             <div></div>
//             <p>O regístrate con</p>
//             <div></div>
//           </section>
//           <GoogleButton />
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default RegisterForm;
