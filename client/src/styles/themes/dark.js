
import { createTheme } from '@material-ui/core/styles';
import { blue, purple } from '@material-ui/core/colors';

export const darkTheme = createTheme({
	palette: {
		background: {
			default: "#000000"
		},
		text: {
			primary: blue[200]
		},
		primary: {
			main: blue[800]
		},
		secondary: {
			main: purple[100]
		}
	},
	transitions: {
		duration: {
			shortest: 150,
			shorter: 200,
			short: 250,
			standard: 300,
			complex: 375,
			enteringScreen: 225,
			leavingScreen: 195,
		}
	}
});
