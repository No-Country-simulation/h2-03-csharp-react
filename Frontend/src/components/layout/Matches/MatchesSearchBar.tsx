import { useState } from "react";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import MatchesSearch from "./MatchesSearch";

const MatchesSearchBar = () => {
  const [cancel, setCancel] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 2,
        m: 3,
      }}
    >
      <TextField
        placeholder="Busca un jugador"
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
        sx={{ width: "100%", backgroundColor: "#EFEFF0" }}
      />
      {cancel && (
        <Button
          color="secondary"
          onClick={() => setCancel(false)}
          sx={{ textTransform: "none" }}
        >
          Cancelar
        </Button>
      )}
      {cancel && <MatchesSearch />}
    </Box>
  );
};

export default MatchesSearchBar;
