import { useEffect, useState } from "react";

const useMobile = () => {
    const [mobileOnly, setMobileOnly] = useState(false)
    const resize = () => {
        const windwoWidth = window.innerWidth <= 990;
        setMobileOnly(windwoWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", resize);
        const windwoWidth = window.innerWidth <= 990;
        console.log("windwoWidth", window.innerWidth)
        setMobileOnly(windwoWidth)
        resize();
    }, [resize])
    return (
        {
            mobileOnly: mobileOnly
        }
    )
}

export default useMobile