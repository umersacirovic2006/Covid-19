import { Route, Routes } from 'react-router'
import './App.scss'
import Nav from './components/Nav/Nav'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import CovidStats from './Pages/Country/Country'
import Footer from './components/Footer/Footer'
import Country from './Pages/Countries/Countries'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country' element={<Country />} />
        <Route path='/about' element={<About />} />
        <Route path='/covid-stats' element={<CovidStats />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
