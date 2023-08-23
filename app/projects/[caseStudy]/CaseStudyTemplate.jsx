import React from 'react';
import Image from 'next/image';
import InnerPadding from '@/layouts/InnerPadding';
import Button from '@/components/Button';

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
              {project?.intro}
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
          <div className='text-center'>
            <p className='text-base font-500 text-secondary'>Client</p>
            <p className='text-sm text-slate-500 md:text-base'>
              {project?.industry == '' ? 'N/A' : project?.industry}
            </p>
          </div>
          <div className='text-center'>
            <p className='text-base font-500 text-secondary'>Location</p>
            <p className='text-sm text-slate-500 md:text-base'>
              {project?.location == '' ? 'N/A' : project?.location}
            </p>
          </div>
          <div className='text-center'>
            <p className='text-base font-500 text-secondary'>Website</p>
            <p className='text-sm text-slate-500 md:text-base'>
              {project?.companyWebsite == '' ? 'N/A' : project?.companyWebsite}
            </p>
          </div>
        </div>
      </InnerPadding>
      <InnerPadding
        className={'flex flex-col gap-32px py-48px font-lexendDeca'}
      >
        <div>
          <h4 className='font-nunito text-sm-3xl font-700 text-secondary md:text-md-3xl lg:text-lg-3xl'>
            Problem Statement
          </h4>
          <p className='mt-8px text-sm text-slate-500 md:text-base'>
            {project?.problemStatement}
          </p>
        </div>
        <div>
          <h4 className='font-nunito text-sm-3xl font-700 text-secondary md:text-md-3xl lg:text-lg-3xl'>
            Solution
          </h4>
          <p className='mt-8px text-sm text-slate-500 md:text-base'>
            {project?.solution}
          </p>
        </div>
        <Image
            loading='lazy'
          src={project?.img2}
          height={500}
          width={500}
          alt={project.name}
        />
        <div>
          <h4 className='font-nunito text-sm-3xl font-700 text-secondary md:text-md-3xl lg:text-lg-3xl'>
            Language Used
          </h4>
          <p className='mt-8px text-sm text-slate-500 md:text-base'>
            {project?.languageUsed}
          </p>
        </div>
        <div>
          <h4 className='font-nunito text-sm-3xl font-700 text-secondary md:text-md-3xl lg:text-lg-3xl'>
            Features
          </h4>
          <div className='features'>
            {Object.entries(project?.features).map(
              ([featureName, featureDesc, index]) => (
                <p
                  key={index}
                  className='mt-8px text-sm text-slate-500 md:text-base'
                >
                  <span className=' text-slate-600 underline underline-offset-2'>
                    {featureName}:
                  </span>{' '}
                  {featureDesc}
                </p>
              )
            )}
          </div>
        </div>
        <Image
            loading='lazy'
          src={project?.img3}
          height={500}
          width={500}
          alt={project?.name}
        />
        <div>
          <h4 className='font-nunito text-sm-3xl font-700 text-secondary md:text-md-3xl lg:text-lg-3xl'>
            Conclusion
          </h4>
          <p className='mt-8px text-sm text-slate-500 md:text-base'>
            {project?.conclusion}
          </p>
        </div>
      </InnerPadding>
    </main>
  );
};

export default CaseStudyTemplate;
