'use client';
import React from 'react';
import Image from 'next/image';
import { motion as m } from 'framer-motion';
import { useNextSanityImage } from 'next-sanity-image';

import InnerPadding from '@/layouts/InnerPadding';
import Button from '@/components/Button';
import { container, items } from '@/helper/framerAnimations';
import { client } from '@/helper/configSanity';
import RichTextToParagraph from '@/components/RichTextToParagraph';
import ClientReview from '@/components/ClientReview';

const CaseStudyTemplate = ({ project }) => {
  const mainImgProps = useNextSanityImage(client, project?.mainImg);
  const solutionImgProps = useNextSanityImage(client, project?.solutionImg);
  const featureImgProps = useNextSanityImage(client, project?.featureImg);
  console.log(project.clientRole);

  return (
    <main className='relative'>
      <div className='hero-section relative flex h-full w-full flex-col-reverse justify-center gap-48px md:min-h-[80vh]'>
        <div className='left relative md:z-[10] md:grid md:h-full md:w-full md:place-items-center'>
          <InnerPadding className={''}>
            <h2 className='font-nunito text-sm-5xl font-800 text-slate-800 md:text-md-5xl md:text-slate-200 lg:text-lg-5xl'>
              {project?.title}
            </h2>
            <p className='mt-8px font-lexendDeca text-sm font-400 text-slate-600 md:text-base md:text-slate-400 lg:mt-12px'>
              {project?.description}
            </p>
            <div className='btn-container mt-32px flex gap-32px lg:gap-48px'>
              {project?.websiteLink ? (
                <Button
                  variant={'primary'}
                  className='hover:text-slate-800'
                  href={project?.websiteLink}
                >
                  Website
                </Button>
              ) : (
                ''
              )}
              {project?.repoLink ? (
                <Button href={project?.repoLink} variant={'secondary'}>
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

        <div className='relative z-10 aspect-video w-full blur-0 after:bg-none after:blur-0 md:absolute md:left-0 md:top-0 md:-z-10 md:h-full md:max-h-[90vh] md:blur-sm md:after:absolute md:after:left-0 md:after:top-0 md:after:z-[1] md:after:h-full md:after:w-full md:after:bg-[rgba(0,0,0,0.8)] md:after:content-[""]'>
          <Image
            alt={project?.title}
            // {...mainImgProps}
            src={mainImgProps?.src}
            layout='fill'
            priority
            className='object-cover object-top shadow-lg lg:rounded-xl'
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
              {project?.companyName == undefined ? 'N/A' : project?.companyName}
            </m.p>
          </m.div>
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
              Location
            </m.p>
            <m.p
              className='text-sm text-slate-500 md:text-base'
              variants={items}
            >
              {project?.companyLocation == undefined
                ? 'N/A'
                : project?.companyLocation}
            </m.p>
          </m.div>
          <m.div
            className='text-center'
            variants={container}
            initial='hidden'
            whileInView='show'
            exit='exit'
          >
            <m.p
              variants={items}
              className='text-base font-500 text-secondary lg:text-lg'
            >
              Website
            </m.p>
            <m.p
              variants={items}
              className='text-sm text-slate-500 md:text-base'
            >
              {project?.companyWebsite == undefined
                ? 'N/A'
                : project?.companyWebsite}
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
        <div className='relative aspect-video max-h-[32rem] max-w-full'>
          <Image
            loading='lazy'
            src={solutionImgProps?.src}
            layout='fill'
            alt={project?.title}
            className='rounded-xl object-cover object-top shadow-md'
          />
        </div>
        <div className='relative flex flex-col gap-32px lg:gap-48px'>
          <m.div variants={container} initial='hidden' whileInView='show'>
            <m.h4
              variants={items}
              className='font-nunito text-sm-3xl font-700 text-secondary md:text-md-3xl 2xl:text-lg-3xl'
            >
              Language Used
            </m.h4>
            <RichTextToParagraph
              variants={items}
              richText={project?.languageUsed}
            />
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
              {project?.features.map((feature, index) => (
                <div
                  key={index}
                  className='mt-8px text-sm text-slate-500 md:text-base'
                >
                  <span className=' text-slate-600 underline underline-offset-2'>
                    {feature.featureTitle}:
                  </span>{' '}
                  {feature.featureDesc}
                </div>
              ))}
            </m.div>
          </m.div>
        </div>
        <div className='relative aspect-video max-h-[32rem] max-w-full '>
          <Image
            loading='lazy'
            src={featureImgProps?.src}
            layout='fill'
            alt={project?.title}
            className='rounded-xl object-cover object-top shadow-md'
          />
        </div>
        <m.div variants={container} initial='hidden' whileInView='show'>
          <m.h4
            variants={items}
            className='font-nunito text-sm-3xl font-700 text-secondary md:text-md-3xl 2xl:text-lg-3xl'
          >
            Conclusion
          </m.h4>
          <RichTextToParagraph
            variants={items}
            richText={project?.conclusion}
          />
        </m.div>

        <m.div variants={container} initial='hidden' whileInView='show'>
          <m.h3
            className='text-center font-nunito text-sm-3xl font-700 text-secondary md:text-md-3xl 2xl:text-lg-3xl'
            variants={items}
          >
            Visitor's words
          </m.h3>
          <ClientReview
            clientName={project?.clientName}
            clientProfilePicture={project?.clientProfilePicture}
            clientReview={project?.clientReview}
            clientRole={project?.clientRole}
          />
        </m.div>
      </InnerPadding>
    </main>
  );
};

export default CaseStudyTemplate;
