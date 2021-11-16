import { createTheme } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';

export const lightTheme = createTheme({
	palette: {
		background: {
			default: "#ffffff"
		},
		primary: {
			main: green[800]
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
