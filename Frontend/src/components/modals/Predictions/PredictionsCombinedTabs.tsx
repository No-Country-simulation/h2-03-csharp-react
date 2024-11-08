import { Stack, Tab, Tabs } from "@mui/material";
import dates from "../../../utils/predictions-tab-dates";
import { useDatesContext } from "../../../hooks/useDatesContext";
import { RiCircleLine } from "react-icons/ri";

const PredictionsCombinerTabs = () => {
  const { datePredictionValue, handleChangePredictionDate } = useDatesContext();

  return (
    <Tabs
      value={datePredictionValue}
      onChange={handleChangePredictionDate}
      textColor="inherit"
      variant="scrollable"
      sx={{
        color: "white",
        width: "100%",
        "& .MuiTabs-indicator": { backgroundColor: "white" },
      }}
    >
      {dates.generateDates().map((date, index) => {
        return (
          <Tab
            icon={dates.dateFormat(date) !== "Hoy" ?
              <Stack
                direction="row"
                sx={{ justifyContent: "center", gap: 0.5 }}
              >
                <RiCircleLine />
                <RiCircleLine />
              </Stack> : ""
            }
            key={index}
            label={dates.dateFormat(date)}
            value={date}
          />
        );
      })}
    </Tabs>
  );
};

export default PredictionsCombinerTabs;
