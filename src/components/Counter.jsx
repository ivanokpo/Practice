import { useState } from "react"; 
const Counter = () => {

    const [count, setCount] = useState(44);

    const increment = () => {
        setCount(count + 1);

    }

    return (
        <>
            <input type="number" readonly value={count}/>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </>
    )
}

export default Counter;