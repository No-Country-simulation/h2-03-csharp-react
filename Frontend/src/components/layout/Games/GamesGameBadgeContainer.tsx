import { ReactNode } from "react";
import { Paper, Stack, Typography } from "@mui/material";
import { leagues } from "../../../utils/leagues";

interface GamesGameBadgeContainerProps {
  children: ReactNode;
  league?: string;
  label?: string;
}

const GamesGameBadgeContainer: React.FC<GamesGameBadgeContainerProps> = ({
  children,
  league,
  label,
}) => {
  const getLeagueIcon = () => {
    let leagueIcon = "";
    leagues.forEach((element) => {
      if (league == element.name) {
        leagueIcon = element.src as string;
      }
    });
    return leagueIcon;
  };

  const icon = getLeagueIcon();

  return (
    <Paper elevation={4} sx={{ borderRadius: 3, mb: 1 }}>
      <Stack
        direction="row"
        sx={{
          p: 2,
          height: 32,
          backgroundColor: "white",
          justifyContent: "start",
          alignItems: "center",
          gap: 1,
        }}
      >
        <img width={18} height={18} src={icon} />
        <Typography variant="caption">
          {league}
          {label}
        </Typography>
      </Stack>
      {children}
    </Paper>
  );
};

export default GamesGameBadgeContainer;
