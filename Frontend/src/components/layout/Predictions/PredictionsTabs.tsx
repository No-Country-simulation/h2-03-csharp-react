import { Tab, Tabs } from "@mui/material";
import dates from "../../../utils/predictions-tab-dates";

export interface PredictionsTabsProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const PredictionsTabs: React.FC<PredictionsTabsProps> = ({
  value,
  handleChange,
}) => {
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="inherit"
      variant="scrollable"
      sx={{
        width: "100%",
        "& .MuiTabs-indicator": { backgroundColor: "white" },
      }}
    >
      <Tab label="Todos" />
      {dates?.map((date, index) => (
        <Tab key={index} label={date} />
      ))}
    </Tabs>
  );
};

export default PredictionsTabs;
