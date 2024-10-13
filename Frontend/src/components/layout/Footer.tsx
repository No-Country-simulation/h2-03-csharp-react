import style from "./layout.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div>
        <section className={style.nav}>
          <a href="#">Inicio</a>
          <a href="#">Sobre Nosotros</a>
          <a href="#">Soporte</a>
          <a href="#">Términos y condiciones</a>
        </section>
        <section>
          <h3>WAKI</h3>
        </section>
        <hr />
        <section className={style.info}>
          <p>
            © 2024 WAKI - Todos los Derechos Reservados /{" "}
            <a href="#">Aviso legal</a> - <a href="#">Equipo de desarrollo</a>
            {" - "}
            <a href="#">Política de privacidad</a>
          </p>
          <a></a>
          <a></a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

// Versión original
// import { Link } from "react-router-dom";
// import style from "./layout.module.css";
// import ball from "../../assets/ball.svg";
// import coins from "../../assets/coins.svg";
// import cup from "../../assets/cup.svg";

// interface FooterProps {
//   selected: number;
// }

// const Footer = ({ selected }: FooterProps) => {
//   return (
//     <footer className={style.footer}>
//       <div>
//         <Link
//           to={"#"}
//           className={
//             selected === 0 ? `${style.link} ${style.selected}` : style.link
//           }
//         >
//           <img src={coins} alt="coins" />
//           <p>Scout player</p>
//         </Link>
//       </div>
//       <div>
//         <Link
//           to={"#"}
//           className={
//             selected === 1 ? `${style.link} ${style.selected}` : style.link
//           }
//         >
//           <img src={ball} alt="ball" />
//           <p>Partidos</p>
//         </Link>
//       </div>
//       <div>
//         <Link
//           to={"#"}
//           className={
//             selected === 2 ? `${style.link} ${style.selected}` : style.link
//           }
//         >
//           <img src={cup} alt="cup" />
//           <p>Divisiones</p>
//         </Link>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
