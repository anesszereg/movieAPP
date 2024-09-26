import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Pages/Login/Login.jsx';
import Home from './Pages/Home.jsx';
import Favor from './Pages/Favor.jsx';
import Trending from './Pages/Trending.jsx';
import App from './App.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import Netflix from './Pages/Netflix.jsx';



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signUp",
        element: <SignUp />
    },
    {
        path: '/home',
        element: <Home/>,
        children: [
            {
                path: '/home/favor',
                element: <Favor/>
            },
            {
              path: '/home/trending',
              element: <Trending/>
          },
            {
              path: '/home/netflix',
              element: <Netflix/>
          }

        ]
    }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}/>

    </React.StrictMode>
);
