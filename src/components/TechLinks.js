import { NavLink } from "react-router-dom";

const TechLinks = () =>{
    return(
    <ul>
        <li><NavLink className="vehicle-link" to='/technology'>1</NavLink></li>
        <li><NavLink className="vehicle-link"  to="/technology/2">2</NavLink></li>
        <li><NavLink className="vehicle-link"  to='/technology/3'>3</NavLink></li>
    </ul>
    );
};

export default TechLinks;