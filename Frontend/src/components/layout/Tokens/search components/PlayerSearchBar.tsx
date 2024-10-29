import { useState } from "react";
import { Box, Typography } from "@mui/material";
import magnifyingGlass from "../../../../assets/mag-glass-icon.svg";

interface PlayerSearchBarProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  isTyping: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: () => void;
}

const PlayerSearchBar: React.FC<PlayerSearchBarProps> = ({
  setSearchQuery,
  isTyping,
  onSubmit,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    isTyping(true);
    setSearchQuery(event.target.value);
    setInputValue(event.target.value);
  };

  const handleClear = () => {
    isTyping(false);
    setSearchQuery("");
    setInputValue("");
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit();
      event.preventDefault();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EFEFF0",
        borderRadius: "8px",
        height: "38px",
        padding: "0.4rem 0.8rem",
        width: "90%",
      }}
    >
      <Box component={"img"} src={magnifyingGlass} onClick={onSubmit}></Box>
      <Box
        component={"input"}
        value={inputValue}
        onChange={handleChange}
        placeholder="Busca un jugador"
        onKeyDown={handleKeyPress}
        sx={{
          backgroundColor: "inherit",
          border: "none",
          flex: 1,
          height: "30px",
          outline: "none",
          "&::placeholder": {
            color: "black",
            "&:focus": { "&::placeholder": { color: "transparent" } },
          },
        }}
      />
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          padding: "0 0.4rem",
          ...(!inputValue && { display: "none" }),
        }}
        onClick={handleClear}
      >
        Cancelar
      </Typography>
    </Box>
  );
};

export default PlayerSearchBar;
