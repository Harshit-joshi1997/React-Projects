import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import About from '../Navbar/About'
import Services from '../Navbar/Services'
import News from '../Navbar/News'
import App from '../App'
import Tesla from '../Cards/Tesla'
import Bmw1 from '../Cards/Bmw1'
import Bmw2 from '../Cards/Bmw2'
import Bmw3 from '../Cards/Bmw3'

function NavRoutes() {
  return (
    <Router>
      <Navbar />
      <div className="pt-8"> 
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path='/tesla'element={<Tesla/>}/>
          <Route path='/bmw1'element={<Bmw1/>}/>
          <Route path='/bmw2'element={<Bmw2/>}/>
          <Route path='/bmw3'element={<Bmw3/>}/>

        </Routes>
      </div>
    </Router>
  )
}

export default NavRoutes