import React from 'react';
import Image from 'next/image';
import { motion as m } from 'framer-motion';

import InnerPadding from '@/layouts/InnerPadding';
import Button from '@/components/Button';
import { container, items } from '@/helper/framerAnimations';

const CaseStudyTemplate = ({ project }) => {
  return (
    <main className='relative'>
      <div className='hero-section relative flex h-full w-full flex-col-reverse justify-center gap-48px md:min-h-[80vh]'>
        <div className='left relative md:z-[10] md:grid md:h-full md:w-full md:place-items-center'>
          <InnerPadding className={''}>
            <h2 className='font-nunito text-sm-5xl font-800 text-slate-800 md:text-md-5xl md:text-slate-200 lg:text-lg-5xl'>
              {project?.name}
            </h2>
            <p className='mt-8px font-lexendDeca text-sm font-400 text-slate-600 md:text-base md:text-slate-400 lg:mt-12px'>
              {project?.description}
            </p>
            <div className='btn-container mt-32px flex gap-32px lg:gap-48px'>
              {project?.link ? (
                <Button
                  variant={'primary'}
                  className='hover:text-slate-800'
                  href={project?.link}
                >
                  Website
                </Button>
              ) : (
                ''
              )}
              {project?.repo ? (
                <Button href={project?.repo} variant={'secondary'}>
                  Repository
                </Button>
              ) : (
                ''
              )}
            </div>
            <p className='mt-8px font-lexendDeca text-xs font-300 text-slate-500 md:mt-12px md:text-sm md:text-slate-400 xl:mt-16px'>
              <span className='text-yellow-500'>*</span>Note that website is
              hosted on a free domain and might take 2-3 minutes to load.
            </p>
          </InnerPadding>
        </div>

        <div className='relative z-10 aspect-video h-[40vh] max-h-[28rem] w-full blur-0 after:bg-none  after:blur-0 md:absolute md:left-0 md:top-0 md:-z-10 md:h-full md:max-h-[90vh] md:blur-sm md:after:absolute md:after:left-0 md:after:top-0 md:after:z-[1] md:after:h-full md:after:w-full md:after:bg-[rgba(0,0,0,0.8)] md:after:content-[""]'>
          <Image
            alt={project?.name}
            src={project?.img1}
            className='object-cover object-center'
            fill
            priority
          />
        </div>
      </div>

      {/* Stat */}

      <InnerPadding className={'mt-64px'}>
        <div className='flex w-full items-start justify-between rounded-xl border border-slate-100 px-12px py-8px font-lexendDeca shadow-sm md:px-24px md:py-12px lg:px-32px'>
          <m.div
            className='text-center'
            variants={container}
            initial='hidden'
            whileInView='show'
          >
            <m.p
              className='text-base font-500 text-secondary lg:text-lg'
              variants={items}
            >
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
        className={'flex flex-col gap-32px py-48px font-lexendDeca lg:gap-48px'}
      >
        <div className='flex flex-col gap-32px lg:gap-48px'>
          <m.div variants={container} initial='hidden' whileInView='show'>
            <m.h4
              className='font-nunito text-sm-3xl font-700 text-secondary md:text-md-3xl 2xl:text-lg-3xl'
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
              className='font-nunito text-sm-3xl font-700 text-secondary md:text-md-3xl 2xl:text-lg-3xl'
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
        </div>
        <div className='relative max-h-[28rem] max-w-full md:aspect-video'>
          <Image loading='lazy' src={project?.img2} fill alt={project?.name} />
        </div>
        <div className='relative flex flex-col gap-32px lg:gap-48px'>
          <m.div variants={container} initial='hidden' whileInView='show'>
            <m.h4
              variants={items}
              className='font-nunito text-sm-3xl font-700 text-secondary md:text-md-3xl 2xl:text-lg-3xl'
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
              className='font-nunito text-sm-3xl font-700 text-secondary md:text-md-3xl 2xl:text-lg-3xl'
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
        </div>
        <div className='max-w-full] relative aspect-video max-h-[32rem] '>
          <Image
            loading='lazy'
            src={project?.img3}
            fill
            alt={project?.name}
            className='object-cover object-top'
          />
        </div>
        <m.div variants={container} initial='hidden' whileInView='show'>
          <m.h4
            variants={items}
            className='font-nunito text-sm-3xl font-700 text-secondary md:text-md-3xl 2xl:text-lg-3xl'
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
