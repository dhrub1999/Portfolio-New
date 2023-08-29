import React from 'react';
import { motion as m } from 'framer-motion';
import dynamic from 'next/dynamic';

const BridgingCards = dynamic(() => import('./BridgingCards'), {
  ssr: false,
});

const Bridging = ({ bridgingProcess }) => {
  return (
    <div
      className='bridging-section mt-64px text-center md:flex md:flex-col md:items-center'
      id='bridging'
    >
      <m.h3
        className='text-center font-nunito text-sm-4xl font-700 text-slate-700 md:w-[500px] md:text-md-4xl xl:text-lg-4xl'
        initial={{ opacity: 0, translateY: '15px' }}
        whileInView={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: '-15px' }}
        transition={{ duration: 0.2, ease: 'easeIn' }}
      >
        My effective website building process.
      </m.h3>
      <div className='grid-container mt-40px grid grid-cols-1 justify-items-center gap-y-32px sm:grid-cols-2 sm:gap-x-8px md:gap-x-20px md:gap-y-20px lg:grid-cols-3 lg:gap-x-16px lg:gap-y-48px'>
        {bridgingProcess.map((bridge, index) => (
          <BridgingCards
            bridge={bridge}
            num={index + 1}
            key={index}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default Bridging;
