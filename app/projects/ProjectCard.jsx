import React from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { motion as m } from 'framer-motion';
import { useNextSanityImage } from 'next-sanity-image';

import { client } from '@/helper/configSanity';

const ProjectCard = ({ project }) => {
  const mainImgProps = useNextSanityImage(client, project?.mainImg);

  return (
    <div className='card w-full overflow-hidden bg-base-100 shadow-sm md:shadow-md'>
      <m.div
        className='relative aspect-[19/9] w-full origin-center'
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* <img src={project?.img1} alt={project?.name} /> */}
        <Image
          {...mainImgProps}
          alt={project?.slug.current || 'Personal Project'}
          layout='fill'
        />
      </m.div>
      <div className='card-body'>
        <m.h4
          className='card-title font-nunito text-sm-4xl font-700 text-slate-700 lg:text-md-4xl'
          initial={{ opacity: 0, translateY: '15px' }}
          whileInView={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: '-15px' }}
          transition={{ duration: 0.3, ease: 'easeIn' }}
        >
          {project?.title}
        </m.h4>
        <m.p
          className='truncate-para font-lexendDeca text-sm font-400 tracking-wide text-slate-500 md:text-base'
          initial={{ opacity: 0, translateY: '15px' }}
          whileInView={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: '-15px' }}
          transition={{ duration: 0.2, delay: 0.2, ease: 'easeIn' }}
        >
          {project?.description}
        </m.p>
        <m.p
          className='overflow-y-hidden font-lexendDeca text-base font-500 tracking-wide text-secondary'
          initial={{ opacity: 0, translateY: '15px' }}
          whileInView={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: '-15px' }}
          transition={{ duration: 0.2, delay: 0.4, ease: 'easeIn' }}
        >
          Tech stack:{' '}
          <span className='font-kalam text-sm text-slate-500 md:text-base'>
            {project?.techStack.join(', ')}
          </span>
        </m.p>
        <div className='card-actions mt-20px justify-start overflow-y-hidden'>
          <Link href={`/projects/${project?.slug.current}`}>
            <m.button
              className='btn btn-primary btn-md rounded-sm font-lexendDeca capitalize text-base-200 hover:text-base-content'
              initial={{ opacity: 0, translateY: '15px' }}
              whileInView={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: '-15px' }}
              transition={{ duration: 0.2, delay: 0.5, ease: 'easeIn' }}
            >
              Case Study
            </m.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
