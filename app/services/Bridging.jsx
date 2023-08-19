import React from 'react';
import BridgingSteps from './BridgingSteps';
import BridgingCards from './BridgingCards';

const Bridging = ({ bridgingProcess }) => {
  return (
    <div className='bridging-section mt-64px text-center'>
      <h3 className='text-center font-nunito text-sm-4xl font-700 text-slate-700 md:text-md-4xl lg:text-lg-4xl'>
        My effective website building process.
      </h3>
      <div className='grid-container grid-rows-13 mt-40px grid grid-cols-1 gap-y-32px md:grid-cols-2'>
        {/* {bridgingProcess.map((step, index) => (
          <BridgingSteps bridge={step} num={index + 1} key={index} />
        ))} */}
        {bridgingProcess.map((bridge, index) => (
          <BridgingCards bridge={bridge} num={index + 1} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Bridging;
