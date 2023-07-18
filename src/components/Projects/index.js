import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import Layout from '../Layout';
import Loader from 'react-loaders';
import { useEffect, useState } from 'react';
import RPS from '../../assets/images/RPS.png'
import SortMe from '../../assets/images/SortMe.png'


const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return  (      
    <>
    <div className='container'>
        <Layout/>
        <div className='row'>
            <div className='col12'>
                        <h1 className='title'>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['P','r','o','j','e','c','t','s']}
                                idx={15}
                            />
                        </h1>
                    </div>
        </div>
        <div className='row'>
            <div className='col12'>
                <div className='tile-large7'>
                                      
                    <a target="blank" rel='noreferrer' href='https://rps-topaz.vercel.app/'>
                        <img className="photo1" src={RPS} alt='rps'/>
                    </a>
                    <h1>Rock Paper Scissors</h1>
                    <p>RPS is a Web Application developed using the framework NextJS.
                         This was a learning project for me to learn the ins and outs of NextJS.
                          The concept is simple you are able to verse a computer in a game of rock, paper, scissors..definitley harder than versing a human face to face.
                           This fun yet simple game is currently being reimagined for an onlime serverless version
                            that would connect 2 players in a lobby and allow them to verse eachother in an RPS battle.</p>
                </div>
            </div>
        </div>
        
        <div className='row'>
            <div className='col12'>
                <div className='tile-large7'>
                <a target="blank" rel='noreferrer' href='https://sort-me.vercel.app/'>
                        <img className="photo1" src={SortMe} alt='sortme'></img>
                    </a>
                    <h1>Sort Me</h1>
                    <p>Sort Me is a Web Application using NextJS as its framework. 
                        I wanted to display my knowledge of algorithms and specfically sorting algorithms.
                         In Sort Me you can traverse through different sorting algorithms from Bubble sort to Selction Sort and more. 
                         It'll also allow you to understand an visualize what each alogirthm does and in realtime displays the speed at which they run.</p>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col12'>
                <div className='tile-large7'>
                    <a target="blank" rel='noreferrer' href='https://sort-me.vercel.app/'>
                        <img className="photo1" src={SortMe} alt='sortme'></img>
                    </a>
                    <h1>Sort Me</h1>
                    <p>I am a Manufacturing Engineer at General Motors with a passion for new technology and software, 
                        I thrive on delivering solutions to complex problems while pushing boundaries to innovate. 
                        With a major in Mechanical Engineering and minors in Computer Science and Entrepreneurship, 
                        I am dedicated to revolutionizing the field through transformative ideas and technology. 
                        Ready to contribute my skills and creativity to drive innovation and impact.</p>
                </div>
            </div>
        </div>
    </div>
    <Loader type='pacman'/>
    </>
    )
}

export default Projects