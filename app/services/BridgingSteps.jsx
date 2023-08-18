import React from 'react';

const BridgingSteps = ({ bridge, num }) => {
  return (
    <div>
      <h5 className='font-nunito text-sm-2xl font-600 text-secondary md:text-md-2xl lg:text-lg-2xl mb-4px'>
        <span className='text-primary font-800'>{num}. </span>
        {bridge?.title}
      </h5>
      <p className='font-lexendDeca text-sm text-slate-500 md:text-base'>
        {bridge?.desc}
      </p>
    </div>
  );
};

export default BridgingSteps;
