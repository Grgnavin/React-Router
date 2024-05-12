import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import About from './components/Aboutus/About';
import Layout from './Layout';
import Home from './components/Home/home'
import Contact from './components/ContactUs/ContactUs';
import About from './components/Aboutus/About';
import User from './components/User/User';
import Github, { githubInfoLoader } from './components/Github/Github';



// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     children: [
//       {
//       path: "/",
//       element: <Home />
//     }, {
//       path:"about",
//       element: <About />
//     }, {
//       path: "Contact",
//       element: <Contact />
//     }]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route
        loader={githubInfoLoader}
        path='github' element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
