import './App.css'
import Product from './components/Product'

function App() {
  //state
  let productsList = [
    { pid: 100, name: "TV", price: 6000 },
    { pid: 200, name: "Washing machine", price: 8000 },
    { pid: 300, name: "Vacuum cleaner", price: 5000 }
  ];

  return (
    <div>
      {/* Nest Product component */}
      <Product data={productsList[0]} />
      <Product data={productsList[1]} />
      <Product data={productsList[2]} />
    </div>
  )
}

export default App
