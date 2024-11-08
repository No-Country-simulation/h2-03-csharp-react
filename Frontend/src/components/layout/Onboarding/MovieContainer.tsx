import { Box, Typography } from "@mui/material";
import movie from "../../../assets/videos/onb-bg.mp4";
import player from "../../../assets/onb-movie-player-with-background.svg";

const MovieContainer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        overflow: "hidden",
        width: "100%",
        zIndex: -1,
      }}
    >
      <Box
        sx={{
          padding: "1.5rem",
          position: "absolute",
          top: "2%",
          right: "5%",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            fontSize: "36px",
            fontWeight: 800,
            lineHeight: 0.9,
            marginBottom: "1.5rem",
          }}
        >
          <span>PREDICE</span>
          <span>EL FUTURO</span>
          <span>DEL FUTBOL</span>
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: "16px",
            fontWeight: 400,
            cursor: "pointer",
          }}
        >
          Haz tus predicciones, acierta los resultados y gana puntos para
          dominar el ranking. Tienes 5 predicciones diarias{" "}
          <span style={{ fontWeight: 800 }}>GRATIS</span>.
        </Typography>
      </Box>
      <Box
        component="video"
        src={movie}
        autoPlay
        loop
        muted
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Box
        component={"img"}
        src={player}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
        }}
      />
    </Box>
  );
};

export default MovieContainer;
