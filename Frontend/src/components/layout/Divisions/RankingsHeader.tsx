import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import bronze from "../../../assets/bronze.png";
import silver from "../../../assets/silver.png";
import gold from "../../../assets/gold.png";
// import bronzeLocked from "../../../assets/bronze-locked.png";
import silverLocked from "../../../assets/silver-locked.png";
import goldLocked from "../../../assets/gold-locked.png";

interface RankingsHeaderProps {
  division: string;
}

const Img = styled.img`
  width: 7%;

  @media (max-width: 600px) {
    width: 22%;
  }
`;

const RankingsHeader: React.FC<RankingsHeaderProps> = ({ division }) => {
  return (
    <Box>
      <Box
        margin="auto"
        width="90%"
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          mb: 3,
        }}
      >
        <Img src={division === "bronze" ? bronze : silverLocked} alt="bronze" />
        <Img src={division === "silver" ? silver : silverLocked} alt="silver" />
        <Img src={division === "gold" ? gold : goldLocked} alt="gold" />
      </Box>

      <Typography
        variant="h6"
        mb={3}
        sx={{
          textAlign: "center",
        }}
      >
        División{" "}
        {division === "bronze"
          ? "Bronce"
          : division === "silver"
          ? "Plata"
          : "Oro"}
      </Typography>
    </Box>
  );
};

export default RankingsHeader;
