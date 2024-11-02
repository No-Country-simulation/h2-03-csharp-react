import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import CustomLineChart from "./charts/CustomLineChart";
import CustomBarChart from "./charts/CustomBarChart";
import arrowDownIcon from "../../../assets/arrow-down-icon.svg";

const PlayerTokens = () => {
  const [chartType, setChartType] = useState<"línea" | "barra">("línea");
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear - i).reverse();
  const tokens = [
    10000, 9500, 8300, 8800, 8000, 3800, 2300, 1600, 5000, 4050, 2000, 5300,
    6400, 2200, 6400, 5700, 2000, 3500, 4000, 2500,
  ];
  const tokensSum = tokens.reduce((acc: number[], value, index) => {
    if (index === 0) {
      acc.push(value);
    } else {
      acc.push(value + acc[index - 1]);
    }
    return acc;
  }, []);

  const handleClick = () => {
    if (chartType === "línea") {
      setChartType("barra");
    } else {
      setChartType("línea");
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
        padding: "1.5rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          padding: "0 2.5rem",
        }}
      >
        <Button
          variant="contained"
          sx={{ textTransform: "none", width: "50%" }}
        >
          Compra
        </Button>
        <Button variant="outlined" sx={{ textTransform: "none", width: "50%" }}>
          Venta
        </Button>
      </Box>
      <Typography variant="body1" sx={{ fontWeight: "500" }}>
        Liberación Acumulada del Token Anual
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <CustomLineChart
          years={years}
          values={tokensSum}
          maxDomain={200000}
          yAxisLabel="Tokens liberados acumulados"
        />
      </Box>
      <Typography variant="body1" sx={{ fontWeight: "500" }}>
        Liberación de Tokens Anual
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          cursor: "pointer",
          width: "fit-content",
          "&:hover": { textDecoration: "underline" },
        }}
        onClick={handleClick}
      >
        <Box component={"img"} src={arrowDownIcon} alt="flecha hacia abajo" />
        <Typography variant="body1">{chartType}</Typography>
      </Box>
      {chartType === "línea" ? (
        <CustomLineChart
          years={years}
          values={tokens}
          maxDomain={10000}
          yAxisLabel="Tokens liberados"
        />
      ) : (
        <CustomBarChart years={years} values={tokens} />
      )}
    </Box>
  );
};

export default PlayerTokens;
