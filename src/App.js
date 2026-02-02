import React from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Cart from './components/Cart'
import { StoreProvider } from './context/StoreContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
