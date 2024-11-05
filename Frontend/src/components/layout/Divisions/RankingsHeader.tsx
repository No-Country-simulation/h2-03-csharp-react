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
        margin="auto"
        width="90%"
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          mb: 3,
        }}
      >
        <Box
          component={"img"}
          src={bronze}
          alt="bronze"
          sx={{
            cursor: "pointer",
            width: "7%",
            "@media (max-width: 600px)": { width: "22%" },
          }}
        />
        <Box
          component={"img"}
          src={
            division === "silver" || division === "gold" ? silver : silverLocked
          }
          alt="silver"
          sx={{
            cursor:
              division === "silver" || division === "gold"
                ? "pointer"
                : "not-allowed",
            width: "7%",
            "@media (max-width: 600px)": { width: "22%" },
          }}
        />
        <Box
          component={"img"}
          src={division === "gold" ? gold : goldLocked}
          alt="gold"
          sx={{
            cursor: division === "gold" ? "pointer" : "not-allowed",
            width: "7%",
            "@media (max-width: 600px)": { width: "22%" },
          }}
        />
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
