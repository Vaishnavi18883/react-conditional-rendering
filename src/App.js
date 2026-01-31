import React from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Cart from './components/Cart'
import { StoreProvider } from './context/StoreContext'
import{BrowserRouter,Router,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>

      <StoreProvider>
        
      
      
    

      <Router>
        <Navbar />
          <Product />
        <Routes>
          <Route path='/cart' element= { <Cart />}/>

          
        </Routes>
      </Router>
        </StoreProvider>
    </div>
  )
}

export default App