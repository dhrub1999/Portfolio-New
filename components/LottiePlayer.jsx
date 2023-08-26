'use client';
import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const LottiePlayer = ({ src, className }) => {
  const playerRef = useRef(null);

  return (
    <Player
      ref={playerRef}
      autoplay={true}
      loop={true}
      controls={true}
      src={src}
      className={`${className} w-full max-w-[400px]`}
      speed={1}
    ></Player>
  );
};

export default LottiePlayer;
