import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './components/Login.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const routes = createBrowserRouter([{
  path:'/',
  element:<Login />
},{
  path:'/home',
  element:<App />,
}])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
