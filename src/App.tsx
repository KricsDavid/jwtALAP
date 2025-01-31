
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  <BrowserRouter>
    <Routes>
    <Route path='/login' Component={LoginPage} ></Route>
    <Route path='/transactions' Component={TransactionListPage} ></Route>
      <Route path='/' Component={HomePage} ></Route>
    </Routes>


  </BrowserRouter>
  
}

export default App
