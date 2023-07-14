import { Route, Routes } from 'react-router'
import './App.scss'
import Nav from './components/Nav/Nav'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Countries from './Pages/Countries/Countries'
import Country from './Pages/Country/Country'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/countries' element={<Countries />} />
        <Route path='/about' element={<About />} />
        <Route path='/country' element={<Country />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
