import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoaderSpin = () => {
	return (<>
		<CircularProgress />
		<Skeleton animation="wave" />
	</>);
}

export default LoaderSpin;