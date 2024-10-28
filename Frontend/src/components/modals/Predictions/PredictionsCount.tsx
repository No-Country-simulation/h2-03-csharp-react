import { Stack, Typography } from "@mui/material";
import { FaCircle, FaRegCircle } from "react-icons/fa6";

const PredictionsCount = () => {
  return (
    <Stack
      direction="row"
      sx={{
        minHeight: 65,
        bottom: 0,
        justifyContent: "space-around",
        alignItems: "center",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        background: "white",
      }}
    >
      <Typography variant="body2" color="primary" fontWeight="bold">
        Predicciones utilizadas de hoy:
      </Typography>
      <Stack
        direction="row"
        sx={{ color: "primary.main", gap: 1, fontSize: 10 }}
      >
        <FaCircle />
        <FaRegCircle />
        <FaRegCircle />
        <FaRegCircle />
        <FaRegCircle />
      </Stack>
    </Stack>
  );
};

export default PredictionsCount;
