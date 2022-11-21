import React from "react"
import Child1 from "./Child1"
import Child2 from "./Child2"
import MyContext from "./MyContext"

const Parent =  () => {
    return (
        <MyContext.Provider value={{
            child1: {
             name: 'Pushpendra',
             age: 33
            },
            child2: {
             name: 'Surendra',
             age:31
            },
            grandchild: {
             name: 'Advik',
             age: 1
            }
         }}>
            <Child1 />
            <Child2/>
        </MyContext.Provider>
    )
}

export default Parent;