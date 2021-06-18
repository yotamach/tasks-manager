import React, { useEffect, useState } from 'react'
import { getLoaderSelector } from '../../store/loader/selectors'
import { CircularProgress } from './node_modules/semantic-ui-react'

const Loader = () => {
	const [isLoading, setLoading] = useState(false)
	useEffect(() => {
		setLoading(getLoaderSelector);
	}, [])

	return (isLoading && <CircularProgress />);
}

export default Loader;