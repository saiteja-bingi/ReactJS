// create component
import './App.css'
function App(){

  // state
  let username="bhanu"
  let rno=100
  let married=false;
  let person={
    pid:123,
    state:'hyderabad'
  }
  let marks=[10,20,30]

  // return react element using jsx and return
  // a component must be return 1 element
  return(
    <div>
      <h1>React</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <h2>Username: {username}</h2>
      <h2>RollNo: {rno}</h2>
      {/* <h1>{person}</h1> */}
      <h2>{person.pid}</h2>
      {
        marks.map((element,id)=><h2 key={id}>{element}</h2>)
      }
    </div>
  )
}

export default App;