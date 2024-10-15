import { Box, Typography } from "@mui/material";
import { BiLoaderCircle } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";

export interface PredictionsCardStatusProps {
  status: "Pending" | "PointsEarned" | "UnearnedPoints";
  points: number;
}

const PredictionsCardStatus: React.FC<PredictionsCardStatusProps> = ({
  status,
  points,
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, pt: 1 }}>
      {status == "Pending" && <BiLoaderCircle color="purple" />}
      {status == "PointsEarned" && <FaCheck color="green" />}
      {status == "UnearnedPoints" && <MdOutlineCancel color="red" />}
      <Typography variant="caption">
        {status == "Pending" && "Pendiente"}
        {status == "PointsEarned" &&
          `Ganaste ${points} puntos con esta predicción`}
        {status == "UnearnedPoints" && "No ganaste puntos con esta predicción"}
      </Typography>
    </Box>
  );
};

export default PredictionsCardStatus;
