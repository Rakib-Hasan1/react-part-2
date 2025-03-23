import { useState } from "react"

export default function Counter () {
    const [count, setCount] = useState(0);

    const countAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }



    const counterStyle = {
        border: '2px solid yellow'
    }
    return(
        <div style={counterStyle}>
            <h2>Count : {count}</h2>
            <button onClick={countAdd}>Add</button>
        </div>
    )
}