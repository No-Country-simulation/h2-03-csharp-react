import Box from '@mui/material/Box';
import Spline from '@splinetool/react-spline';
import LandpageNavbar from "./LandpageNavbar";
import LpgTeamsSlider from "./LpgTeamsSlider";
import LpgFirstTextGroup from "./LpgFirstTextGroup"
import { Stack } from '@mui/material';
import MainButton from "../../buttons/MainButton";
import { useNavigate } from "react-router-dom";


const LpgFirstSection = () => {
	const navigate = useNavigate();
	return (
		<Stack sx={{
			height: "100vh",
			justifyContent: "center",
			background: "black"
			}}
		>
			<Spline scene="https://prod.spline.design/BQaBZbFbtTUK3GQe/scene.splinecode" style={{position: "absolute", inset: "0px", zIndex: "0px"}}/>
			<LandpageNavbar/>
			<LpgFirstTextGroup/>
			<Box sx={{
				flexGrow: 1,
				justifyContent: 'center',
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
