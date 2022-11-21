import React from "react";
import GrandChild from "./GrandChild";
import MyContext from "./MyContext";

const Child2 = (props) => {
    return (
        <MyContext.Consumer>
            {value => <div>
                    <div>
                      {value.child2.name}
                    </div>
                    <div>
                        {value.child2.age}
                    </div>
                    <GrandChild />
                </div>}
           
        </MyContext.Consumer>
    )
}

export default Child2;