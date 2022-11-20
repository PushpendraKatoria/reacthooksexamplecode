import axios from "axios";
import { useEffect, useState } from "react";

const EffectTutorial = () => {
    const [data, setData] = useState("")
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((res)=>{
            setData(res.data[0].email)
            console.log("API is called")
        });

        return function() {
            console.log("Cleanup is happening")
            // setData("");
        }
    },[data])

    return (
        <div>
            <h1>Email: {data.toLowerCase()}</h1>
            
        </div>
    )
}

export default EffectTutorial;