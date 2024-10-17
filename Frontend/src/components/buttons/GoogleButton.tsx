import { SlSocialGoogle } from "react-icons/sl";
import style from "./google-button.module.css";

const GoogleButton = () => {
  return (
    <button className={style.button}>
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
