import { Box, Typography } from "@mui/material";
import { BiLoaderCircle } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";

export interface PredictionsCardStatusProps {
  status: string|null;
  points: number;
}

const PredictionsCardStatus: React.FC<PredictionsCardStatusProps> = ({
  status,
  points,
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, pt: 1 }}>
      {!status && <BiLoaderCircle color="purple" />}
      {status == "Win" && <FaCheck color="green" />}
      {status == "Lose" && <MdOutlineCancel color="red" />}
      <Typography variant="caption">
        {!status && "Pendiente"}
        {status == "Win" &&
          `Ganaste ${points} puntos con esta predicción`}
        {status == "Lose" && "No ganaste puntos con esta predicción"}
      </Typography>
    </Box>
  );
};

export default PredictionsCardStatus;
