import TechLinks from "./TechLinks";
import spacecapsule from '../assets/spacecapsule.jpg'
const Spacecapsule = () => {
    return(
        <div className="launch-wrapper">
            <TechLinks/>
            <div className="tech-container">
                <div className="tech-description">
                    <h5>The terminology...</h5>
                    <h3>Space Capsule</h3>
                    <p>
                       A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you will spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.
                    </p>
                </div>
                <div className="tech-image">
                    <img src={spacecapsule} alt="spacecapsule" />
                </div>
            </div>
        </div> 
    );
};
export default Spacecapsule