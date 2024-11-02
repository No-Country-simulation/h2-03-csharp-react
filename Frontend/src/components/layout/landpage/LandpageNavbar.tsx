import { useTheme } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MainButton from "../../buttons/MainButton";
import { useNavigate } from "react-router-dom";


const LandpageNavbar = () => {
	const navigate = useNavigate();
	const theme = useTheme();

  return (
		<Box sx={{
			flexGrow: 1,
			background: "transparent",
			}}
			>
			<AppBar position="static">
				<Toolbar sx={{
					borderBottom: 2,
					borderColor: `linear-gradient(90deg, ${theme.palette.secondary.main} -0.04%, ${theme.palette.primary.main} 99.96%)`,
					}}
				>
					<Typography variant="h3" component="div" sx={{ 
						flexGrow: 2,
						fontWeight: 'bold',
						color: `linear-gradient(90deg, ${theme.palette.secondary.main} -0.04%, ${theme.palette.primary.main} 99.96%)`
						}}
					>
						WAKI
					</Typography>
					<MainButton onClick={() => navigate("/ingresar")}>
					Ingresar
				</MainButton>
				</Toolbar>
			</AppBar>
		</Box>
  );
}

export default LandpageNavbar