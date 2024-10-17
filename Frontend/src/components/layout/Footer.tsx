import useWindowSize from "../../hooks/UseWindowSize";
import style from "./layout.module.css";
import { Link } from "react-router-dom";
import ball from "../../assets/ball.svg";
import coins from "../../assets/coins.svg";
import cup from "../../assets/cup.svg";
import { BiUserCircle } from "react-icons/bi";

interface FooterProps {
  selected: number;
}

const Footer = () => {
  const windowWidth = useWindowSize();
  const isMobile = windowWidth < 768;

  return isMobile ? <MobileFooter selected={0} /> : <DesktopFooter />;
};

// Desktop version of the Footer
const DesktopFooter = () => (
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
        <p>© 2024 WAKI - Todos los Derechos Reservados /</p>
        <p>
          <a href="#"> Aviso legal</a> - <a href="#">Equipo de desarrollo</a>
          {" - "}
          <a href="#">Política de privacidad</a>
        </p>
      </section>
    </div>
  </footer>
);

const MobileFooter = ({ selected }: FooterProps) => {
  return (
    <footer className={style.mobileFooter}>
      <div>
        <Link
          to={"#"}
          className={
            selected === 0 ? `${style.link} ${style.selected}` : style.link
          }
        >
          <img src={coins} alt="coins" />
          <p>Scout player</p>
        </Link>
      </div>
      <div>
        <Link
          to={"#"}
          className={
            selected === 1 ? `${style.link} ${style.selected}` : style.link
          }
        >
          <img src={ball} alt="ball" />
          <p>Partidos</p>
        </Link>
      </div>
      <div>
        <Link
          to={"#"}
          className={
            selected === 2 ? `${style.link} ${style.selected}` : style.link
          }
        >
          <img src={cup} alt="cup" />
          <p>Divisiones</p>
        </Link>
      </div>
      <div>
        <Link
          to={"#"}
          className={
            selected === 3 ? `${style.link} ${style.selected}` : style.link
          }
        >
          <BiUserCircle className={style.icon} />

          <p>Perfil</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
