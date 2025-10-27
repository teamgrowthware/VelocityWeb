import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		if ('scrollRestoration' in window.history) {
			window.history.scrollRestoration = 'manual';
		}
	}, []);

	useLayoutEffect(() => {
		console.log('BEFORE SCROLL:', window.scrollY, pathname);
		window.scrollTo(0, 0);
		console.log('AFTER SCROLL:', window.scrollY);
	}, [pathname]);

	useEffect(() => {
		const checkScroll = setInterval(() => {
			if (window.scrollY !== 0) {
				console.log('⚠️ Scroll position changed to:', window.scrollY);
				window.scrollTo(0, 0);
			}
		}, 100);

		const timeout = setTimeout(() => {
			clearInterval(checkScroll);
			console.log('Final scroll position:', window.scrollY);
		}, 1000);

		if (window.gtag) {
			window.gtag("config", "G-NHHSB3447S", {
				page_path: pathname,
			});
		}

		return () => {
			clearInterval(checkScroll);
			clearTimeout(timeout);
		};
	}, [pathname]);

	return null;
};

export default ScrollToTop;