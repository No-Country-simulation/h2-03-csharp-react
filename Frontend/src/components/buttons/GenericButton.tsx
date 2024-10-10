import style from "./generic-button.module.css";

/**
 * Un componente de botón genérico que puede ser personalizado con texto, comportamiento de click y estado deshabilitado.
 *
 * Parámetros:
 *
 * @param {string} text - El texto a mostrar dentro del botón
 * @param {() => void} onClick - La función a ser ejecutada.
 * @param {boolean} disabled - En caso de querer deshabilitar el botón (true por defecto).
 */

const GenericButton = ({
  text,
  onClick,
  disabled = false,
}: {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      className={style.button + " " + (disabled ? style.disabled : "")}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default GenericButton;
