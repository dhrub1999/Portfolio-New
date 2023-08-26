import React from 'react';
import { motion as m } from 'framer-motion';

const FAQs = ({ question, answer, delay }) => {
  return (
    <div className='collapse-arrow collapse join-item border border-base-300'>
      <input type='radio' name='arrow' checked />
      <m.div
        className='md:font-sm-xl lg:font-lg-xl collapse-title overflow-hidden font-nunito text-sm-xl font-500 text-slate-700'
        initial={{ opacity: 0, translateY: '15px' }}
        whileInView={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: '-15px' }}
        transition={{ duration: 0.2, delay: delay, ease: 'easeIn' }}
      >
        {question}
      </m.div>
      <div className='md:font-base collapse-content overflow-hidden font-lexendDeca text-sm font-400 text-slate-500'>
        <m.p
          className=''
          initial={{ opacity: 0, translateY: '15px' }}
          whileInView={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: '-15px' }}
          transition={{ duration: 0.2, delay: delay, ease: 'easeIn' }}
        >
          {answer}
        </m.p>
      </div>
    </div>
  );
};

export default FAQs;
