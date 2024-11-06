import { ReactNode } from "react";
import Container from "@mui/material/Container";

interface Props {
  children: ReactNode;
}

const LandpageSection = ({ children }: Props) => {
  return (
    <Container maxWidth="lg" sx={{ marginBottom: "5.5rem", width: "100%" }}>
      {children}
    </Container>
  );
};

export default LandpageSection;
