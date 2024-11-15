import { Button, useTheme } from "@mui/material";

interface MainButtonProps {
  children: string;
  disabled?: boolean;
  width?: string | number;
  onClick?: () => void;
}

const MainButton: React.FC<MainButtonProps> = ({
  children,
  disabled = false,
  width,
  onClick,
}) => {
  const theme = useTheme();

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
        background: `linear-gradient(90deg, ${theme.palette.secondary.main} -0.04%, ${theme.palette.primary.main} 99.96%)`,
        "&.Mui-disabled": {
          background: "#B1B1B1",
          opacity: "70%",
          color: theme.palette.secondary.light,
        },
      }}
    >
      {children}
    </Button>
  );
};

export default MainButton;
