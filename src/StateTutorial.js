import { useState } from "react";

const StateTutorial = () => {
    const [counter, setCounter] = useState(0);

    const clickHandler = () => {
        setCounter(counter+1)
    }
    return <div>
        {counter}<button onClick={clickHandler}>increment</button>
    </div>
}

export default StateTutorial;