import React from 'react';
import Image from 'next/image';
import { motion as m } from 'framer-motion';

const BridgingCards = ({ bridge, num, delay }) => {
  return (
    <div className='flex w-full max-w-[450px] flex-col items-center gap-16px rounded-xl border p-32px lg:gap-24px'>
      <div className='icon overflow-hidden'>
        <m.div
          initial={{ opacity: 0, translateY: '15px', scale: 0.8 }}
          whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
          exit={{ opacity: 0, translateY: '-15px', scale: 0 }}
          transition={{ duration: 0.3, delay: delay }}
        >
          <Image
            alt={bridge?.title}
            src={bridge?.svgPath}
            width={100}
            height={100}
            loading={'lazy'}
          />
        </m.div>
      </div>
      <div className='text'>
        <m.h5
          className='font-nunito text-sm-2xl font-700 text-secondary md:text-md-2xl'
          initial={{ opacity: 0, translateY: '15px' }}
          whileInView={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: '-15px' }}
          transition={{ duration: 0.2, delay: delay + 0.1, ease: 'easeIn' }}
        >
          {num}. {bridge?.title}
        </m.h5>
        <m.p
          className='mt-4px font-lexendDeca text-sm text-slate-500 md:mt-8px md:text-base lg:mt-12px'
          initial={{ opacity: 0, translateY: '15px' }}
          whileInView={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: '-15px' }}
          transition={{ duration: 0.2, delay: delay + 0.2, ease: 'easeIn' }}
        >
          {bridge?.desc}
        </m.p>
      </div>
    </div>
  );
};

export default BridgingCards;
