import { useContext, useEffect } from "react"
import { ThemeContext } from "../Context/Theme/Context"
import Wrapper from "../Wrapper"

const Home = () => {
    const { coursesList } = useContext(ThemeContext)
    return (
        <>
            <Wrapper>
                {JSON.stringify(coursesList)}
            </Wrapper>
        </>
    )
}

export default Home