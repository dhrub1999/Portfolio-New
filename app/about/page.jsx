'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion as m } from 'framer-motion';

import ProfileImg from './ProfileImg';
import InnerPadding from '@/layouts/InnerPadding';
import Button from '@/components/Button';
import { myBio } from '../../helper/content';
import BioSection from './BioSection';
import LottiePlayer from '@/components/LottiePlayer';
import PageWrapper from '@/components/PageWrapper';
const ToolkitGrid = dynamic(() => import('./ToolkitGrid'), { ssr: false });

const About = () => {
  return (
    <PageWrapper>
      <section className='large-padding-block-container w-full'>
        <InnerPadding>
          <div className='relative flex flex-col items-center justify-center md:flex-row-reverse md:items-center md:justify-between md:gap-12px lg:gap-32px xl:gap-40px'>
            <div className='img-background relative  aspect-square  max-w-[330px] rounded-md bg-slate-200 shadow-inner ring-offset-2 lg:max-w-[450px]'>
              <ProfileImg />
            </div>
            <div className='left md:w-[50%]'>
              <div className='text-container mt-40px text-center md:mt-0 md:text-left'>
                <p className='mb-8px font-lexendDeca text-sm text-slate-400 md:text-base'>
                  Hello! I'm,
                </p>
                <h2 className='font-kalam text-sm-5xl font-700 text-primary md:text-md-5xl lg:text-lg-5xl'>
                  Tamal Biswas
                </h2>
                <p className='mt-8px max-w-[600px] font-lexendDeca text-sm font-400 text-slate-500 md:text-base'>
                  A self-taught <span className='font-500'>MERN</span> stack
                  developer & <span className='font-500'>UI Designer</span>,
                  dedicated to create immersive web experiences that blend
                  cutting-edge technology with captivating design aesthetics.
                </p>
              </div>
              <div className='mt-20px grid place-content-center overflow-hidden sm:mt-40px md:mt-60px md:place-content-start lg:mt-60px'>
                <Button variant={'primary'} href={'/projects'}>
                  My projects
                </Button>
              </div>
            </div>
          </div>

          <div className='journey-section mt-40px md:mt-60px'>
            <div className='grid-container grid-rows-9 grid grid-cols-1 gap-y-44px md:grid-cols-2'>
              <div className='md:self-center'>
                <LottiePlayer
                  src='/lottie-animations/about-character.json'
                  className='h-auto'
                />
              </div>
              <BioSection
                title={myBio[0]?.title}
                info={myBio[0]?.info}
                className={`-mt-32px md:mt-0`}
              />
              <BioSection title={myBio[1]?.title} info={myBio[1]?.info} />
              <BioSection title={myBio[2]?.title} info={myBio[2]?.info} />
              <div className='md:self-center'>
                <LottiePlayer src={'/lottie-animations/about-growth.json'} />
              </div>
              <BioSection
                title={myBio[3]?.title}
                info={myBio[3]?.info}
                className={'-mt-32px self-center md:mt-0'}
              />
              <BioSection title={myBio[4]?.title} info={myBio[4]?.info} />
              <BioSection
                title={myBio[5]?.title}
                info={myBio[5]?.info}
                className={'-mb-32px md:mt-0'}
              />
              <div className='md:col-span-2 md:self-center'>
                <LottiePlayer
                  src='/lottie-animations/about-collab.json'
                  className='h-auto md:h-[20rem]'
                />
              </div>
            </div>
          </div>

          <div className='toolkit-section relative'>
            <m.h3
              className='mb-8px font-nunito text-sm-4xl font-700 text-slate-700 md:mb-12px md:text-md-4xl lg:text-lg-4xl'
              initial={{ opacity: 0, translateX: '-15px' }}
              whileInView={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 0, translateX: '-15px' }}
              transition={{ duration: 0.2, ease: 'easeIn' }}
            >
              My Toolkits
            </m.h3>
            <m.p
              className='lg:40px mb-20px font-lexendDeca text-sm font-400 text-slate-500 md:mb-32px md:text-base'
              initial={{ opacity: 0, translateY: '-15px' }}
              whileInView={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: '-15px' }}
              transition={{ duration: 0.2, delay: 0.2, ease: 'easeIn' }}
            >
              From structuring new projects, to debugging and delivering the
              project or upload, I use some leading technologies.
            </m.p>

            <ToolkitGrid />
          </div>
        </InnerPadding>
      </section>
    </PageWrapper>
  );
};

export default About;
