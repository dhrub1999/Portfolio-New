import React from 'react';

const FAQs = ({ question, answer }) => {
  return (
    <div className='collapse join-item collapse-arrow border border-base-300'>
      <input type='radio' name='arrow' checked='checked' />
      <div className='md:font-sm-xl lg:font-lg-xl collapse-title font-nunito text-sm-xl font-500 text-slate-700'>
        {question}
      </div>
      <div className='font-sm md:font-base collapse-content font-lexendDeca font-400 text-slate-500'>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQs;
