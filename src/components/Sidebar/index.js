import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/FR.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faBriefcase, faMinus} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
    const [MenuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setMenuOpen(!MenuOpen);
    }
    return (
        <div>
            <div className={`menu-toggle ${MenuOpen ? 'close' : ''}`} onClick={handleMenuToggle}>
                <i className='fa'><FontAwesomeIcon  icon={faMinus} color="#4d4d4e"/></i>
                <i className='fa'> <FontAwesomeIcon icon={faMinus} color="#4d4d4e"/></i>
                <i className='fa'><FontAwesomeIcon icon={faMinus} color="#4d4d4e"/></i>
            </div>
            <div className={`menu ${MenuOpen ? 'show' : ''}`}>
                <div className={`menu-nav ${MenuOpen ? 'show' : ''}`}>
                    <div className={`menu-nav-item ${MenuOpen ? 'show' : ''}`}>
                    {/* <Link className='logo' to='/'>
                                <img src={Logo} alt="logo" />
                     </Link> */}
                        
                    <div className='nav-bar'>
                        <nav>
                            <NavLink exact="true" activeclassname="active" to='/'>
                                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                            </NavLink>
                            <NavLink exact="true" activeclassname="active" className="about-link" to='/about'>
                                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                            </NavLink>
                            <NavLink exact="true" activeclassname="active" className="contact-link" to='/contact'>
                                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                            </NavLink>
                            <NavLink exact="true" activeclassname="active" className="projects-link" to='/projects'>
                                <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e"/>
                            </NavLink>
                            <a className="linkedin-link" target="blank" rel='noreferrer' href='https://www.linkedin.com/in/fadey-rayyan-b4a13314a'>
                                <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
                            </a>
                        </nav>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
    )
};

export default Sidebar