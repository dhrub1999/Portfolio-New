import React from 'react';

import { projects, codepenProjects, figmaDrafts } from '@/helper/content';
import ProjectCard from './ProjectCard';
import InnerPadding from '@/layouts/InnerPadding';
import CodepenProjects from './CodepenProjects';
import UIDesignGrid from './UIDesignGrid';
import Link from 'next/link';
import Lottie from './Lottie';

const Projects = () => {
  return (
    <div className='large-padding-block-container'>
      <div className='hero-container'>
        <InnerPadding>
          <Lottie />
          <h2 className='text-center font-nunito text-sm-5xl font-700'>
            Latest projects
          </h2>
          <p className='text-center font-lexendDeca text-sm font-400 tracking-wide text-slate-500'>
            On my jousrney of becoming a self-taught Web Developer, these are
            some of my gratest projects that helped me to learn and combine
            various languages and features.
          </p>
        </InnerPadding>
      </div>

      <InnerPadding className='grid grid-cols-1 gap-20px'>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </InnerPadding>

      <div className='extras mt-40px'>
        <InnerPadding>
          <h3 className='mb-20px text-center font-nunito text-sm-4xl font-700 text-slate-500 md:text-md-4xl lg:text-lg-4xl'>
            Codepen Projects
          </h3>
          <div className='grid-container grid gap-24px'>
            {codepenProjects.map((pen, index) => (
              <CodepenProjects key={index} pen={pen} />
            ))}
          </div>
        </InnerPadding>
      </div>

      <div className='ui-designs mt-60px'>
        <InnerPadding>
          <div className='text-container'>
            <h3 className='mb-12px text-center font-nunito text-sm-4xl font-700 text-slate-500 md:text-md-4xl lg:text-lg-4xl'>
              UI Dsigns
            </h3>
            <p className='mb-20px text-center font-lexendDeca text-sm font-400 tracking-wide text-slate-500'>
              Having design sense is crucial for front-end developers as it
              enables them to create visually appealing and user-friendly
              interfaces, ensuring a seamless and engaging user experience.
            </p>
          </div>
          <UIDesignGrid figmaDrafts={figmaDrafts} />
          <div className='mt-24px text-center'>
            <p className='mb-12px font-lexendDeca text-sm text-slate-500 md:text-base'>
              Love watching those? Check out some other designs on my Figma
              community profile.
            </p>
            <Link href='https://www.figma.com/@dhrub_1999' target='_blank'>
              <button className='btn btn-primary btn-md rounded-sm font-lexendDeca capitalize text-base-200 hover:text-base-content'>
                Figma community
              </button>
            </Link>
          </div>
        </InnerPadding>
      </div>
    </div>
  );
};

export default Projects;
