'use client';
import React, { useEffect, useState } from 'react';

import ProfileImg from './ProfileImg';
import InnerPadding from '@/layouts/InnerPadding';
import Button from '@/components/Button';
import ToolkitBanner from './ToolkitBanner';
import { myBio } from '../../helper/content';
import BioSection from './BioSection';
import LottiePlayer from '@/components/LottiePlayer';

const About = () => {
  const [translateX, setTranslateX] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;
      const newTranslateX = (scrollPos / (docHeight - windowHeight)) * 5;
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
        <div className='about-landing-container flex flex-col items-center justify-center'>
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

        <div className='journey-section mt-40px'>
          <div className='grid-container grid gap-y-44px'>
            <LottiePlayer
              src='/lottie-animations/about-character.json'
              className='h-auto'
            />
            <BioSection title={myBio[0]?.title} info={myBio[0]?.info} />
            <BioSection title={myBio[1]?.title} info={myBio[1]?.info} />
            <BioSection title={myBio[2]?.title} info={myBio[2]?.info} />
            <LottiePlayer
              src={'/lottie-animations/about-growth.json'}
              className='h-auto'
            />
            <BioSection title={myBio[3]?.title} info={myBio[3]?.info} />
            <BioSection title={myBio[4]?.title} info={myBio[4]?.info} />
            <BioSection title={myBio[5]?.title} info={myBio[5]?.info} />
            <LottiePlayer
              src='/lottie-animations/about-collab.json'
              className='h-auto'
            />
          </div>
        </div>

        <div className='toolkit-section relative mt-56px'>
          <h4 className='mb-16px text-center font-nunito text-sm-3xl font-700 text-slate-600 md:text-md-3xl lg:text-lg-3xl'>
            My Toolkits
          </h4>
          <p className='mb-12px text-center font-lexendDeca text-sm font-400 text-slate-500'>
            From structuring new projects, to debugging and delivering the
            project or upload, I use some leading technologies.
          </p>
          <div className='rounded-md bg-slate-600 p-12px shadow-md'>
            <ToolkitBanner translatePositiveX={translateX} />
          </div>
        </div>
      </InnerPadding>
    </section>
  );
};

export default About;
