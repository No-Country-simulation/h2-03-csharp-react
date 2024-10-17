import { Tab, Tabs } from "@mui/material";
import dates from "../../../utils/matches-tabs-dates";

interface MatchesTabsProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const MatchesTabs: React.FC<MatchesTabsProps> = ({ value, handleChange }) => {
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="inherit"
      indicatorColor="primary"
      variant="scrollable"
    >
      {dates?.map((date, index) => (
        <Tab key={index} label={date} sx={{ width: "33%" }} />
      ))}
    </Tabs>
  );
};

export default MatchesTabs;