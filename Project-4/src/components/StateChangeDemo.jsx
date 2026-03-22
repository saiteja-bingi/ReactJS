import {useState} from 'react';

function StateChangeDemo(){
    // state
    const [counter,setCounter]=useState(0);
    const incCounter=()=>{
        setCounter(counter+1);
    }

    const [student,setStudent]=useState({
        name:"John",
        age:20
    })
    const changeStudent=()=>{
        setStudent({...student,name:"bhanu"})
    }

    const [marks,setMarks]=useState([10,20,30])
    const addMarks=()=>{
        setMarks([...marks,40])
    }   

    return(
        <div className="text-center">
            <h1 className="text-center">State Change Demo</h1>
            <p className="text-center">{counter}</p>
            <button className="btn btn-primary" onClick={incCounter}>Increment</button>
            <p className="text-center">{student.name}</p>
            <button className="btn btn-primary" onClick={changeStudent}>Change Student</button>
            {
                marks.map((mark,index)=><h3>{mark}</h3>)
            }
            <button className="btn btn-primary" onClick={addMarks}>Add Marks</button>
        </div>
    )
}

export default StateChangeDemo;

// rerender should be happened