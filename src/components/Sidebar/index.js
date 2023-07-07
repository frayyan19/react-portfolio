import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/FR.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faBriefcase} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
    const [style, setStyle] = useState("closed");
    const changeStyle = () => {
        if( style === "closed"){
            setStyle("open")
        } else setStyle("closed")
    }
    return (
        <>

        <div className='nav-bar'>
            <div className='menu'>
                <div>
                    <button className="button" onClick={changeStyle}>
                        Click me!
                    </button>
                </div>
            </div>
            <div className={style}>


            <Link className='logo' to='/'>
                <img src={Logo} alt="logo" />
            </Link>
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
            </nav>
            <ul>
                <li>
                    <a target="blank" rel='noreferrer' href='https://www.linkedin.com/in/fadey-rayyan-b4a13314a'>
                        <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
        </div>

        </>
    )
};

export default Sidebar