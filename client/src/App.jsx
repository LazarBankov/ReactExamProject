import { Routes, Route } from 'react-router'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Catalog from './components/catalog/Catalog'
import DetailsProduct from './components/details/DetailsProduct'
import About from './components/about/About'
import ErrorComponent from './components/error/ErrorComponent'
import Cart from './components/cart/Cart'
import './App.css'

function App() {

  return (
      <div className='container'>
        <Header />
        <main className='main'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/catalog/:prductId' element={<DetailsProduct/>} />
            <Route path='/catalog' element={<Catalog/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/cart/:userId' element={<Cart/>} />
            <Route path='/error' element={<ErrorComponent/>} />
            <Route path='*' element={<ErrorComponent/>} />
          </Routes>
        </main>
        <Footer />
      </div>
  )
}

export default App
