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

	useEffect(() => {
		window.gtag('config', 'G-NHHSB3447S', {
			page_path: newPath.pathname,
		});
	}, [newPath]);
	console.log("newPath.pathname", newPath.pathname)
	return (
		<>
		</>
	)
}

export default ScrollToTop;