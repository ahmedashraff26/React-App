import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About/About'
import Navbar from './Components/Navbar/Navbar'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import Notfound from './Components/Notfound/Notfound'

function App() {

  let router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: '*', element: <Notfound /> },
      ]
    },
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      {/* <Navbar />
      <Home />
      <Portfolio />
      <About />
      <Contact />
      <Footer /> */}
    </>
  )
}

export default App
