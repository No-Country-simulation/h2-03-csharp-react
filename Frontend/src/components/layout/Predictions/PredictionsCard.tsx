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
            imageSrc="https://s3-alpha-sig.figma.com/img/ab4b/173b/81ec863d62c7a815a787cfc6538195bd?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X9VjPKfOpoFCnmuIN3~~Yzp~kGPGmnufGf3A-GqYDop555eG~jSP7FL0eubFawZcB4zah0BEpfBr3T-L8SDvNomhHUPKs-Dh5A3Lbe~Ran3YnfLLaa05PCiYhwd7zw7vZuvwDHqnXnkFt6zfda5fA3J6JBqQ3TVDy2KxwM1iC5ZscBe4i9~cFRao~vArXFz9MW-CmFvKJXc1cdYLQ69BoZWJjb2PCSczE7v42CnV6p5xZN51RBJRl-MnjruqwJp5gKPKcmWjURDpCPMmna3OGeQg8xNjQ0qy~xcwD1YyDhLxzcQRRQXs2GNXiFdtNe2OUjQLUWjtLUAxpKG-GaOREg__"
            label="Barcelona"
          />
          <PredictionsCardTeam
            imageSrc="https://s3-alpha-sig.figma.com/img/7d4c/b9ed/431290fcfc98939b4de374071c11bd75?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PRY3zgFyP4mdZF885fmPqNGGVD2vyNYkZSPRDJ7JAuA8dT1QisieZ6pz0dqOVw1JaMOJCQzk-HpvnPD12s0~i9V4pnd0i6uzxpJAF22845412dTYpyei75AH1BHmxbbrZDFvFLu~Eq0lP~27RiVyNc3NmQFxEx1iRrne9hr4I4FONDBsgiACkLat9aYvtoC6SnLbjjCWLtjifIiyDeECNbg2TDR2buyVlggzbXE5a2WDTnT9eG-eV3gju5puQdb6Au5lKqufjmoR3kNxrcbvdgsap1ZBUKSPgNNLArVjwoy4vuL720tyyY00eK0drm1-x~Gk77an2XiOOk9vGyxTUQ__"
            label="Osasuna"
          />
        </Box>
        <Typography
          variant="h6"
          sx={{
            color: "primary.main",
            ...(status == "UnearnedPoints" && {
              textDecoration: "line-through",
              color: "secondary.dark"
            }),
            ...(status == "PointsEarned" && {
              color: "secondary.main"
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
