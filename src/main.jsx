import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './navbar'
import Content1 from './content1'
import Carrusel from './content2'
import Content3 from './content3'
import Footer from './footer'
import Login from './login'
import Register from './register'
import Pawercon from './pawercon'
import { BrowserRouter as Router, createBrowserRouter, RouterProvider } from 'react-router-dom'
 
const router = createBrowserRouter([
  {
    path: '/',
    element: [ <NavBar/>,<Content1/>, <Content3/>,<Carrusel/>],

  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/registrarse',
    element: <Register/>
  },
  {
    path: '#INICIO',
    element: [ <NavBar/>,<Content1/>,<Content3/>,<Carrusel/>],
  },
  {
    path: '#EVENTOS',
    element: [ <NavBar/>,<Content1/>,<Content3/>,<Carrusel/>],
  },
  {
    path: "/pawercon",
    element: [<Pawercon/>]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <RouterProvider router={router}/> 
    <Footer/>
  </React.StrictMode>
)
