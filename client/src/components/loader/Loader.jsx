import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
}));

const LoaderSpin = () => {
	const classes = useStyles();
	const {loader = false} = useSelector(state => state.loader)
	return (<>
		<Backdrop className={classes.backdrop} open={loader} >
			<CircularProgress color="inherit" />
		</Backdrop>
	</>);
}

export default LoaderSpin;