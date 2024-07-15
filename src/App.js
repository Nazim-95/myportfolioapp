import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Technologies from './components/Technologies';
import Footer from './components/Footer';




function App() {
  return (
    <Router>
      <Navbar />
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/technologies' element={<Technologies />} />
        <Route path='/contact' element={<Contact />} />
        
      </Routes>
    
    </div>
    <Footer />
    </Router>
  );
}

export default App;
