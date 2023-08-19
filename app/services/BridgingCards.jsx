import React from 'react';

const BridgingCards = ({ bridge, num }) => {
  return (
    <div>
      <div className='icon'></div>
      <h5 className='font-nunito text-sm-2xl font-600 text-secondary md:text-md-2xl lg:text-lg-2xl'>
        {num}. {bridge.title}
      </h5>
      <p className='mt-4px font-lexendDeca text-sm text-slate-500 md:text-base'>
        {bridge.desc}
      </p>
    </div>
  );
};

export default BridgingCards;
