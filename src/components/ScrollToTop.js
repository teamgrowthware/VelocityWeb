// src/components/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		// stop browser from restoring scroll
		if ("scrollRestoration" in window.history) {
			window.history.scrollRestoration = "manual";
		}

		// scroll to top on every route change
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth" // you can remove this for instant scroll
		});
	}, [pathname]);

	return null;
};

export default ScrollToTop;
