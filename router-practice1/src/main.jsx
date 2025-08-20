import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './Component/About/About.jsx'
import Home from "./Component/Home/Home.jsx"
import Counter from './Component/Counter/Counter.jsx'



const router = createBrowserRouter(
createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
  <Route path="/" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="counter" element={<Counter/>}/>
  </Route>
)
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>,
)