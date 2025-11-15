// src/components/ScrollToTop.js
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useLayoutEffect(() => {
		// stop browser from restoring scroll
		if ("scrollRestoration" in window.history) {
			window.history.scrollRestoration = "manual";
		}

		// Scroll both window and documentElement to ensure it works in all browsers
		// useLayoutEffect runs synchronously before browser paint
		window.scrollTo(0, 0);
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
	}, [pathname]);

	return null;
};

export default ScrollToTop;
