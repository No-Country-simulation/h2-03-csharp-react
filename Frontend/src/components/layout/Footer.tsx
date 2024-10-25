import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/UseWindowSize";
import style from "./layout.module.css";
import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import ball from "../../assets/icons/ball.svg";
import coins from "../../assets/icons/coins.svg";
import cup from "../../assets/icons/cup.svg";

const Footer = () => {
  const windowWidth = useWindowSize();
  const isMobile = windowWidth < 768;

  return isMobile ? <MobileFooter /> : <DesktopFooter />;
};

// Desktop version of the Footer
const DesktopFooter = () => (
  <footer className={style.footer}>
    <div>
      <section className={style.nav}>
        <Link to={"/ingresar"}>Ingresar</Link>
        <Link to={"/predicciones"}>Predicciones</Link>
        <Link to={"/partidos"}>Partidos</Link>
        <Link to={"/divisiones"}>Divisiones</Link>
        <Link to={"/perfil"}>Perfil</Link>
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

const MobileFooter = () => {
  const [selected, setSelected] = useState<number>();

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/scoutplayers":
        setSelected(0);
        break;
      case "/partidos":
        setSelected(1);
        break;
      case "/divisiones":
        setSelected(2);
        break;
      case "/perfil":
        setSelected(3);
        break;
    }
  }, [location]);

  return (
    <footer className={style.mobileFooter}>
      <div>
        <Link
          to={"/scoutplayers"}
          onClick={() => setSelected(0)}
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
          to={"/partidos"}
          onClick={() => setSelected(1)}
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
          to={"/divisiones"}
          onClick={() => setSelected(2)}
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
          to={"/perfil"}
          onClick={() => setSelected(3)}
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
