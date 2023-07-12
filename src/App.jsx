import { Route, Routes } from 'react-router'
import './App.scss'
import Nav from './components/Nav/Nav'
import Home from './Pages/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
