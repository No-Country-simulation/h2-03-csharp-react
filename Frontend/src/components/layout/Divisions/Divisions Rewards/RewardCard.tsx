import { Box, Typography } from "@mui/material";

interface RewardCardsProps {
  icon: string;
  alt: string;
  text: string;
}

const RewardCard: React.FC<RewardCardsProps> = ({ icon, alt, text }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, padding: 2.5 }}>
      <Box component={"img"} src={icon} alt={alt} sx={{ width: "42px" }} />
      <Typography variant="body1" sx={{ fontSize: "12px", fontWeight: 400 }}>
        {text}
      </Typography>
    </Box>
  );
};

export default RewardCard;
