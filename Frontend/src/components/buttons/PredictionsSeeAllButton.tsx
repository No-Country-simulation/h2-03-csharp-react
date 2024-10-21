import { Typography } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const PredictionsSeeAllButton = () => {
  return (
    <Typography
      variant="caption"
      fontWeight="bold"
      sx={{ ml: 2, color: "primary.main" }}
    >
      <NavLink
        to="/predicciones"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <span>Ver todos</span> <FaArrowRightLong />
      </NavLink>
    </Typography>
  );
};

export default PredictionsSeeAllButton;
