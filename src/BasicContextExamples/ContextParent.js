import ThemeContext from "./ThemeContext"
import Toolbar from "./Toolbar"

const ContextParent = () => {
    return (
        <ThemeContext.Provider value='dark'>
            <Toolbar />
        </ThemeContext.Provider>
    )
}

export default ContextParent;