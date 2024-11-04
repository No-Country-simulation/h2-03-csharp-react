import { useState, useEffect } from "react";
import { SlSocialGoogle } from "react-icons/sl";
import style from "./google-button.module.css";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { TokenResponse } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../hooks/UserContext";
import wakiBack from "../../apis/waki-back";

const GoogleButton = () => {
  const [user, setUser] = useState<TokenResponse | null>(null);

  const navigate = useNavigate();
  const { dispatch } = useUserContext();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  // useEffect(() => {
  //   if (user) {
  //     axios
  //       .get(
  //         `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${user.access_token}`,
  //             Accept: "application/json",
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         wakiBack
  //           .post("security/login", {
  //             email: res.data.email,
  //             username: res.data.name,
  //             picture: res.data.picture,
  //           })
  //           .then((backendRes) => {
  //             localStorage.setItem("token", backendRes.data.token);
  //             dispatch({
  //               type: "LOGIN_SUCCESS",
  //               payload: {
  //                 token: backendRes.data.token,
  //                 email: res.data.email,
  //                 username: res.data.name,
  //               },
  //             });
  //             navigate("/partidos");
  //           })
  //           .catch((err) => console.log("Error in backend login", err));
  //       })
  //       .catch((err) => console.log("Google API Error:", err));
  //   }
  // }, [user]);

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          const randomPassword = "aA!123456";
          wakiBack
            .post("security/register", {
              name: res.data.name,
              lastName: "Prueba",
              email: res.data.email,
              password: randomPassword,
              confirmPassword: randomPassword,
              secondLastName: "Prueba",
              phoneNumber: 0,
              isMale: true,
              isSocialLogin: true,
              loginTypeId: 0,
              birthDate: "05/05/2000",
            })
            .then((backendRes) => {
              localStorage.setItem("token", backendRes.data.token);
              dispatch({
                type: "LOGIN_SUCCESS",
                payload: {
                  token: backendRes.data.token,
                  email: res.data.email,
                  username: res.data.name,
                },
              });
              navigate("/partidos");
            })
            .catch((err) => console.log("Error in backend login", err));
        })
        .catch((err) => console.log("Google API Error:", err));
    }
  }, [user]);

  return (
    <button className={style.button} onClick={() => login()}>
      Google
      <SlSocialGoogle className={style.logo} />
    </button>
  );
};

export default GoogleButton;

// Versión original
// import { FcGoogle } from "react-icons/fc";
// import style from "./google-button.module.css";

// const GoogleButton = () => {
//   return (
//     <div className={style.button}>
//       <FcGoogle className={style.googleLogo} />
//       <p>Continuar con Google</p>
//       <div></div>
//     </div>
//   );
// };

// export default GoogleButton;
