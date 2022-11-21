import { useContext } from "react"
import MyContext from "./MyContext"

const GrandChild = () => {
    const val = useContext(MyContext)
    return (
        <div>
            <div>
                {val.grandchild.name}
            </div>
            
            <div>
                {val.grandchild.age}
            </div>
        </div>
    )
}

export default GrandChild;