import InnerPadding from '@/layouts/InnerPadding';
import React from 'react';

const HeroSkeleton = () => {
  return (
    <InnerPadding className='large-padding-block-container relative flex h-[80vh] w-full flex-col-reverse items-center gap-24px bg-slate-100 md:flex-row md:items-center md:justify-between'>
      <div className='flex min-w-full flex-col items-center md:w-[50%] md:min-w-0 md:max-w-md md:items-start'>
        <div className='grid w-full gap-12px'>
          <div className='h-20px min-w-full rounded-full bg-slate-300 md:h-28px'></div>
          <div className='h-20px min-w-full rounded-full bg-slate-300 md:h-28px'></div>
          <div className='h-20px min-w-full rounded-full bg-slate-300 md:h-28px'></div>
        </div>
        <div className='grid w-full place-items-center md:place-items-start'>
          <div className='mt-20px h-16px w-full max-w-sm rounded-full bg-slate-200 md:mt-28px'></div>
          <div className='mt-8px h-16px w-full max-w-sm rounded-full bg-slate-200'></div>
        </div>
        <div className='btn mt-32px rounded-md bg-slate-300 font-lexendDeca normal-case text-slate-500 xs:btn-sm sm:btn-md lg:btn-lg lg:mt-40px'>
          Loading...
        </div>
      </div>
      <div className='h-full max-h-[400px] w-full max-w-[400px] rounded-md bg-slate-200 shadow-md'></div>
    </InnerPadding>
  );
};

export default HeroSkeleton;
