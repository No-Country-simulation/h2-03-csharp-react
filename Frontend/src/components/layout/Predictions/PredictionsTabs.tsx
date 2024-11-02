import { Tab, Tabs } from "@mui/material";
import dates from "../../../utils/predictions-tab-dates";
import { useMatchContext } from "../../../hooks/useMatchContext";

const PredictionsTabs = () => {
  const { dateValue, handleChangeDate } = useMatchContext();

  return (
    <Tabs
      value={dateValue}
      onChange={handleChangeDate}
      textColor="inherit"
      variant="scrollable"
      sx={{
        width: "100%",
        "& .MuiTabs-indicator": { backgroundColor: "white" },
      }}
    >
      <Tab label="Todos" value={"Todos"} />
      {dates.generateDates().map((date, index) => (
        <Tab key={index} label={dates.dateFormat(date)} value={date} />
      ))}
    </Tabs>
  );
};

export default PredictionsTabs;
