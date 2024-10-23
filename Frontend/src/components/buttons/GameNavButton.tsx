import { Typography } from "@mui/material";
import { FaArrowLeftLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const GameNavButton = () => {
  return (
    <Typography variant="caption" sx={{ ml: 2, color: "primary.light" }}>
      <NavLink
        to="/partidos"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <FaArrowLeftLong /> <span>Partidos</span>
      </NavLink>
    </Typography>
  );
};

export default GameNavButton;
