import { Box, Typography } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import theme from "../../../../styles/theme";

interface RankingTabProps {
  position: number;
  player: string;
  released: number;
  price: number;
}

const RankingTab: React.FC<RankingTabProps> = ({
  position,
  player,
  released,
  price,
}) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "2fr 5fr 2fr 2fr 1fr",
        alignItems: "center",
        textAlign: "center",
        padding: 1.5,
        width: "100%",
      }}
    >
      <Typography
        sx={{
          color: theme.palette.secondary.main,
          fontSize: "24px",
          fontWeight: 400,
        }}
      >
        {position}
      </Typography>
      <Typography sx={{ fontSize: "16px", fontWeight: 400, textAlign: "left" }}>
        {player}
      </Typography>
      <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
        {released}k
      </Typography>
      <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
        {price}
      </Typography>
      <IoIosArrowForward color={theme.palette.secondary.main} fontSize={20} />
    </Box>
  );
};

export default RankingTab;
