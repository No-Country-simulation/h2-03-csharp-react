import { ReactNode } from "react"
import Container from '@mui/material/Container';

interface Props {
    children: ReactNode,
}

const LandpageSection = ({ children }: Props) => {
	return (
		<Container maxWidth="lg">
			{children}
		</Container>
	);
}

export default LandpageSection