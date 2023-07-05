import './index.scss'
import Layout from '../Layout';
import RPS from '../../assets/images/RPS.png'
import SortMe from '../../assets/images/SortMe.png'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { Loader } from 'react-loaders'


const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return(
<>
<Layout/>
<div className='container projects-page'>
    <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['P','r','o','j','e','c','t','s']}
                        idx={15}
                    />
                </h1>
                <p>Here you will see the various prokects I have completed and some that are ongoing with my development as a software developer.</p>
    </div>
    <div className='img-zone'>
        <a target="blank" rel='noreferrer' href='https://rps-topaz.vercel.app/'>
            <img src={RPS} alt='rps'></img>
        </a>
        <p>RPS is a simple project with calls to Socket JS to establisha winner and loser 
            between a computer picking Rock Paper Scissors and a human. Later, add ons would be online multiplayer with friends.</p>
        <a target="blank" rel='noreferrer' href='https://sort-me.vercel.app/'>
            <img src={SortMe} alt='sortme'></img>
        </a>
        <p>Sort Me is a simple project with calls to Socket JS to establisha winner and loser 
            between a computer picking Rock Paper Scissors and a human. Later, add ons would be online multiplayer with friends.</p>
            <a target="blank" rel='noreferrer' href='https://rps-topaz.vercel.app/'>
            <img src={RPS} alt='rps'></img>
        </a>
        <p>RPS is a simple project with calls to Socket JS to establisha winner and loser 
            between a computer picking Rock Paper Scissors and a human. Later, add ons would be online multiplayer with friends.</p>
        <a target="blank" rel='noreferrer' href='https://sort-me.vercel.app/'>
            <img src={SortMe} alt='sortme'></img>
        </a>
        <p>Sort Me is a simple project with calls to Socket JS to establisha winner and loser 
            between a computer picking Rock Paper Scissors and a human. Later, add ons would be online multiplayer with friends.</p>
    </div>
</div>
<Loader type='pacman'/>

</>


)}

export default Projects

