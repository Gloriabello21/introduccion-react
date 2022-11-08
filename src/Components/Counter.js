import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <span>Cantidad: {count}</span>
            <button onClick={() => setCount(count - 1)}>

                restar
                </button>
            <button onClick={() => setCount(count + 1)}>

                Contar
            </button>
            <br />
        </>
    )

}

export default Counter