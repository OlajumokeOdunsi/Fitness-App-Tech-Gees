import React from 'react'
import Footer from "../pages/footer/Footer"
import Main from "../pages/herosection/Main"
import Login from "../forms/login/Login"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'




const Show = () => {
  return (
    <>
    <BrowserRouter>
    <Main/>
    <Routes>
    <Route path = "/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default Show
