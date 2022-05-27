import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Destination from './pages/Destination'
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import Moon from './components/Moon';

function App() {
  return (
    < Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destination' element={<Destination/>}>
          <Route path='/destination' element={<Moon/>} />
        </Route>
        <Route path='/crew' element={<Crew/>}/>
        <Route path='/technology' element={<Technology/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
