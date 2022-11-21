import { useReducer } from "react"

const value = [2,4,6,8,10,12,14,16,18];

const reducer = (state, action) => {
    switch(action) {
        case 'next' : 
            return {position : state.position === value.length-1 ? 0: state.position+1}
        case 'prev' :
            return {position: state.position === 0 ? value.length-1: state.position-1};
    }
}

const ReducerTutorial1 =  () => {
    const [state, dispatch] = useReducer(reducer, {position:0 })

    return (
        <div>
            <button onClick={()=> dispatch('prev')}>Prev</button>
            <button onClick={()=> dispatch('next')}>Next</button>
            <h1>{value[state.position]}</h1>
        </div>
    )
}

export default ReducerTutorial1;