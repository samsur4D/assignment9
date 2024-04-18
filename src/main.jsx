import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Components/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AuthProvider from './Components/AuthProvider.jsx';
import Userprofile from './Pages/Details.jsx';
import Details from './Pages/Details.jsx';
import Protectroute from './Components/Protectroute.jsx';
import Contactus from './Pages/Contactus.jsx';
import NotFound from './Components/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
        {
           path: "/",
           element: <Home></Home>
        },
        {
          path: "/contact",
          element: <Contactus></Contactus>
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path:"/details/:id",
          element: <Protectroute>  <Details></Details>  </Protectroute>
        }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
                <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
