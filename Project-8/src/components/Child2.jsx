import { useContext } from "react";
import { counterContextObject } from "../contexts/CounterContext";
function Child2(){
    let {counter,increment,decrement}=useContext(counterContextObject)
    return(
        <div className="p-5 bg-warning text-center">
            <h1>Child2</h1>
            <p>Counter:{counter}</p>
            <button onClick={increment} className="btn btn-primary m-2">Increment</button>
            <button onClick={decrement} className="btn btn-danger m-2">Decrement</button>
        </div>
    )
}

export default Child2;