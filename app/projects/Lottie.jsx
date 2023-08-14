'use client';
import React, { useRef } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Lottie = () => {
  const playerRef = useRef(null); // initialize your ref

  return (
    <Player
      ref={playerRef} // set the ref to your class instance
      autoplay={true}
      loop={true}
      controls={true}
      src='/lottie-animations/projects-lottie.json'
      className='w-full'
      speed={1}
    ></Player>
  );
};

export default Lottie;
