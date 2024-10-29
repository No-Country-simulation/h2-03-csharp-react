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
      variant={!disabled ? "contained" : "outlined"}
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
          background: "transparent",
          color: "#B1B1B1",
          borderColor: "#B1B1B1"
        },
      }}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
