import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Technologies from './components/Technologies'
import Java from './components/Java'
import Vue from './components/Vue'
import Node from './components/Node'


function App(){
  // routing configuration
  // cretaer browser router object
  const browserRouter = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'register',
          element:<Register/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'technologies',
          element:<Technologies/>,
          children:[
            {
              index:true,
              element:<Java/>
            },
            {
              path:'java',
              element:<Java/>
            },
            {
              path:'vue',
              element:<Vue/>
            },
            {
              path:'node',
              element:<Node/>
            }
          ]
        }
      ]
    }
  ])
    
  return(
    <RouterProvider router={browserRouter}/>
  )
}
export default App;