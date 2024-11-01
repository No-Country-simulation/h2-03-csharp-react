import { Tab, Tabs } from "@mui/material";
import dates from "../../../utils/games-tab-dates";
import { useGameContext } from "../../../hooks/useGameContext";

const GamesTabs = () => {
  const { dateValue, handleChangeDate } = useGameContext();
  
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

export default GamesTabs;
