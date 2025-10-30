// src/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		// Use small delay so scroll happens after page render
		const timeout = setTimeout(() => {
			window.scrollTo({ top: 0, behavior: "instant" });
		}, 0);
		console.log("-----------------------------------")
		return () => clearTimeout(timeout);
	}, [pathname]);

	return null;
}
