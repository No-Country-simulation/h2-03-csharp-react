import { Button } from "@mui/material";

interface MainButtonProps {
  children: string;
  disabled?: boolean;
}

const MainButton: React.FC<MainButtonProps> = ({
  children,
  disabled = false,
}) => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
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
