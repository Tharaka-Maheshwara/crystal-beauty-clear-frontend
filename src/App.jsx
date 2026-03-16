import { useState } from 'react'
import LoginPage from './pages/loginPage'
import AdminPage from './pages/adminPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Testing from './pages/testing'
import { Toaster } from 'react-hot-toast'
import RegisterPage from './pages/client/register'
import HomePage from './pages/homePage'

function App() {
  

  return (
    <div>
     <BrowserRouter>
     <Toaster position='top-right'/>
          <Routes path= "/*">
            <Route path= "/admin/*" element={<AdminPage/>}/>
            <Route path = "/login" element={<LoginPage/>}/>
            <Route path = "/register" element={<RegisterPage/>}/>
             <Route path = "/testing" element={<Testing/>}/>
            <Route path='/*' element={<HomePage/>}/>
            
            </Routes>     
     
     </BrowserRouter>
    </div>
  )
}

export default App
