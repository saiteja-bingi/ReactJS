// create context object
import { createContext, useState } from "react"
export const counterContextObject=createContext()

function CounterContext(props){
    // state
    let [counter,setCounter]=useState(100)
    function increment(){
        setCounter(counter+2)
    }
    function decrement(){
        setCounter(counter-1)
    }
    return( 
        <counterContextObject.Provider value={{counter,increment,decrement}}>
            {props.children}
        </counterContextObject.Provider>
    )
}

export default CounterContext