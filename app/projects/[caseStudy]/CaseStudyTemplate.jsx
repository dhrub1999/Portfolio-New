import React from 'react';
import Image from 'next/image';
import { motion as m } from 'framer-motion';

import InnerPadding from '@/layouts/InnerPadding';
import Button from '@/components/Button';
import { container, items } from '@/helper/framerAnimations';

const CaseStudyTemplate = ({ project }) => {
  return (
    <main>
      <div className='hero-section flex flex-col-reverse justify-center gap-48px'>
        <div className='left'>
          <InnerPadding className={''}>
            <h2 className='font-nunito text-sm-5xl font-800 text-slate-800 md:text-md-5xl lg:text-lg-5xl'>
              {project?.name}
            </h2>
            <p className='mt-8px font-lexendDeca text-sm font-400 text-slate-500 md:text-base'>
              {project?.description}
            </p>
            <div className='btn-container mt-32px flex gap-32px'>
              <Button
                variant={'primary'}
                className='hover:text-slate-800'
                href={project?.link}
              >
                Website
              </Button>
              <Button href={project?.repo} variant={'secondary'}>
                Repository
              </Button>
            </div>
            <p className='mt-8px font-lexendDeca text-xs font-300 text-slate-400'>
              <span className='text-yellow-500'>*</span>Note that website is
              hosted on a free domain and might take 2-3 minutes to load.
            </p>
          </InnerPadding>
        </div>

        <div className='right w-screen object-cover'>
          <Image
            alt={project?.name}
            src={project?.img1}
            width={800}
            height={800}
            priority
          />
        </div>
      </div>

      {/* Stat */}

      <InnerPadding className={'mt-64px'}>
        <div className='flex w-full items-start justify-between rounded-xl border border-slate-100 px-12px py-8px font-lexendDeca shadow-sm'>
          <m.div
            className='text-center'
            variants={container}
            initial='hidden'
            whileInView='show'
          >
            <m.p className='text-base font-500 text-secondary' variants={items}>
              Client
            </m.p>
            <m.p
              className='text-sm text-slate-500 md:text-base'
              variants={items}
            >
              {project?.industry == '' ? 'N/A' : project?.industry}
            </m.p>
          </m.div>
          <m.div
            className='text-center'
            variants={container}
            initial='hidden'
            whileInView='show'
          >
            <m.p className='text-base font-500 text-secondary' variants={items}>
              Location
            </m.p>
            <m.p
              className='text-sm text-slate-500 md:text-base'
              variants={items}
            >
              {project?.location == '' ? 'N/A' : project?.location}
            </m.p>
          </m.div>
          <m.div
            className='text-center'
            variants={container}
            initial='hidden'
            whileInView='show'
            exit='exit'
          >
            <m.p variants={items} className='text-base font-500 text-secondary'>
              Website
            </m.p>
            <m.p
              variants={items}
              className='text-sm text-slate-500 md:text-base'
            >
              {project?.companyWebsite == '' ? 'N/A' : project?.companyWebsite}
            </m.p>
          </m.div>
        </div>
      </InnerPadding>

      <InnerPadding
        className={'flex flex-col gap-32px py-48px font-lexendDeca'}
      >
        <m.div variants={container} initial='hidden' whileInView='show'>
          <m.h4
            className='font-nunito text-sm-3xl font-700 text-secondary md:text-md-3xl lg:text-lg-3xl'
            variants={items}
          >
            Problem Statement
          </m.h4>
          <m.p
            className='mt-8px text-sm text-slate-500 md:text-base'
            variants={items}
          >
            {project?.problemStatement}
          </m.p>
        </m.div>
        <m.div variants={container} initial='hidden' whileInView='show'>
          <m.h4
            variants={items}
            className='font-nunito text-sm-3xl font-700 text-secondary md:text-md-3xl lg:text-lg-3xl'
          >
            Solution
          </m.h4>
          <m.p
            variants={items}
            className='mt-8px text-sm text-slate-500 md:text-base'
          >
            {project?.solution}
          </m.p>
        </m.div>
        <Image
          loading='lazy'
          src={project?.img2}
          height={500}
          width={500}
          alt={project.name}
        />
        <m.div variants={container} initial='hidden' whileInView='show'>
          <m.h4
            variants={items}
            className='font-nunito text-sm-3xl font-700 text-secondary md:text-md-3xl lg:text-lg-3xl'
          >
            Language Used
          </m.h4>
          <m.p
            variants={items}
            className='mt-8px text-sm text-slate-500 md:text-base'
          >
            {project?.languageUsed}
          </m.p>
        </m.div>
        <m.div variants={container} initial='hidden' whileInView='show'>
          <m.h4
            variants={items}
            className='font-nunito text-sm-3xl font-700 text-secondary md:text-md-3xl lg:text-lg-3xl'
          >
            Features
          </m.h4>
          <m.div
            className='features'
            variants={container}
            initial='initial'
            whileInView='show'
          >
            {Object.entries(project?.features).map(
              ([featureName, featureDesc, index]) => (
                <m.p
                  variants={items}
                  key={index}
                  className='mt-8px text-sm text-slate-500 md:text-base'
                >
                  <span className=' text-slate-600 underline underline-offset-2'>
                    {featureName}:
                  </span>{' '}
                  {featureDesc}
                </m.p>
              )
            )}
          </m.div>
        </m.div>
        <Image
          loading='lazy'
          src={project?.img3}
          height={500}
          width={500}
          alt={project?.name}
        />
        <m.div variants={container} initial='hidden' whileInView='show'>
          <m.h4
            variants={items}
            className='font-nunito text-sm-3xl font-700 text-secondary md:text-md-3xl lg:text-lg-3xl'
          >
            Conclusion
          </m.h4>
          <m.p
            variants={items}
            className='mt-8px text-sm text-slate-500 md:text-base'
          >
            {project?.conclusion}
          </m.p>
        </m.div>
      </InnerPadding>
    </main>
  );
};

export default CaseStudyTemplate;
