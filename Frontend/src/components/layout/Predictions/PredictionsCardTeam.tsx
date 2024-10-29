import { Box, Typography } from "@mui/material";

interface PredictionsCardTeamProps {
  imageSrc: string;
  label: string;
}

const PredictionsCardTeam: React.FC<PredictionsCardTeamProps> = ({
  imageSrc,
  label,
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <img width={18} height={18} src={imageSrc} />
      <Typography noWrap variant="body1" sx={{ maxWidth: 120 }}>
        {label}
      </Typography>
    </Box>
  );
};

export default PredictionsCardTeam;
