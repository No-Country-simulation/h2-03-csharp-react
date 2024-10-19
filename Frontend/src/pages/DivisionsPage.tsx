import { Stack } from "@mui/material";
import DivisionsHeader from "../components/layout/Divisions/DivisionsHeader";
import DivisionsBody from "../components/layout/Divisions/DivisionsBody";

const DivisionsPage = () => {
  return (
    <Stack>
      <DivisionsHeader selected={0} />
      <DivisionsBody view="rankings" />
    </Stack>
  );
};

export default DivisionsPage;
