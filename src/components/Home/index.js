// import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss'
import Layout from '../Layout';
import AnimatedLetters from '../AnimatedLetters';
import React, { useState, useEffect} from 'react';
import Loader from 'react-loaders';
import LogoS from '../../assets/images/FadeyProfile.jpg'
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
        <div className="container home-page">
            <Layout/>
            <div className="row">
                <div className='col12'>
                     <img src={LogoS} alt='logo'/>
                </div>
            </div>
            <div className='row'>
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
            </div>
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Home