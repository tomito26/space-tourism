import mars from '../assets/mars.png'
import DestinationLinks from './DestinationLinks';

const Mars = () =>{
    return( 
        <div className="container">
        <div className="destination-image">
            <img src={mars} alt="mars"/>
        </div>
        <div className="wrapper">
           <DestinationLinks/>
            <div className="destination-1">
                <h1>Mars</h1>
                <p className="description">
                    Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system.It's two and a half times the size of Everest!
                </p>
                <div className="destination-footer">
                    <div className="footer">
                        <h5>Avg. Distance</h5>
                        <p>225 Mil. Km</p>
                    </div>
                    <div className="footer">
                        <h5>Est. Travel Time</h5>
                        <p>9 months</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};
export default Mars;