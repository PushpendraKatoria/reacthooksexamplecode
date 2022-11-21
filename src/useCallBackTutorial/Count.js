import React from "react";

function Count(props) {
    console.log("Count rendering for "+props.text);

    return (
        <div>
            {props.text} is {props.count}
        </div>
    )
}

export default React.memo(Count);