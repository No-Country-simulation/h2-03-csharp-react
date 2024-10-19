import { Box, Typography } from "@mui/material";
import bronze from "../../../assets/bronze.png";
import silver from "../../../assets/silver.png";
import gold from "../../../assets/gold.png";
// import bronzeLocked from "../../../assets/bronze-locked.png";
import silverLocked from "../../../assets/silver-locked.png";
import goldLocked from "../../../assets/gold-locked.png";

interface RankingsHeaderProps {
  division: string;
}

const RankingsHeader: React.FC<RankingsHeaderProps> = ({ division }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          mb: 3,
        }}
      >
        <img src={division === "bronce" ? bronze : silverLocked} alt="bronze" />
        <img
          src={division === "plata" ? silver : silverLocked}
          alt="silver"
          height={150}
          width={80}
        />
        <img
          src={division === "oro" ? gold : goldLocked}
          alt="gold"
          height={150}
          width={80}
        />
      </Box>

      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
        }}
      >
        División {division}
      </Typography>
    </Box>
  );
};

export default RankingsHeader;
