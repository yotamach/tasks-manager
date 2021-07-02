import React, { useEffect, useState } from 'react'
import { Loader } from 'semantic-ui-react'
import { getLoaderSelector } from '../../store/loader/selectors'

const LoaderSpin = () => {
	const [isLoading, setLoading] = useState(false)
	useEffect(() => {
		setLoading(getLoaderSelector);
	}, [])

	return (isLoading && <Loader />);
}

export default LoaderSpin;