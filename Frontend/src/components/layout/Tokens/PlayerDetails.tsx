import { Box, Divider, Paper, Typography } from "@mui/material";
import calendarIcon from "../../../assets/calendar-icon.svg";
import footballPitchIcon from "../../../assets/football-pitch-icon.svg";
import whistleIcon from "../../../assets/whistle-icon.svg";
import yellowCardIcon from "../../../assets/yellow-card-icon.svg";
import redCardIcon from "../../../assets/red-card-icon.svg";

interface DetailsModalProps {
  player: {
    nationality: string;
    flag: string;
    age: number;
    position: string;
    goals: number;
    matches: number;
    minutes: number;
    assists: number;
    yellowCards: number;
    redCards: number;
    achievements: { description: string; date: string }[];
  };
}

const DetailsModal: React.FC<DetailsModalProps> = ({ player }) => {
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
      <Typography variant="body1" sx={{ fontWeight: "500" }}>
        Datos del jugador
      </Typography>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "8px",
        }}
      >
        <Box sx={{ display: "flex", padding: "0.3rem" }}>
          <Box
            component="img"
            src={player.flag}
            alt="argentinan flag"
            sx={{ margin: "0.5rem 1rem", width: 25 }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="body1"
              sx={{
                opacity: 0.7,
              }}
            >
              Nacionalidad
            </Typography>
            <Typography variant="body1">{player.nationality}</Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", padding: "0.3rem" }}>
          <Box
            component="img"
            src={calendarIcon}
            alt="calendar icon"
            sx={{ margin: "0.5rem 1rem", width: 25 }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="body1"
              sx={{
                opacity: 0.7,
              }}
            >
              Edad
            </Typography>
            <Typography variant="body1">{player.age}</Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", padding: "0.3rem" }}>
          <Box
            component="img"
            src={footballPitchIcon}
            alt="football pitch icon"
            sx={{ margin: "0.5rem 1rem", width: 25 }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="body1"
              sx={{
                opacity: 0.7,
              }}
            >
              Posición
            </Typography>
            <Typography variant="body1">{player.position}</Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", padding: "0.3rem" }}>
          <Box
            component="img"
            src={whistleIcon}
            alt="whistle icon"
            sx={{ margin: "0.5rem 1rem", width: 25 }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="body1"
              sx={{
                opacity: 0.7,
              }}
            >
              Posición
            </Typography>
            <Typography variant="body1">{player.position}</Typography>
          </Box>
        </Box>
      </Paper>

      <Typography variant="body1" sx={{ fontWeight: "500" }}>
        Estadísticas
      </Typography>
      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          width: "100%",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "8px",
            margin: "auto",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              opacity: 0.7,
            }}
          >
            Goles
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "18px", fontWeight: "500" }}
          >
            {player.goals}
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "8px",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              opacity: 0.7,
            }}
          >
            Partidos
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "18px", fontWeight: "500" }}
          >
            {player.matches}
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "8px",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              opacity: 0.7,
            }}
          >
            Minutos
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "18px", fontWeight: "500" }}
          >
            {player.minutes}
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "8px",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              opacity: 0.7,
            }}
          >
            Asistencias
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "18px", fontWeight: "500" }}
          >
            {player.assists}
          </Typography>
        </Paper>
      </Box>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
          padding: "0 0.3rem",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", padding: "0.5rem" }}>
          <Box
            component="img"
            src={yellowCardIcon}
            alt="yellow card icon"
            sx={{ width: "21px" }}
          />
          <Typography
            variant="body1"
            sx={{ flex: 1, fontSize: "14px", fontWeight: "400" }}
          >
            Trajetas amarillas
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", fontWeight: "400" }}
          >
            {player.yellowCards}
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", padding: "0.5rem" }}>
          <Box
            component="img"
            src={redCardIcon}
            alt="red card icon"
            sx={{ width: "21px" }}
          />
          <Typography
            variant="body1"
            sx={{ flex: 1, fontSize: "14px", fontWeight: "400" }}
          >
            Trajetas rojas
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", fontWeight: "400" }}
          >
            {player.redCards}
          </Typography>
        </Box>
      </Paper>

      <Typography variant="body1" sx={{}}>
        Logros
      </Typography>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
          textAlign: "left",
          width: "100%",
        }}
      >
        {player.achievements.map((achievement) => (
          <>
            <Box
              sx={{ display: "flex", padding: "0.5rem 1.5rem", width: "100%" }}
            >
              <Typography sx={{ flex: 1, fontSize: "14px", fontWeight: "400" }}>
                {achievement.description}
              </Typography>
              <Typography
                sx={{ fontSize: "12px", fontWeight: "400", opacity: 0.7 }}
              >
                {achievement.date}
              </Typography>
            </Box>
            {player.achievements.length > 1 &&
              player.achievements.indexOf(achievement) !==
                player.achievements.length - 1 && <Divider />}
          </>
        ))}
      </Paper>
    </Box>
  );
};

export default DetailsModal;
