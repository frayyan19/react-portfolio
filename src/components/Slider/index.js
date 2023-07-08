// import React, { useEffect, useRef } from 'react';
// import Hammer from 'hammerjs';
// import RPS from '../../assets/images/RPS.png'
// import SortMe from '../../assets/images/SortMe.png'

// const SliderComponent = () => {

//   // const sliderRef = useRef(null);

//   const $ = selector => {
//     return document.querySelector(selector);
//   };


//   // useEffect(() => {
//   //   const handleSwipeLeft = () => {
//   //     next();
//   //   };

//   //   const handleSwipeRight = () => {
//   //     prev();
//   //   };

//   //   const slide = element => {
//   //     if (element.classList.contains('next')) {
//   //       next();
//   //     } else if (element.classList.contains('prev')) {
//   //       prev();
//   //     }
//   //   };

//   //   // const slider = $(`.list`);
//   //   const swipe = new Hammer(sliderRef.current);

//   //   const slider = event => {
//   //     slide(event.target);
//   //   };

//   //   swipe.on('swipeleft', handleSwipeLeft);
//   //   swipe.on('swiperight', handleSwipeRight);

//   //   return () => {
//   //     // Clean up event listeners
//   //     swipe.off('swipeleft', handleSwipeLeft);
//   //     swipe.off('swiperight', handleSwipeRight);
//   //   };
//   // }, []);

//   const next = () => {
//     if ($('.hide')) {
//       $('.hide').remove();
//     }

//     // Step

//     if ($('.prev')) {
//       $('.prev').classList.add('hide');
//       $('.prev').classList.remove('prev');
//     }

//     $('.act').classList.add('prev');
//     $('.act').classList.remove('act');

//     $('.next').classList.add('act');
//     $('.next').classList.remove('next');

//     // New Next

//     $('.new-next').classList.remove('new-next');

//     const addedEl = document.createElement('li');

//     $('.list').appendChild(addedEl);
//     addedEl.classList.add('next', 'new-next');
//   };

//   const prev = () => {
//     $('.new-next').remove();

//     // Step

//     $('.next').classList.add('new-next');

//     $('.act').classList.add('next');
//     $('.act').classList.remove('act');

//     $('.prev').classList.add('act');
//     $('.prev').classList.remove('prev');

//     // New Prev

//     $('.hide').classList.add('prev');
//     $('.hide').classList.remove('hide');

//     const addedEl = document.createElement('li');

//     $('.list').insertBefore(addedEl, $('.list').firstChild);
//     addedEl.classList.add('hide');
//   };

//   return (
//     <div>
//       {/* <div>
//         <button onClick={event => this.slide(event.target)}>Slider</button>
//       </div> */}
//       <ul className="list">
//             <li className="hide"></li>
//             <li className="prev"></li>
//             <li className="act"></li>
//             <li className="next"></li>
//             <li className="next new-next"></li>
//         </ul>
//       {/* <ul ref={sliderRef} className="list">
//         <li>
//         <a target="blank" rel='noreferrer' href='https://rps-topaz.vercel.app/'>
//             <img src={RPS} alt='rps'></img>
//         </a>
//         <p>RPS is a simple project with calls to Socket JS to establisha winner and loser 
//             between a computer picking Rock Paper Scissors and a human. Later, add ons would be online multiplayer with friends.</p>
//         </li>
//         <li>
//         <a target="blank" rel='noreferrer' href='https://sort-me.vercel.app/'>
//             <img src={SortMe} alt='sortme'></img>
//         </a>
//         <p>Sort Me is a simple project with calls to Socket JS to establisha winner and loser 
//             between a computer picking Rock Paper Scissors and a human. Later, add ons would be online multiplayer with friends.</p>
//         </li>
//       </ul> */}
//     </div>
//   );
// };

// export default SliderComponent;