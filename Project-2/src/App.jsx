import './App.css'

function App(){


  // state
  let arr=[10,20,30]
  function test(){
    console.log("test called")
  }
  function addSum(a,b){
    console.log(a+b)
  }

  
  return(
    <div>
      <h1 className='text-primary'>React</h1>
      {/* for non paramized funtion */}
      <button onClick={test}>Click</button> 
      <br />
      {/* for paramized function */}
      <button onClick={()=>addSum(10,20)}>Sum</button>
    </div>
  )
}
export default App;

// adding bootstrap-->go to react bootstrap