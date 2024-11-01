import { useState } from "react";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import GamesSearch from "./GamesSearch";

const GamesSearchBar = ({ search }: { search?: string }) => {
  const [cancel, setCancel] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleCancel = () => {
    setCancel(false);
    setSearchValue("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 2,
        m: 3,
        zIndex: 1000,
        borderRadius: 2
      }}
    >
      <TextField
        value={searchValue}
        placeholder={search == "game" ? "Busca un partido" : "Busca un jugador"}
        color="primary"
        size="small"
        onChange={handleChange}
        onFocus={() => setCancel(true)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start" sx={{ mr: 3 }}>
                <FaSearch color="#B1B1B1" />
              </InputAdornment>
            ),
          },
        }}
        sx={{ width: "100%", backgroundColor: "#EFEFF0", borderRadius: 2 }}
      />
      {cancel && (
        <Button
          color={"secondary"}
          onClick={handleCancel}
          sx={{ textTransform: "none" }}
        >
          Cancelar
        </Button>
      )}
      {cancel && <GamesSearch />}
    </Box>
  );
};

export default GamesSearchBar;
