import { ReactNode } from "react";
import { Paper, Stack, Typography } from "@mui/material";

interface MatchesMatchBadgeContainerProps {
  children: ReactNode;
  leagueIcon?: string;
  leagueName?: string;
}

const MatchesMatchBadgeContainer: React.FC<MatchesMatchBadgeContainerProps> = ({
  children,
  leagueIcon,
  leagueName,
}) => {

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
        <img width={18} height={18} src={leagueIcon} />
        <Typography variant="caption">
          {leagueName}
        </Typography>
      </Stack>
      {children}
    </Paper>
  );
};

export default MatchesMatchBadgeContainer;
