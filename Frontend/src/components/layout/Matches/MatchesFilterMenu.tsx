import { useState } from "react";
import { Box, Button, Divider, Fade, Menu, Typography } from "@mui/material";
import { LuArrowDownUp, LuClock4, LuListFilter, LuStar } from "react-icons/lu";

interface MatchesFilterMenuProps {
  selected: string;
  handleSelect: (label: string) => void;
}

const MatchesFilterMenu: React.FC<MatchesFilterMenuProps> = ({
  selected,
  handleSelect,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectAndClose = (label: string) => {
    handleClose();
    handleSelect(label);
  };

  return (
    <div>
      <Button
        startIcon={<LuArrowDownUp />}
        onClick={handleClick}
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
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
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        TransitionComponent={Fade}
        sx={{
          "& .MuiMenu-paper": {
            borderRadius: 3,
            bgcolor: "white",
          },
          "& .MuiMenu-list": {
            p: 0,
          },
        }}
      >
        <Box
          sx={{
            width: 180,
            height: "100%",
            bgcolor: "#F3F4F5",
          }}
        >
          <Typography
            color="secondary"
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "white",
              gap: 1,
              px: 1,
            }}
          >
            <LuArrowDownUp />
            <span>Ordenar por</span>
          </Typography>
          <Divider />
          <Button
            onClick={() => handleSelectAndClose("Ligas")}
            color={selected == "Ligas" ? "primary" : "secondary"}
            startIcon={<LuListFilter />}
            sx={{ textTransform: "none" }}
          >
            Ligas
          </Button>
          <Divider />
          <Button
            onClick={() => handleSelectAndClose("Horario")}
            color={selected == "Horario" ? "primary" : "secondary"}
            startIcon={<LuClock4 />}
            sx={{ textTransform: "none" }}
          >
            Horario
          </Button>
          <Divider />
          <Button
            onClick={() => handleSelectAndClose("Trending")}
            color={selected == "Trending" ? "primary" : "secondary"}
            startIcon={<LuStar />}
            sx={{ textTransform: "none" }}
          >
            Trending
          </Button>
        </Box>
      </Menu>
    </div>
  );
};

export default MatchesFilterMenu;
