import React from 'react';
import { createRoot }  from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<HomePage/>
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
