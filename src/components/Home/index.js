// import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss'
import Layout from '../Layout';
import AnimatedLetters from '../AnimatedLetters';
import React, { useState, useEffect} from 'react';
import Loader from 'react-loaders';
import LogoS from '../../assets/images/FadeyProfile.jpg'
import Slide from "../Slide"
import '../../grid.css'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','F','a','d','e','y',' ','R','a','y','y','a','n']
    const jobArray =['S','o','f','t','w','a','r','e',' ','D','e','v','e','l','o','p','e','r']
        useEffect(() => {
            setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000)
    }, [])

    return (
        <>
        <div className='container'>
            <div className='row'>
                <div className='col12'>
                    <h1 className='title'>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i, </span>
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m </span>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                        <br/>
                        <h2>Software Developer / Mechanical Engieneer</h2>
                    </h1>
                </div>
            </div>
            {/* <div className='row tile-large'>
                
            </div> */}
            <div className='row'>
                <div className='col8'>
                    <div className='tile-large1'>

                        <img className="photo" src={LogoS} alt='logo'/>
                        <h1>Overview</h1>
                        <p>Manufacturing Engineer at General Motors with a passion for new technology and design, I thrive on delivering solutions to complex problems while pushing boundaries to innovate. With a major in Mechanical Engineering and minors in Computer Science and Entrepreneurship, I am dedicated to revolutionizing the field through transformative ideas and technology. Ready to contribute my skills and creativity to drive innovation and impact.</p>
                    </div>
                </div>
                <div className='col4'>
                    <div>
                        <Link to="/about" className='tile-small2'><h1>About Me</h1></Link>
                    </div>
                    <div>
                        <Link to="/contact" className='tile-small2'><h1>Contact Me</h1></Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col11'>
                        <div>
                            <Link to="/projects" className='tile-small3'><h1>Projects</h1></Link>
                            {/* <h1>hey</h1> */}
                            {/* <img className="photo" src={LogoS} alt='logo'/> */}
                        </div>
                    </div>
                    <div className='col1'>
                        <Slide></Slide>
                    </div>
                </div>
                {/* <div className='col7'>
                     <h1>Hi I'm Fadey Rayyan</h1>
                </div> */}
            </div>
            {/* <div className='row'>
                <div className="text-zone">
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i, </span>
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m </span>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15}/>
                    </h1>
                    <h2>Software Developer / Mechanical Engieneer</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
            </div> */}
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Home