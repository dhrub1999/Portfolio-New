import React from 'react';

import Button from '@/components/Button';
import InnerPadding from '@/layouts/InnerPadding';
import { homeContainer } from '../helper/content';
import HeroSvg from '@/components/HeroSvg';

export default function Home() {
  return (
    <section className='hero'>
      <div className='large-padding-block-container'>
        <InnerPadding>
          <div className='content flex flex-col-reverse items-center gap-20px md:flex-row'>
            <div className='hero-content flex flex-col justify-center gap-40px'>
              <div className='text-container flex flex-col items-center gap-16px text-center'>
                <div className='headline-group'>
                  <h4 className='mb-4px font-lexendDeca text-[14px] font-500 capitalize text-secondary md:text-[16px]'>
                    {homeContainer['special-text']}
                  </h4>
                  <h1 className='text-center font-nunito text-sm-5xl font-black text-gray-700 sm:max-w-[70vw] sm:text-sm-6xl md:text-md-6xl xl:text-lg-6xl'>
                    {homeContainer.title}
                  </h1>
                </div>
                <p className='max-w-[70vw] font-lexendDeca text-sm font-400 tracking-wide text-gray-600 md:text-lg'>
                  {homeContainer.info}
                </p>
              </div>
              <div className='grid place-content-center'>
                <Button variant={'primary'} href={'/projects'}>
                  My projects
                </Button>
              </div>
            </div>

            <div className='hero-svg min-w-[220px] max-w-[250px] sm:min-w-[240px] sm:max-w-[260px] md:min-w-[280px] md:max-w-[300px] lg:min-w-[320px] lg:max-w-[340px] xl:min-w-[360px] xl:max-w-[380px] 2xl:min-w-[380px] 2xl:max-w-[440px]'>
              <HeroSvg />
            </div>
          </div>
        </InnerPadding>
      </div>
    </section>
  );
}