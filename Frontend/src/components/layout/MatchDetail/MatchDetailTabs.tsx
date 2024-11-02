import { useState } from "react";
import { Tab, Tabs } from "@mui/material";

const MatchDetailTabs = () => {
  const [value, setValue] = useState(0);

  const options = ["Predicciones", "Detalles", "Clasificación"];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    event.preventDefault();
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      variant="fullWidth"
      sx={{
        width: "100vw",
        backgroundColor: "primary.dark",
      }}
    >
      {options.map((option, index) => (
        <Tab
          key={index}
          label={option}
          sx={{
            textTransform: "none",
            color: "white",
            "&.Mui-selected": {
                color: "secondary.contrastText",
              },
          }}
        />
      ))}
    </Tabs>
  );
};

export default MatchDetailTabs;
