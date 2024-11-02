import Box from '@mui/material/Box';
import Spline from '@splinetool/react-spline';
import LandpageNavbar from "./LandpageNavbar";
import LpgTeamsSlider from "./LpgTeamsSlider"
import { Stack, Typography } from '@mui/material';
import MainButton from "../../buttons/MainButton";
import { useNavigate } from "react-router-dom";

const LpgFirstSection = () => {
	const navigate = useNavigate();
	return (
		<Stack>
			<Spline scene="https://prod.spline.design/BQaBZbFbtTUK3GQe/scene.splinecode" style={{position: "absolute", inset: "0px", zIndex: "0px"}}/>
			<LandpageNavbar/>
			<Box sx={{
				flexDirection: 'column',
				justifyContent: 'flex-start',
				color: "primary.light"
				}}
			>
				<Typography>
					SIENTE LA
				</Typography>
				<Typography>
					ADRENALINA
				</Typography>
				<Typography>
					DEL FÚTBOL
				</Typography>
			</Box>
			<Box sx={{
				flexDirection: 'column',
				justifyContent: 'flex-end',
				color: "primary.light"
				}}
			>
				<Typography>
					¡HAZ TUS
				</Typography>
				<Typography>
					PREDICCIONES Y
				</Typography>
				<Typography>
					GANA GRANDES
				</Typography>
				<Typography>
					PREMIOS!
				</Typography>
			</Box>
			<Box sx={{
				alignItems: 'center',
				}}
			>
				<MainButton onClick={() => navigate("/ingresar")}>
					Empieza a jugar ahora
				</MainButton>
			</Box>
			<LpgTeamsSlider/>
		</Stack>
	);
}

export default LpgFirstSection
