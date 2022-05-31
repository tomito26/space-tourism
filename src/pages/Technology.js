import { Outlet } from "react-router-dom";

const Technology = () => {
    return( 
        <div className="tech">
            <div className="tech-wrapper">
                <h2><span>02</span><span>space launch 101</span></h2>
                <Outlet/> 
            </div>
            
        </div>
    );
};

export default Technology;