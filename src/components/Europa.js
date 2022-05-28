import europa from '../assets/europa.png'
import DestinationLinks from './DestinationLinks';
const Europa = () =>{
    return(
        <div className="container">
            <div className="destination-image">
                <img src={europa} alt="europa"/>
            </div>
            <div className="wrapper">
                <DestinationLinks/>
                <div className="destination-1">
                    <h1>Europa</h1>
                    <p className="description">
                        The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect  for a bit ice skating, curling, hockey, or simple relaxation in your snug wintery cabin
                    </p>
                    <div className="destination-footer">
                        <div className="footer">
                            <h5>Avg. Distance</h5>
                            <p>628 Mil. Km</p>
                        </div>
                        <div className="footer">
                            <h5>Est. Travel Time</h5>
                            <p>3 Years</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Europa;