import { Button } from "@mui/material";

interface SecondaryButtonProps {
  children: string;
  disabled?: boolean;
  width?: string | number;
  onClick?: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  disabled = false,
  width,
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
        width: width,
        minWidth: "fit-content",
        borderRadius: 2,
        background: "rgba(49, 126, 244, 0.31)",
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

export default SecondaryButton;
