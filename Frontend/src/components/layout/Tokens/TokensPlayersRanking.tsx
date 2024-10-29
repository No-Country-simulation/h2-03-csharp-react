import { useState } from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import upDownArrowIcon from "../../../assets/up-down-arrows-icon.svg";
import TokensChartTab from "./TokensChartTab";

const TokensPlayersRanking = () => {
  const [order, setOrder] = useState("Valor");

  const [players] = useState([
    {
      position: 1,
      name: "Lionel Messi",
      div: "gold",
      tokens: 100,
      price: 500,
    },
    {
      position: 2,
      name: "Cristiano Ronaldo",
      div: "gold",
      tokens: 100,
      price: 500,
    },
    {
      position: 3,
      name: "Kylian Mbappe",
      div: "gold",
      tokens: 100,
      price: 500,
    },
    {
      position: 4,
      name: "Lionel Messi",
      div: "silver",
      tokens: 100,
      price: 500,
    },
    {
      position: 5,
      name: "Cristiano Ronaldo",
      div: "silver",
      tokens: 100,
      price: 500,
    },
    {
      position: 6,
      name: "Kylian Mbappe",
      div: "silver",
      tokens: 100,
      price: 500,
    },
    {
      position: 7,
      name: "Lionel Messi",
      div: "bronze",
      tokens: 100,
      price: 500,
    },
    {
      position: 8,
      name: "Cristiano Ronaldo",
      div: "bronze",
      tokens: 100,
      price: 500,
    },
    {
      position: 9,
      name: "Kylian Mbappe",
      div: "bronze",
      tokens: 100,
      price: 500,
    },
  ]);

  const handleClick = () => {
    if (order === "Valor") {
      setOrder("Precio");
    } else if (order === "Precio") {
      setOrder("Nombre");
    } else if (order === "Nombre") {
      setOrder("Liberados");
    } else if (order === "Liberados") {
      setOrder("Valor");
    }
  };

  return (
    <Box
      sx={{
        borderRadius: "10px",
        margin: "auto",
        width: "90%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          borderRadius: "10px",
          cursor: "pointer",
          padding: 2,
          marginBottom: "0.5rem",
          userSelect: "none",
          "&:hover": { backgroundColor: "#f5f5f5" },
        }}
        onClick={handleClick}
      >
        <Box
          component={"img"}
          src={upDownArrowIcon}
          alt="upDownArrowIcon"
          sx={{ marginRight: "1rem" }}
        />
        <Typography variant="body1">
          Ordenar por: <span style={{ color: "blue" }}>{order}</span>
        </Typography>
      </Box>

      <Paper
        elevation={4}
        sx={{
          borderRadius: "20px",
          margin: "auto",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 3fr 1fr 2fr 1fr 0.4fr",
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "0.3rem 0.7rem",
            textAlign: "center",
          }}
        >
          <Typography variant="body2">#</Typography>
          <Typography variant="body2">Jugador</Typography>
          <Typography variant="body2">Div.</Typography>
          <Typography variant="body2">Liberados</Typography>
          <Typography variant="body2">Precio</Typography>
          <Typography variant="body2"></Typography>
        </Box>
        {players.map((player) => (
          <>
            <TokensChartTab
              key={player.position}
              position={player.position}
              name={player.name}
              div={player.div}
              tokens={player.tokens}
              price={player.price}
            />
            {players.indexOf(player) !== players.length - 1 && <Divider />}
          </>
        ))}
      </Paper>
    </Box>
  );
};

export default TokensPlayersRanking;
