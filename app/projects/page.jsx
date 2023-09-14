'use client';
import React from 'react';
import Link from 'next/link';
import { motion as m } from 'framer-motion';
import dynamic from 'next/dynamic';

import { client } from '@/helper/configSanity';
import { figmaDrafts } from '@/helper/content';
import InnerPadding from '@/layouts/InnerPadding';
import LottiePlayer from '@/components/LottiePlayer';
import PageWrapper from '@/components/PageWrapper';
import Testimonials from '@/components/Testimonials';

const CodepenProjects = dynamic(() => import('./CodepenProjects'), {
  ssr: false,
});
const UIDesignGrid = dynamic(() => import('./UIDesignGrid'), {
  ssr: false,
});
const ProjectCard = dynamic(() => import('./ProjectCard'), {
  ssr: false,
});

async function getProjectsData() {
  const query = '*[_type == "projects"]';
  const latestProjects = await client.fetch(query);
  return latestProjects;
}

async function getCodepenProjectsData() {
  const query = '*[_type == "codepens"]';
  const codepenProjects = await client.fetch(query);
  return codepenProjects;
}

const Projects = async () => {
  const myProjects = await getProjectsData();
  // console.log(myProjects[1]);
  const codepenProjects = await getCodepenProjectsData();

  return (
    <PageWrapper>
      <div className='mb-40px'>
        <div className='hero-container mb-56px md:flex md:items-center'>
          <InnerPadding className='flex flex-col md:flex-row-reverse md:items-center md:justify-between'>
            <div className='md:w-[50%] md:justify-self-end lg:gap-48px'>
              <LottiePlayer src='/lottie-animations/projects-lottie.json' />
            </div>
            <div className='text-container text-center md:w-[50%] md:text-left'>
              <m.h2
                className='mb-12px font-nunito text-sm-5xl font-700 md:mb-16px md:text-md-5xl lg:mb-20px lg:text-lg-5xl'
                initial={{ opacity: 0, translateY: '15px' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: '-15px' }}
                transition={{ duration: 0.2, ease: 'easeIn' }}
              >
                Latest projects
              </m.h2>
              <m.p
                className='m-w-[400px] font-lexendDeca text-sm font-400 tracking-wide text-slate-500 md:text-base'
                initial={{ opacity: 0, translateY: '15px' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: '-15px' }}
                transition={{ duration: 0.2, delay: 0.2, ease: 'easeIn' }}
              >
                On my journey of becoming a self-taught Web Developer, these are
                some of my greatest projects that helped me to learn and combine
                various languages and features.
              </m.p>
            </div>
          </InnerPadding>
        </div>

        <InnerPadding className='grid grid-cols-1 gap-20px sm:gap-32px md:mt-20px md:grid-cols-2 md:gap-48px lg:gap-60px xl:gap-72px'>
          {myProjects
            .slice()
            .reverse()
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </InnerPadding>

        <div className='extras mt-40px md:mt-60px lg:mt-80px 2xl:mt-[96px]'>
          <InnerPadding className={'xl:px-[44px]'}>
            <m.h3
              className='mb-20px text-center font-nunito text-sm-4xl font-700 text-slate-500 md:mb-28px lg:mb-36px lg:text-md-4xl'
              initial={{ opacity: 0, translateY: '15px' }}
              whileInView={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: '-15px' }}
              transition={{ duration: 0.2, ease: 'easeIn' }}
            >
              Codepen Projects
            </m.h3>
            <div className='grid-container grid grid-cols-1 gap-24px sm:gap-32px md:grid-cols-2 md:gap-48px xl:grid-cols-4 xl:gap-24px 2xl:gap-32px'>
              {codepenProjects.map((pen, index) => (
                <CodepenProjects key={index} pen={pen} />
              ))}
            </div>
          </InnerPadding>
        </div>

        <div className='ui-designs mt-40px md:mt-60px lg:mt-80px 2xl:mt-[96px]'>
          <InnerPadding>
            <div className='text-container text-center'>
              <m.h3
                className='mb-12px font-nunito text-sm-4xl font-700 text-slate-700 md:text-md-4xl lg:text-lg-4xl'
                initial={{ opacity: 0, translateY: '15px' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: '-15px' }}
                transition={{ duration: 0.2, ease: 'easeIn' }}
              >
                UI Designs.
              </m.h3>
              <m.p
                className='mb-20px text-center font-lexendDeca text-sm font-400 tracking-wide text-slate-500 md:px-40px md:text-base lg:px-72px 2xl:px-[100px]'
                initial={{ opacity: 0, translateY: '15px' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: '-15px' }}
                transition={{ duration: 0.2, delay: 0.2, ease: 'easeIn' }}
              >
                Having design sense is crucial for front-end developers as it
                enables them to create visually appealing and user-friendly
                interfaces, ensuring a seamless and engaging user experience.
              </m.p>
            </div>
            <UIDesignGrid figmaDrafts={figmaDrafts} />
            <div className='mt-24px text-center md:mt-36px lg:mt-44px'>
              <m.p
                className='mb-12px text-center font-lexendDeca text-sm text-slate-500 md:mx-auto md:mb-20px  md:max-w-[450px]'
                initial={{ opacity: 0, translateY: '15px' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: '-15px' }}
                transition={{ duration: 0.2, ease: 'easeIn' }}
              >
                Want to see more? Check out some other designs on my Figma
                community profile.
              </m.p>
              <Link href='https://www.figma.com/@dhrub_1999' target='_blank'>
                <m.button
                  className='btn btn-primary btn-md rounded-sm font-lexendDeca capitalize text-base-200 hover:text-base-content'
                  initial={{ opacity: 0, translateY: '15px' }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  exit={{ opacity: 0, translateY: '-15px' }}
                  transition={{ duration: 0.2, delay: 0.2, ease: 'easeIn' }}
                >
                  Figma community
                </m.button>
              </Link>
            </div>
          </InnerPadding>
        </div>

        <div className='testimonial-section mt-40px md:mt-60px lg:mt-80px'>
          <InnerPadding>
            <m.h3
              className='mb-12px mt-20px text-center font-nunito text-sm-4xl font-700 text-slate-700 md:text-md-4xl lg:text-lg-4xl'
              initial={{ opacity: 0, translateY: '15px' }}
              whileInView={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: '-15px' }}
              transition={{ duration: 0.2, ease: 'easeIn' }}
            >
              I have some fans.
              <Testimonials project={myProjects} />
              <p className='mt-12px font-lexendDeca text-sm font-400 text-slate-400 md:mt-16px md:text-base lg:mt-20px'>
                Slide to see more.
              </p>
            </m.h3>
          </InnerPadding>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Projects;
