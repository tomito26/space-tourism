import TechLinks from "./TechLinks";
import launchvehicle from '../assets/launchvehicle.jpg'

const LaunchVehicle = () =>{
    return(
        <div className="launch-wrapper">
            <TechLinks/>
            <div className="tech-container">
                <div className="tech-description">
                    <h5>The terminology...</h5>
                    <h3>Launch Vehicle</h3>
                    <p>
                        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from earth's surface to space, usually to earth's orbit  or beyond.Our WEB-X carrier rocket is the most powerful in operation.Standing 150 metres tall, its quite an awe-inspiring sight on launch pad!
                    </p>
                </div>
                <div className="tech-image">
                    <img src={launchvehicle} alt="" />
                </div>
            </div>
        </div>           
       
    );
};

export default LaunchVehicle;