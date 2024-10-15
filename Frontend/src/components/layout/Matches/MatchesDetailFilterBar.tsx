import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Fade,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MainButton from "../../buttons/MainButton";
import { LuArrowDownUp } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const MatchesDetailFilterBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  return (
    <Box sx={{ mb: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: "400" }}>
          Ligas
        </Typography>
        <MainButton onClick={() => navigate("/predicciones")}>
          Mis predicciones
        </MainButton>
      </Box>
      <div>
        <Button
          startIcon={<LuArrowDownUp />}
          onClick={handleClick}
          sx={{ textTransform: "none" }}
        >
          <Typography color="secondary">Ordenar por</Typography>
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>
            <Typography color="primary">Ligas</Typography>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>Horario</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>Trending</MenuItem>
        </Menu>
      </div>
    </Box>
  );
};

export default MatchesDetailFilterBar;
