import logo from '../logo.svg'
import { NavLink } from 'react-router-dom';
const  Navbar = () => {
    return(
        <div className="navbar">
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className='line'></div>
                <ul>
                    <li><NavLink className='navlink' to="/"><span>00</span><span>Home</span></NavLink></li>
                    <li><NavLink className='navlink' to="/destination/"><span>01</span><span>Destination</span></NavLink></li>
                    <li><NavLink className='navlink' to="/crew/"><span>02</span><span>Crew</span></NavLink></li>
                    <li><NavLink className='navlink' to="/technology/"><span>03</span><span>Technology</span></NavLink></li>
                </ul>
            </nav>
        </div>
    );
};
export default Navbar;