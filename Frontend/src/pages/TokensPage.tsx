import { useState } from "react";
import { Stack } from "@mui/material";
import TokensHeader from "../components/layout/Tokens/TokensHeader";
import TokensBody from "../components/layout/Tokens/TokensBody";

const TokensPage = () => {
  const [choice, setChoice] = useState(0);
  return (
    <Stack>
      <TokensHeader choice={choice} setChoice={setChoice} />
      <TokensBody view={choice === 0 ? "rankings" : "token"} />
    </Stack>
  );
};

export default TokensPage;
