import Modal from "@mui/material/Modal";
import { Paper, Stack, Typography } from "@mui/material";
import { GameData } from "../../../context/GameContext";
import { TbCards } from "react-icons/tb";
import { LuFlagTriangleRight } from "react-icons/lu";
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { GiGoalKeeper } from "react-icons/gi";

interface GameStatsModalProps {
  open: boolean;
  handleClose: () => void;
  game: GameData;
}

const GameStatsModal: React.FC<GameStatsModalProps> = ({
  open,
  handleClose,
  game,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 350,
          height: 120,
          bgcolor: "background.paper",
          borderRadius: 3,
          p: 2,
        }}
      >
        <Stack sx={{ gap: 1 }}>
          <Stack direction="row" sx={{ justifyContent: "end", gap: 3 }}>
            <Typography color="primary">
              <MdKeyboardDoubleArrowRight />
            </Typography>
            <Typography color="primary">
              <MdOutlineKeyboardArrowRight />
            </Typography>
            <Typography color="green">
              <GiGoalKeeper />
            </Typography>
            <Typography color="red">
              <GiGoalKeeper />
            </Typography>
            <Typography color="primary">
              <LuFlagTriangleRight />
            </Typography>
            <Typography color="gold">
              <TbCards />
            </Typography>
            <Typography color="red">
              <TbCards />
            </Typography>
          </Stack>
          <img
            src={game.teamsAPI.homeAPI.teamAPI.logoUrl || ""}
            width={26}
            height={26}
          />
          <img
            src={game.teamsAPI.awayAPI.teamAPI.logoUrl || ""}
            width={26}
            height={26}
          />
        </Stack>
      </Paper>
    </Modal>
  );
};

export default GameStatsModal;
