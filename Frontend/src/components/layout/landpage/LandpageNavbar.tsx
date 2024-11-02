import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MainButton from "../../buttons/MainButton";
import { useNavigate } from "react-router-dom";


const LandpageNavbar = () => {
	const navigate = useNavigate();
  return (
			<Box sx={{ flexGrow: 1, background: "transparent" }}>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h3" component="div" sx={{ flexGrow: 2 }}>
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