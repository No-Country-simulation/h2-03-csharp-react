import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import { SlArrowDown } from "react-icons/sl";
import MatchesDetailFilterBar from "./MatchesDetailFilterBar";
import { leagues } from "../../../utils/leagues";

const MatchesDetail = () => {
  return (
    <Box sx={{ px: 3 }}>
      <MatchesDetailFilterBar />
      <Paper elevation={3}>
        {leagues.map((league, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={
                <Typography color="primary">
                  <SlArrowDown />
                </Typography>
              }
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <img width={32} height={32} src={league.src} />
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  {league.country}
                </Typography>
                <Typography variant="caption">{league.name}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#F3F4F5" }}>
              <Box sx={{ height: 150 }}></Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </Box>
  );
};

export default MatchesDetail;
