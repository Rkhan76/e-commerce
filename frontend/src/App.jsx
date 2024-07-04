import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Pagenotfound from './pages/Pagenotfound'
import Policy from './pages/Policy'
import Contact from './pages/Contact'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import { Toaster } from 'react-hot-toast'

  


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/*" element={<Pagenotfound />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
