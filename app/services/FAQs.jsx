import React from 'react';
import { motion as m } from 'framer-motion';

const FAQs = ({ question, answer, delay }) => {
  return (
    <div className='collapse join-item collapse-arrow border border-base-300 lg:max-w-[80%] 2xl:max-w-[70%]'>
      <input type='radio' name='arrow' checked />
      <m.div
        className='collapse-title overflow-hidden font-nunito text-sm-xl font-600 text-slate-700 md:py-20px md:text-sm-xl lg:text-md-xl'
        initial={{ opacity: 0, translateY: '15px' }}
        whileInView={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: '-15px' }}
        transition={{ duration: 0.2, delay: delay, ease: 'easeIn' }}
      >
        {question}
      </m.div>
      <div className='collapse-content overflow-hidden font-lexendDeca text-sm font-400 text-slate-500 md:text-base'>
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
