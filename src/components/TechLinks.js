import { NavLink } from "react-router-dom";

const TechLinks = () =>{
    return(
    <ul>
        <li><NavLink style={({isActive})=>{return{backgroundColor: isActive && "#fff", borderRadius: isActive && "100%",color: isActive && "rgb(11, 13,23)" }}} className="vehicle-link" to='/technology/'>1</NavLink></li>
        <li><NavLink style={({isActive})=>{return{backgroundColor: isActive && "#fff", borderRadius: isActive && "100%" ,color: isActive && "rgb(11, 13,23)"}}} className="vehicle-link"  to="/technology/2">2</NavLink></li>
        <li><NavLink style={({isActive})=>{return{backgroundColor: isActive && "#fff", borderRadius: isActive && "100%" ,color: isActive && "rgb(11, 13,23)"}}} className="vehicle-link"  to='/technology/3'>3</NavLink></li>
    </ul>
    );
};

export default TechLinks;