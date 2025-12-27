import { useState } from 'react'
import LoginPage from './pages/loginPage'
import AdminPage from './pages/adminPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Testing from './pages/testing'
import { Toaster } from 'react-hot-toast'

function App() {
  

  return (
    <div>
     <BrowserRouter>
     <Toaster position='top-right'/>
          <Routes path= "/*">
            <Route path= "/admin/*" element={<AdminPage/>}/>
            <Route path = "/login" element={<LoginPage/>}/>
             <Route path = "/testing" element={<Testing/>}/>
            <Route path='/' element={<h1>Home</h1>}/>
            <Route path='/*'  element={<h1>404 Not Found</h1>}/>
            </Routes>     
     
     </BrowserRouter>
    </div>
  )
}

export default App
