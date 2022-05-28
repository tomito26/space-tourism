import titan from '../assets/titan.png'
import DestinationLinks from './DestinationLinks';
const Titan = () =>{
    return(
        <div className="container">
        <div className="destination-image">
            <img src={titan} alt="titan"/>
        </div>
        <div className="wrapper">
        <DestinationLinks/>
            <div className="destination-1">
                <h1>Titan</h1>
                <p className="description">
                    The only moon known to have a dense atmosphere than other than Earth, Titan is a home away from home(just a few hundred degrees colder!). As a bonus, you get striking views of  the Rings of Saturn
                </p>
                <div className="destination-footer">
                    <div className="footer">
                        <h5>Avg. Distance</h5>
                        <p>1.6 Bil. Km</p>
                    </div>
                    <div className="footer">
                        <h5>Est. Travel Time</h5>
                        <p>7 Years</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Titan;