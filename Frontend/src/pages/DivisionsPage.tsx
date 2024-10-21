import { Stack } from "@mui/material";
import { useState } from "react";
import DivisionsHeader from "../components/layout/Divisions/DivisionsHeader";
import DivisionsBody from "../components/layout/Divisions/DivisionsBody";

const DivisionsPage = () => {
  const [choice, setChoice] = useState(0);
  return (
    <Stack>
      <DivisionsHeader choice={choice} setChoice={setChoice} />{" "}
      <DivisionsBody
        view={choice === 0 ? "rankings" : choice === 1 ? "rewards" : "missions"}
      />
    </Stack>
  );
};

export default DivisionsPage;
