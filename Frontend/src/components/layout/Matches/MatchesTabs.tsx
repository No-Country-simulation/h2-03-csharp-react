import { Tab, Tabs } from "@mui/material";
import dates from "../../../utils/matches-tab-dates";
import { useDatesContext } from "../../../hooks/useDatesContext";

const MatchesTabs = () => {
  const { dateMatchValue, handleChangeMatchDate } = useDatesContext();

  return (
    <Tabs
      value={dateMatchValue}
      onChange={handleChangeMatchDate}
      variant="scrollable"
      scrollButtons
      sx={{
        "& .MuiTabs-indicator": {
          backgroundColor: "primary.main",
          height: 5,
        },
      }}
    >
      {dates.generateDates().map((date, index) => {
        return (
          <Tab
            key={index}
            label={dates.dateFormat(date)}
            value={date}
            sx={{
              width: "33%",
              color: "gray",
              "&.Mui-selected": {
                color: "white",
                fontSize: "bold",
              },
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default MatchesTabs;
