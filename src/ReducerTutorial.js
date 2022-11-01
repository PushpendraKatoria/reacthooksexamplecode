import { useReducer } from "react"
import axios from 'axios'


const reducer = (state, action) => {
    switch(action) {
        case 'INCREMENT':
            return {count:state.count+1, showText:state.showText}
            
        case 'TOGGLE_TEXT':
            return {count:state.count, showText:!state.showText}
        default:
            return state;
    }
}

const ReducerTutorial = () => {
    
    const [state, dispatch] = useReducer(reducer, {count:0, showText:true})

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=> {
                dispatch('INCREMENT')
            }}>
                CounterCLick
            </button>

            <button onClick={()=> {
                dispatch('TOGGLE_TEXT')
            }}>
                Toggle text
            </button>

            {state.showText && <p>This is text</p>}
        </div>
    )
}

export default ReducerTutorial;