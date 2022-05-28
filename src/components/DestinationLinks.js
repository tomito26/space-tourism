import { NavLink } from "react-router-dom";

const DestinationLinks = () =>{
    return( 
        <ul>
            <li>
                <NavLink className="link" to="/destination">
                    moon
                </NavLink>
            </li>
            <li>
                <NavLink className="link" to='/destination/mars'>
                    mars
                </NavLink>
            </li>
            <li>
                <NavLink className="link" to="/destination/europa">
                    europa
                </NavLink>
            </li>
            <li>
                <NavLink className="link" to="/destination/titan">
                    titan
                </NavLink>
            </li>
        </ul>
    );
};

export default DestinationLinks