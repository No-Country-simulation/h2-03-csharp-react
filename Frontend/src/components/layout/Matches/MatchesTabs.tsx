import { Tab, Tabs } from "@mui/material";
import dates from "../../../utils/matches-tab-dates";
import { useMatchContext } from "../../../hooks/useMatchContext";

const MatchesTabs = () => {
  const { dateValue, handleChangeDate } = useMatchContext();
  
  return (
    <Tabs
      value={dateValue}
      onChange={handleChangeDate}
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
