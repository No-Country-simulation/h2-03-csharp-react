import { Button } from "@mui/material";

interface MainButtonProps {
  children: string;
  disabled?: boolean;
  onClick?: () => void;
}

const MainButton: React.FC<MainButtonProps> = ({
  children,
  disabled = false,
  onClick,
}) => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={disabled}
      sx={{
        textTransform: "none",
        minWidth: "fit-content",
        borderRadius: 2,
        "&.Mui-disabled": {
          backgroundColor: "secondary.light",
          color: "primary.light",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default MainButton;
