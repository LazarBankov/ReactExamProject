import { Routes, Route } from 'react-router'

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Catalog from './components/catalog/Catalog'
import DetailsProduct from './components/details/DetailsProduct'

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
          </Routes>
        </main>
        <Footer />
      </div>
  )
}

export default App
