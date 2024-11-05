import { Box, Typography } from "@mui/material";
import bronze from "../../../assets/bronze.png";
import silver from "../../../assets/silver.png";
import gold from "../../../assets/gold.png";
import silverLocked from "../../../assets/silver-locked.png";
import goldLocked from "../../../assets/gold-locked.png";

interface RankingsHeaderProps {
  userDivision: string; // User's actual division
  division: "bronze" | "silver" | "gold"; // Current view division
  setDivision: (division: "bronze" | "silver" | "gold") => void; // Function to change the division being viewed
}

const RankingsHeader: React.FC<RankingsHeaderProps> = ({
  userDivision,
  division,
  setDivision,
}) => {
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
          component="img"
          src={bronze}
          alt="bronze"
          sx={{
            cursor: "pointer",
            width: "7%",
            "@media (max-width: 600px)": { width: "22%" },
          }}
          onClick={() => setDivision("bronze")}
        />
        <Box
          component="img"
          src={
            userDivision === "silver" || userDivision === "gold"
              ? silver
              : silverLocked
          }
          alt="silver"
          sx={{
            cursor:
              userDivision === "silver" || userDivision === "gold"
                ? "pointer"
                : "not-allowed",
            width: "7%",
            "@media (max-width: 600px)": { width: "22%" },
          }}
          onClick={() => {
            if (userDivision === "silver" || userDivision === "gold") {
              setDivision("silver");
            }
          }}
        />
        <Box
          component="img"
          src={userDivision === "gold" ? gold : goldLocked}
          alt="gold"
          sx={{
            cursor: userDivision === "gold" ? "pointer" : "not-allowed",
            width: "7%",
            "@media (max-width: 600px)": { width: "22%" },
          }}
          onClick={() => {
            if (userDivision === "gold") {
              setDivision("gold");
            }
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
