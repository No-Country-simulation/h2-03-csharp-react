import { Stack, Typography } from "@mui/material";
import { useMatchContext } from "../../../hooks/useMatchContext";
import dates from "../../../utils/predictions-tab-dates";

const MatchDetailResult = () => {
  const { match } = useMatchContext();

  return (
    match && (
      <Stack
        direction="row"
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 3,
          pt: 3,
        }}
      >
        <Stack sx={{ gap: 1 }}>
          <img
            src={match.teamsAPI.homeAPI.teamAPI.logoUrl || ""}
            width={100}
            height={100}
          />
          <Typography variant="caption" align="center" color="secondary.light">
            {match.teamsAPI.homeAPI.teamAPI.name}
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="h6" align="center">{dates.dateFormat(match.date)}</Typography>
          <Typography variant="h3">{match.time}</Typography>
        </Stack>
        <Stack sx={{ gap: 1 }}>
          <img
            src={match.teamsAPI.awayAPI.teamAPI.logoUrl || ""}
            width={100}
            height={100}
          />
          <Typography variant="caption" align="center" color="secondary.light">
            {match.teamsAPI.awayAPI.teamAPI.name}
          </Typography>
        </Stack>
      </Stack>
    )
  );
};

export default MatchDetailResult;
