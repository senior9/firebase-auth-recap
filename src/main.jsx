import React, { Children, createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import UserProvider from './Components/Provider/UserProvider.jsx';
import Order from './Components/Order/Order.jsx';
import Private from './Components/PrivateRoute/Private.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children :[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/orders",
        element: <Private><Order></Order></Private>
      },

    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>

  </React.StrictMode>,
)
