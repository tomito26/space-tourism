import  { CrewData } from '../components/CrewData'
import { useState } from 'react';

const Crew = () =>{
    const[current,setCurrent] = useState(0);
    const length = CrewData.length;

    if(!Array.isArray(CrewData) || CrewData.length <= 0){
        return null
    };
    return( 
        <div className="crew">        
            <div className="crew-detail">
                <div className="crew-description">
                    <h2>
                        <span>02</span><span>Meet Your Crew</span>
                    </h2>
                    {
                        CrewData.map((crew,index)=>{
                            return(
                                <div className='crew-details' key={index}>
                                    {current === index &&(
                                        <>
                                            <div className='crew-info'>
                                                <h4 className='occupation'>{crew.occupation}</h4>
                                                <h3 className='crew-name'>{crew.name}</h3>
                                                <p className='crew-overview'>{crew.personal_details}</p>
                                            
                                            </div>
                                            <div classname="slider-btn">
                                                <button className={index === 0 ? "active" : ""} onClick={() => setCurrent(0)}></button>
                                                <button className={index === 1 ? "active" : ""}  onClick={() => setCurrent(1)}></button>
                                                <button className={ index=== 2 ? "active" : ""}  onClick={() => setCurrent(2)}></button>
                                                <button className={index === 3 ?"active" : ""}  onClick={() =>setCurrent(3)}></button>
                                            </div>
                                            <img src={crew.image} alt="Douglaus Hurley" />
                                        </>
                                    )}
                                </div>
                            )
                        })
                  
                    }
                </div>
              
            </div>
      
        </div>
    );
};

export default Crew
