/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Component/Shared/Home/Home';
import About from './Component/About/About';
import User from './Component/Users/Users';
import UserDetails from './Component/User/UserDetails/UserDetails';

function App() {
  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home>},
        { path: '/about', element: <About></About>},
        { path: '/user',
        loader: async () => {
          return fetch('https://jsonplaceholder.typicode.com/users')
        },
        
         element: <User></User>
        },
        {
          path:'*', element:<div>This page is not found <Link to ="/">Go back to home</Link></div>
          
        },
        {
          path:'/user/:userId',
          loader: async ({params}) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
          },
          
          element: <UserDetails></UserDetails>
        }
      ]

    }
    

  ]);
  return (
    <>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  )
}

export default App
