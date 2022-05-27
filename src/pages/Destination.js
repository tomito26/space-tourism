import { NavLink, Outlet } from 'react-router-dom';
import moon from '../assets/moon.png'
const Destination = () => {
    return(
        <div className="destination">
            <div className="destination-wrapper">
                <div className="header">
                    <h4><span>01</span><span>Pick your Destination</span></h4>
                </div>
                <div className="container">
                    <div className="destination-image">
                        <img src={moon} alt="moon"/>
                    </div>
                    <div className="wrapper">
                        <ul>
                            <li>
                                <NavLink className="link" to="/destination">moon</NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to='/mars'>mars</NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to="/europa">europa</NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to="/titan">titan</NavLink>
                            </li>
                        </ul>
                        <Outlet/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Destination;