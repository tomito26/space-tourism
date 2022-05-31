import spaceport from '../assets/spaceport.jpg'
import TechLinks from './TechLinks';
const Spaceport = () =>{
    return(
        <div className="launch-wrapper">
            <TechLinks/>
            <div className="tech-container">
                <div className="tech-description">
                    <h5>The terminology...</h5>
                    <h3>Spaceport</h3>
                    <p>
                        A spaceport or cosmodrome is a site for launching(or receiving)spacecraft, by analogy to the seaport for ships or airport for aircrafts. Based in the famous Cape Canaveral, our spaceport is ideally sistuated to take advantage of the Earth's rotation for launch.
                    </p>
                </div>
                <div className="tech-image">
                    <img src={spaceport} alt="spaceport" />
                </div>
            </div>
        </div> 
    );
};

export default Spaceport;