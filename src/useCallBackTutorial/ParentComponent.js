import { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function ParentComponent() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(25000)

    const incrementAge =useCallback(() => {
        setAge(age+1);
    },[age])

    const increamentSalary =useCallback(() => {
        setSalary(salary+1000);
    },[salary])

    return (
        <div>
            <Title/>
            <Count text='age' count={age} />
            <Button handleClick={incrementAge}>Increment my age</Button>
            <Count text='salary' count={salary} />
            <Button handleClick={increamentSalary}>Increment my salary</Button>
        </div>
    )
}

export default ParentComponent;