import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
const ScrollToTop = ({
	path = ''
}) => {
	const newPath = useLocation();
	useEffect(() => {
		if (newPath !== path) {
			window.scrollTo(0, 0);
		}
	}, [newPath, path])
	console.log("newPath !== path", newPath !== path, newPath, path)
	return (
		<>
		</>
	)
}

export default ScrollToTop;