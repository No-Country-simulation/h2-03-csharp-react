import { Stack, Typography } from "@mui/material";
import { FaCircle, FaRegCircle } from "react-icons/fa6";
import { useCountBetsContext } from "../../../hooks/useCountBetsContext";

const PredictionsCount = () => {
  const { countBets } = useCountBetsContext();

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
        {Array.from({ length: countBets }, (_, index) => (
          <FaCircle key={index} />
        ))}
        {Array.from({ length: 5 - countBets }, (_, index) => (
            <FaRegCircle key={index} />
          ))}
      </Stack>
    </Stack>
  );
};

export default PredictionsCount;