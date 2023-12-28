import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';

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

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById('root')
);
