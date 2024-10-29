import { ReactNode } from "react";
import { Paper, Stack, Typography } from "@mui/material";
import setLeagueIcon from "../../../utils/league-set-icons";

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

  const icon = setLeagueIcon(league);

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
