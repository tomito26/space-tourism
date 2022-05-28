import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Destination from './pages/Destination'
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import Moon from './components/Moon';
import Mars from './components/Mars';
import Europa from './components/Europa';
import Titan from './components/Titan';

function App() {
  return (
    < Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destination' element={<Destination/>}>
          <Route path='/destination' element={<Moon/>} />
          <Route path='mars' element={<Mars/>}/>
          <Route path='europa' element={<Europa/>}/>
          <Route path='titan' element={<Titan/>}/>
        </Route>
        <Route path='/crew' element={<Crew/>}/>
        <Route path='/technology' element={<Technology/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
