import { useState } from "react";
import { FormControlLabel, Switch } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";

const SwitchButton = () => {
  const theme = useTheme();
  const [isEnabled, setIsEnabled] = useState(true);

  const handleToggle = () => {
    setIsEnabled((prev) => !prev);
  };

  return (
    <FormControlLabel
      label=""
      control={
        <Switch
          checked={isEnabled}
          onChange={handleToggle}
          sx={{
            "& .MuiSwitch-thumb": {
              backgroundColor: isEnabled
                ? theme.palette.secondary.main
                : "white",
            },
            "& .MuiSwitch-track": {
              backgroundColor: isEnabled ? "green" : "gray",
            },
            "&.Mui-checked .MuiSwitch-thumb": {
              transform: "translateX(20px)",
            },
          }}
        />
      }
      labelPlacement="start"
    />
  );
};

export default SwitchButton;
