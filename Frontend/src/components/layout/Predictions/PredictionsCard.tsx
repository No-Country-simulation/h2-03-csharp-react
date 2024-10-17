import { Box, Divider, Paper, Typography } from "@mui/material";
import PredictionCardLeague from "./PredictionsCardLeague";
import PredictionsCardTeam from "./PredictionsCardTeam";
import PredictionsCardStatus from "./PredictionsCardStatus";
import { PredictionsCardStatusProps } from "./PredictionsCardStatus";

export interface PredictionsCardProps extends PredictionsCardStatusProps {
  result: string;
}

const PredictionsCard: React.FC<PredictionsCardProps> = ({
  result,
  points,
  status,
}) => {
  return (
    <Paper elevation={4} sx={{ my: 1, py: 1, px: 2, borderRadius: 3 }}>
      <PredictionCardLeague />
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: " center",
          py: 2,
          pr: "5%",
        }}
      >
        <Box sx={{ pl: { sm: 1, md: 2 } }}>
          <Typography variant="caption">Resultado final:</Typography>
          <Typography variant="h6">{result}</Typography>
        </Box>
        <Box>
          <PredictionsCardTeam
            imageSrc="https://s3-alpha-sig.figma.com/img/ab4b/173b/81ec863d62c7a815a787cfc6538195bd?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dmuUZ4O0VU5GUZ1vfmCqYOsJQqPi7QnPMKOVd5X2H~gwUzOys5Vs5UVbf05MBrJMKbOUz-Rxndw8~YzpgLjfTFZnHvHds4QrKTzD34crI~lsTp~Whl834jGz6Wjch2BFXTrv4qXW08ZkSXQocEXlxomQ~9Q0ZYftdOWalDOL~fknGhLI0nZ~0eCfhiJcWSvkRy~krrRUuirAjcGjL~JT3FkMGqj4Wb3MnahzIYZCK6HwHhkvZYBwXXNk5s~qc5GauxN1gILJXEz8SS~2J5JqFbWLcjhLo1-5-HbpJYyUfiyWa1LAZFC0MUqZtJzzZynjCdVOFKKPt3lGpBb0PmDdzg__"
            label="Barcelona"
          />
          <PredictionsCardTeam
            imageSrc="https://s3-alpha-sig.figma.com/img/7d4c/b9ed/431290fcfc98939b4de374071c11bd75?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TJOASV9DPSflRQ9LwDAyRsBd3fgedB-oJ60K-Y21-GpAVRlUYvv8ShiP55J8MhbiKkca5jOUkJKbX-n8gJ~UJ~o6OYwJQqX089pdbhw6mq6wdFBdcgLP6k34DuDgiW7N1i2~4Nj-vnfG5XjHRfyn0P1okOmYvgbX5Uc6XsxhO0OtpGcOSPbwMwzja-~Y~WfbBpuQ6WwuPB5QV9mxMfub~HJyXjmdeWZGiJJRiAw3tndSs9Q8os~rj2NqEHvNkHqsOCpRRF~CiDOSaMnXMSikWgIrT0Pgq1kF~mytnDVz8trH7ZDoSqPx-kQLJIGuqI27l1fVizwFODQJnqNWAXq7fg__"
            label="Osasuna"
          />
        </Box>
        <Typography
          variant="h6"
          sx={{
            color: "primary.main",
            ...(status == "UnearnedPoints" && {
              textDecoration: "line-through",
              color: "secondary.main"
            }),
            ...(status == "PointsEarned" && {
              color: "blue"
            })
          }}
        >
          {points}
        </Typography>
      </Box>
      <Divider />
      <PredictionsCardStatus status={status} points={points} />
    </Paper>
  );
};

export default PredictionsCard;
