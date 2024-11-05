import { TextField, Box } from "@mui/material";
import { FaMagnifyingGlass } from "react-icons/fa6";
import useTheme from "@mui/material/styles/useTheme";

interface SearchBarProps {
  width?: string;
}

const SearchBar: React.FC<SearchBarProps> = (width) => {
  const theme = useTheme();
  return (
    <TextField
      variant="outlined"
      sx={{
        backgroundColor: theme.palette.secondary.light,
        borderRadius: "15px",
        margin: "auto",
        width: width ? width : "100%",
        "& .MuiOutlinedInput-root": {
          borderRadius: "18px",
          "& fieldset": {
            border: "none",
          },
        },
      }}
      InputProps={{
        startAdornment: (
          <Box sx={{ display: "flex", alignItems: "center", marginRight: 1 }}>
            <FaMagnifyingGlass />
          </Box>
        ),
      }}
      placeholder="Introduce el nombre de tu amigo"
    />
  );
};

export default SearchBar;
