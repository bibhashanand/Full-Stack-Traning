import { useState } from "react";

function Clicked() {
    const [count, setCount] = useState(0);
    return(
        <div>
            <p></p>
            <p>You Clicked {count} times</p>
            <button onClick={()=> setCount(count + 1)}>
                Click Me!
            </button>
        </div>
    );
}

export default Clicked;