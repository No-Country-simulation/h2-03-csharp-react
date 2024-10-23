import { Tab, Tabs } from "@mui/material";
import dates from "../../../utils/games-tabs-dates";

interface GamesTabsProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const GamesTabs: React.FC<GamesTabsProps> = ({ value, handleChange }) => {
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      variant="scrollable"
    >
      {dates?.map((date, index) => (
        <Tab
          key={index}
          label={date}
          sx={{
            width: "33%",
            color: "white",
            "&.Mui-selected": {
              color: "primary",
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default GamesTabs;
