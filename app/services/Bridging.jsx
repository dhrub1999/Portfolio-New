import React from 'react';
import { motion as m } from 'framer-motion';

import BridgingCards from './BridgingCards';

const Bridging = ({ bridgingProcess }) => {
  return (
    <div className='bridging-section mt-64px text-center'>
      <m.h3
        className='text-center font-nunito text-sm-4xl font-700 text-slate-700 md:text-md-4xl lg:text-lg-4xl'
        initial={{ opacity: 0, translateY: '15px' }}
        whileInView={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: '-15px' }}
        transition={{ duration: 0.2, ease: 'easeIn' }}
      >
        My effective website building process.
      </m.h3>
      <div className='grid-container grid-rows-13 mt-40px grid grid-cols-1 justify-items-center gap-y-32px md:grid-cols-2 md:gap-x-8px md:gap-y-40px lg:grid-cols-3 lg:gap-x-12px lg:gap-y-48px'>
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
