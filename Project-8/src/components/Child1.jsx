import {useContext} from 'react'
import {counterContextObject} from '../contexts/CounterContext'
function Child1(){
    // get state from context
    let {counter,increment,decrement}=useContext(counterContextObject)
    return(
        <div className='bg-secondary text-white p-5 text-center'>
            <h1>Child1</h1>
            <p>Counter:{counter}</p>
            <button onClick={increment} className='btn btn-primary m-2'>Increment</button>
            <button onClick={decrement} className='btn btn-danger m-2'>Decrement</button>
        </div>
    )
}

export default Child1