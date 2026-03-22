import { useState, useEffect } from "react"

function UseEffectDemo(){
    const [count,setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
        console.log("Count incremented");
    }

    // empty array means run only once when component is mounted
    useEffect(() => { 
        console.log("Component mounted");
    },[]);
    // [counter1] means run only when counter1 is changed
    // [] means run only once when component is mounted
    // no array means run every time component is re-rendered

    return(
        <div className="text-center">
            <h1>UseEffectDemo</h1>
            <button onClick={() => console.log("Button clicked")}>Click Me</button>
            <br />
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default UseEffectDemo

// render --initial when component loaded
// re-render -- whenever state is loaded