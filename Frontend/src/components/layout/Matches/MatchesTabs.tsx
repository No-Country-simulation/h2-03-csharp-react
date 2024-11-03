import { Tab, Tabs } from "@mui/material";
import dates from "../../../utils/matches-tab-dates";
import { useDatesContext } from "../../../hooks/useDatesContext";

const MatchesTabs = () => {
  const { dateMatchValue, handleChangeMatchDate } = useDatesContext();
  
  return (
    <Tabs
      value={dateMatchValue}
      onChange={handleChangeMatchDate}
      indicatorColor="primary"
      variant="scrollable"
    >
      {dates.generateDates().map((date, index) => {
        return (
          <Tab
            key={index}
            label={dates.dateFormat(date)}
            value={date}
            sx={{
              width: "33%",
              color: "white",
              "&.Mui-selected": {
                color: "secondary.contrastText",
              },
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default MatchesTabs;
