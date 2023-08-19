import React from 'react';

const FAQs = ({ question, answer }) => {
  return (
    <div className='collapse join-item collapse-arrow border border-base-300'>
      <input type='radio' name='arrow' checked />
      <div className='md:font-sm-xl lg:font-lg-xl collapse-title font-nunito text-sm-xl font-500 text-slate-700'>
        {question}
      </div>
      <div className='md:font-base collapse-content font-lexendDeca text-sm font-400 text-slate-500'>
        <p className=''>{answer}</p>
      </div>
    </div>
  );
};

export default FAQs;
