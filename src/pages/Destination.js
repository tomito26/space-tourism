import { NavLink, Outlet } from 'react-router-dom';


const Destination = () => {
    return(
        <div className="destination">
            <div className="destination-wrapper">
                <div className="header">
                    <h4><span>01</span><span>Pick your Destination</span></h4>
                </div>
                <Outlet/>
            </div>
            
        </div>
    );
};

export default Destination;