import React, { useContext } from "react";
import GrandChild from "./GrandChild";
import MyContext from "./MyContext";

const Child1 = () => {
    const value = useContext(MyContext);
    return (
        <div>
            <div>
                {value.child1.name}
            </div>
            <div>
                {value.child1.age}
            </div> 
        </div>
    )
        
}

export default Child1;