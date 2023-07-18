import './index.scss'
import Layout from '../Layout';
import RPS from '../../assets/images/RPS.png'
// import SortMe from '../../assets/images/SortMe.png'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { Loader } from 'react-loaders'
import './design.scss'



const $ = selector => {
    return document.querySelector(selector);
  };
  
  const next = () => {
    if ($(".hide")) {
      $(".hide").remove(); 
    }
  
    /* Step */
  
    if ($(".prev")) {
      $(".prev").classList.add("hide");
      $(".prev").classList.remove("prev");
    }
  
    $(".act").classList.add("prev");
    $(".act").classList.remove("act");
  
    $(".next").classList.add("act");
    $(".next").classList.remove("next");
  
    /* New Next */
  
    $(".new-next").classList.remove("new-next");
  
    const addedEl = document.createElement('li');
  
    $(".list").appendChild(addedEl);
    addedEl.classList.add("next","new-next");
  }
  
  const prev = () => {
    $(".new-next").remove();
      
    /* Step */
  
    $(".next").classList.add("new-next");
  
    $(".act").classList.add("next");
    $(".act").classList.remove("act");
  
    $(".prev").classList.add("act");
    $(".prev").classList.remove("prev");
  
    /* New Prev */
  
    $(".hide").classList.add("prev");
    $(".hide").classList.remove("hide");
  
    const addedEl = document.createElement('li');
  
    $(".list").insertBefore(addedEl, $(".list").firstChild);
    addedEl.classList.add("hide");
  }
  
  const slide = element => {
    /* Next slide */
    
    if (element.classList.contains('next')) {
      next();
      
    /* Previous slide */
      
    } else if (element.classList.contains('prev')) {
      prev();
    }
  }
  

const Slide = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    function handleTouchStart(e) {
        setTouchStart(e.targetTouches[0].clientX);
    }

    function handleTouchMove(e) {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    function handleTouchEnd() {
        if (touchStart - touchEnd > 150) {
            // do your stuff here for left swipe
            next();
        }

        if (touchStart - touchEnd < -150) {
            // do your stuff here for right swipe
            prev();
        }
    }
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return(
<>
<Layout/>
<div className='container projects-page' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
    {/* <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['P','r','o','j','e','c','t','s']}
                        idx={15}
                    />
                </h1>
                <p>Here you will see the various prokects I have completed and some that are ongoing with my development as a software developer.</p>
    </div> */}

    <div className="row">
        <div className='col7'>
        <ul className="list" onClick={(e) => slide(e.target)}>
            <li className="hide"></li>
            <li className="prev"></li>
            <li className="act">
              <a target="blank" rel='noreferrer' href='https://rps-topaz.vercel.app/'>
              <img src={RPS} alt='rps'></img>
           {/* <p>RPS is a simple project with calls to Socket JS to establisha winner and loser 
           between a computer picking Rock Paper Scissors and a human. Later, add ons would be online multiplayer with friends.</p> */}
        </a></li>
            <li className="next"></li>
            <li className="next new-next"></li>
            </ul>
            <div className="swipe" ></div>
        </div>
    </div>
    {/* <Carousel className='img-zone'>
       <a target="blank" rel='noreferrer' href='https://rps-topaz.vercel.app/'>
           <img src={RPS} alt='rps'></img>
           <p>RPS is a simple project with calls to Socket JS to establisha winner and loser 
           between a computer picking Rock Paper Scissors and a human. Later, add ons would be online multiplayer with friends.</p>
        </a>
      <a target="blank" rel='noreferrer' href='https://sort-me.vercel.app/'>
          <img src={SortMe} alt='sortme'></img>
    </a>
        <p>Sort Me is a simple project with calls to Socket JS to establisha winner and loser 
           between a computer picking Rock Paper Scissors and a human. Later, add ons would be online multiplayer with friends.</p>
	</Carousel> */}
</div>
<Loader type='pacman'/>

</>


)}

export default Slide

