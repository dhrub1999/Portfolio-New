import React from 'react';

const BioSection = ({ title, info }) => {
  return (
    <div className='item text-center'>
      <h5 className='font-nunito text-sm-2xl font-500 text-slate-700 md:text-md-2xl lg:text-lg-2xl'>
        {title}
      </h5>
      <p className='mt-12px font-lexendDeca text-sm font-300 tracking-wide text-slate-500'>
        {info}
      </p>
    </div>
  );
};

export default BioSection;
