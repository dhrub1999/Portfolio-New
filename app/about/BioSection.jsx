import React from 'react';
import { motion as m } from 'framer-motion';

const BioSection = ({ title, info, className }) => {
  return (
    <div className={`item md:p-24px ${className}`}>
      <m.h4
        className='font-nunito text-sm-3xl font-600 text-slate-700 md:text-md-3xl lg:text-lg-3xl'
        initial={{ opacity: 0, translateX: '-15px' }}
        whileInView={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: '-15px' }}
        transition={{ duration: 0.2, ease: 'easeIn' }}
      >
        {title}
      </m.h4>
      <m.p
        className='mt-8px font-lexendDeca text-sm font-400 tracking-wide text-slate-500 md:mt-12px'
        initial={{ opacity: 0, translateY: '15px' }}
        whileInView={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: '15px' }}
        transition={{ duration: 0.3, delay: 0.2, ease: 'easeIn' }}
      >
        {info}
      </m.p>
    </div>
  );
};

export default BioSection;
