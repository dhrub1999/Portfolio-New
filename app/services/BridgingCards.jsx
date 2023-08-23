import React, { lazy } from 'react';
import Image from 'next/image';

const BridgingCards = ({ bridge, num }) => {
  return (
    <div className='flex w-full max-w-[450px] flex-col items-center gap-16px rounded-xl border p-32px lg:gap-24px'>
      <div className='icon'>
        <Image
          alt={bridge?.title}
          src={bridge?.svgPath}
          width={100}
          height={100}
          loading={'lazy'}
        />
      </div>
      <div className='text'>
        <h5 className='font-nunito text-sm-2xl font-700 text-secondary md:text-md-2xl lg:text-lg-2xl'>
          {num}. {bridge?.title}
        </h5>
        <p className='mt-4px font-lexendDeca text-sm text-slate-500 md:text-base lg:mt-8px'>
          {bridge?.desc}
        </p>
      </div>
    </div>
  );
};

export default BridgingCards;
