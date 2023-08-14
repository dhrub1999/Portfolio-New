'use client';
import React, { useEffect, useState } from 'react';

import ProfileImg from './ProfileImg';
import InnerPadding from '@/layouts/InnerPadding';
import Button from '@/components/Button';
import ToolkitBanner from './ToolkitBanner';

const About = () => {
  const [translateX, setTranslateX] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;
      const newTranslateX = scrollPos / (docHeight - windowHeight) * 2;
      setTranslateX(newTranslateX);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='large-padding-block-container'>
      <InnerPadding>
        <div className='about-landing-container'>
          <div className='img-background aspect-square max-w-[330px] rounded-xl bg-slate-200 shadow-xl'>
            <ProfileImg />
          </div>
          <div className='left'>
            <div className='text-container mt-40px text-center md:mt-0'>
              <p className='mb-8px font-lexendDeca text-sm text-slate-400'>
                Hello! I'm,
              </p>
              <h2 className='font-nunito text-sm-5xl font-700 text-primary md:text-md-5xl lg:text-lg-5xl'>
                Tamal Biswas
              </h2>
              <p className='mt-8px font-lexendDeca text-sm font-400 text-slate-500'>
                A self-taught <span className='font-500'>MERN</span> stack
                developer & <span className='font-500'>UI Designer</span>,
                dedicated to create immersive web experiences that blend
                cutting-edge technology with captivating design aesthetics.
              </p>
            </div>
            <div className='mt-16px grid place-content-center'>
              <Button variant={'primary'} href={'/projects'}>
                My projects
              </Button>
            </div>
          </div>
        </div>
        <div className='toolkit-section relative mt-40px'>
          <ToolkitBanner translatePositiveX={translateX} />
        </div>
      </InnerPadding>
    </section>
  );
};

export default About;
