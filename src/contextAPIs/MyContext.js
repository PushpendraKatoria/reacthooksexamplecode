import React from "react";

const user = {
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
}

const MyContext = React.createContext();

export default MyContext;