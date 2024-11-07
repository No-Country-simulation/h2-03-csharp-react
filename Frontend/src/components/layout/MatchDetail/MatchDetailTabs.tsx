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
      variant="fullWidth"
      sx={{
        width: "100vw",
        backgroundColor: "primary.dark",
        "& .MuiTabs-indicator": { backgroundColor: "secondary.contrastText", height: 5 },
      }}
    >
      {options.map((option, index) => (
        <Tab
          key={index}
          label={option}
          sx={{
            textTransform: "none",
            color: "gray",
            "&.Mui-selected": {
                color: "white",
                fontSize: "bold"
              },
          }}
        />
      ))}
    </Tabs>
  );
};

export default MatchDetailTabs;
