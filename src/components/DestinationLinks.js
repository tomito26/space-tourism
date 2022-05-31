import { NavLink } from "react-router-dom";

const DestinationLinks = () =>{
    return( 
        <ul>
            <li>
                <NavLink style={({isActive})=>{return{ color: !isActive ? "rgb(208,214,249)" : "#fff" ,borderBottom: isActive ? "2px solid #fff" : "" ,paddingBottom: isActive ? "5px" : "" }}} className="link" to="/destination">
                    moon
                </NavLink>
            </li>
            <li>
                <NavLink style={({isActive})=>{return{ color: isActive ? "#fff" : "rgb(208,214,249)",borderBottom: isActive ? "2px solid #fff" : "" ,paddingBottom: isActive ? "5px" : "" }}} className="link" to='/destination/mars/'>
                    mars
                </NavLink>
            </li>
            <li>
                <NavLink style={({isActive})=>{return{ color: isActive ? "#fff" : "rgb(208,214,249)",borderBottom: isActive ? "2px solid #fff" : "" ,paddingBottom: isActive ? "5px" : "" }}} className="link" to="/destination/europa/">
                    europa
                </NavLink>
            </li>
            <li>
                <NavLink style={({isActive})=>{return{ color: isActive ? "#fff" : "rgb(208,214,249)",borderBottom: isActive ? "2px solid #fff" : "" ,paddingBottom: isActive ? "5px" : "" }}} className="link" to="/destination/titan/">
                    titan
                </NavLink>
            </li>
        </ul>
    );
};

export default DestinationLinks