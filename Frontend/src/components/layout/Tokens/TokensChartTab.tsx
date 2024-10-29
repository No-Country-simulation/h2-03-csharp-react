import { useState } from "react";
import { Box, Typography } from "@mui/material";
import TokenViewerModal from "./TokenViewerModal";

import bronzeMini from "../../../assets/bronze-mini-icon.svg";
import silverMini from "../../../assets/silver-mini.png";
import goldMini from "../../../assets/gold-mini-icon.svg";
import arrowRightIcon from "../../../assets/arrow-right-icon.svg";

interface TokensChartTabProps {
  position: number;
  name: string;
  div: string;
  tokens: number;
  price: number;
}

const TokensChartTab: React.FC<TokensChartTabProps> = ({
  position,
  name,
  div,
  tokens,
  price,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        onClick={handleOpen}
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr 1fr 2fr 1fr 0.1fr",
          backgroundColor: "#F3F4F5",
          padding: "0.3rem 1rem",
          textAlign: "center",
          cursor: "pointer",
          "&:hover": {
            opacity: 0.7,
          },
        }}
      >
        <Typography
          sx={{
            color: "secondary.main",
            fontSize: "24px",
            fontWeight: 400,
            margin: "auto",
          }}
        >
          {position}
        </Typography>
        <Typography sx={{ fontSize: "14px", margin: "auto" }}>
          {name}
        </Typography>

        <Box
          component={"img"}
          src={
            div === "silver"
              ? silverMini
              : div === "gold"
              ? goldMini
              : bronzeMini
          }
          alt="division icon"
          sx={{ margin: "auto" }}
        />
        <Typography sx={{ fontSize: "14px", margin: "auto" }}>
          {tokens}k
        </Typography>
        <Typography sx={{ fontSize: "14px", margin: "auto" }}>
          {price}
        </Typography>
        <Box
          component={"img"}
          src={arrowRightIcon}
          alt="right arrow icon"
          sx={{ margin: "auto auto auto 10px" }}
        />
      </Box>
      <TokenViewerModal
        open={open}
        handleClose={handleClose}
        position={position}
        name={name}
        div={div}
        tokens={tokens}
        price={price}
      />
    </>
  );
};

export default TokensChartTab;
