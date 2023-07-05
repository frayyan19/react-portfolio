import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import Layout from '../Layout';
import Loader from 'react-loaders';
import { useEffect, useState } from 'react';
import resumePDF from '../../assets/docs/FadeyRayyanSWE.pdf'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
}, [])

    
    return (
        <>
        <div className='container about-page'>
            <Layout/>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','M','e']}
                        idx={15}
                    />
                </h1>
                <p>Manufacturing Engineer at General Motors with a passion for new technology and software, 
                    I thrive on delivering solutions to complex problems while pushing boundaries to innovate. 
                    With a major in Mechanical Engineering and minors in Computer Science and Entrepreneurship, 
                    I am dedicated to revolutionizing the field through transformative ideas and technology. 
                    Ready to contribute my skills and creativity to drive innovation and impact.</p>
            </div>
            <embed className="doc-zone" src={resumePDF} type="application/pdf"/>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default About