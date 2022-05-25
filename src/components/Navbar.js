import logo from '../logo.svg'
const  Navbar = () => {
    return(
        <div className="navbar">
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className='line'></div>
                <ul>
                    <li><a className='navlink' href="#home"><span>00</span><span>Home</span></a></li>
                    <li><a className='navlink' href="#destination"><span>01</span><span>Destination</span></a></li>
                    <li><a className='navlink' href="#crew"><span>02</span><span>Crew</span></a></li>
                    <li><a className='navlink' href="#Technology"><span>03</span><span>Technology</span></a></li>
                </ul>
            </nav>
        </div>
    );
};
export default Navbar;