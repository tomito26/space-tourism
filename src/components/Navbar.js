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
                    <li><NavLink className='navlink' style={({isActive})=>{return{borderBottom: isActive && "2px solid #fff"}}} to="/"><span><strong>00</strong>Home</span></NavLink></li>
                    <li><NavLink className='navlink' style={({isActive})=>{return{borderBottom: isActive && "2px solid #fff"}}} to="/destination/"><span><strong>01</strong>Destination</span></NavLink></li>
                    <li><NavLink className='navlink' style={({isActive})=>{return{borderBottom: isActive && "2px solid #fff"}}} to="/crew/"><span><strong>02</strong>Crew</span></NavLink></li>
                    <li><NavLink className='navlink' style={({isActive})=>{return{borderBottom: isActive && "2px solid #fff"}}} to="/technology/"><span><strong>03</strong>Technology</span></NavLink></li>
                </ul>
            </nav>
        </div>
    );
};
export default Navbar;