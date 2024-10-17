import { ReactNode } from "react";
import { Paper, Stack, Typography } from "@mui/material";
import { leagues } from "../../../utils/leagues";

interface MatchesMatchBadgeContainerProps {
  children: ReactNode;
  league: string;
}

const MatchesMatchBadgeContainer: React.FC<MatchesMatchBadgeContainerProps> = ({
  children,
  league,
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
        <Typography variant="caption">{league}</Typography>
      </Stack>
      {children}
    </Paper>
  );
};

export default MatchesMatchBadgeContainer;
