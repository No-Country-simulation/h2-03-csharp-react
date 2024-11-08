import { Stack, Typography } from "@mui/material";
import { FaCircle, FaRegCircle } from "react-icons/fa6";
import { useCountBetsContext } from "../../../hooks/useCountBetsContext";
import { useMatchContext } from "../../../hooks/useMatchContext";
import { useEffect } from "react";

const PredictionsCount = () => {
  const { countBets, handleSetFullBets } = useCountBetsContext();
  const { matchesForCombined } = useMatchContext();

  useEffect(() => {
    const full = countBets + matchesForCombined.length + 1;
    if (full == 5) {
      handleSetFullBets(true);
    } else {
      handleSetFullBets(false);
    }
  }, [countBets, handleSetFullBets, matchesForCombined]);

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
        {Array.from(
          { length: countBets + matchesForCombined.length + 1 },
          (_, index) => (
            <FaCircle key={index} />
          )
        )}
        {Array.from(
          { length: 5 - countBets - matchesForCombined.length - 1 },
          (_, index) => (
            <FaRegCircle key={index} />
          )
        )}
      </Stack>
    </Stack>
  );
};

export default PredictionsCount;
