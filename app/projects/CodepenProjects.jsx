'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { motion as m } from 'framer-motion';
import { useNextSanityImage } from 'next-sanity-image';

import RichTextToParagraph from '@/components/RichTextToParagraph';
import { client } from '@/helper/configSanity';

const CodepenProjects = ({ pen }) => {
  const codepenProjectImgProps = useNextSanityImage(client, pen?.projectVisual);

  return (
    <m.div
      className='card w-full rounded-md bg-base-100 shadow-sm xl:shadow-md'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.1, delayChildren: 0.2, staggerChildren: 0.4 }}
    >
      <m.div
        className='relative aspect-square max-h-[300px] origin-center px-8px pt-8px'
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.4, ease: 'easeIn' }}
      >
        {/* <img src={pen?.gif} alt={pen?.title} className='rounded-xl' /> */}
        <Image
          src={codepenProjectImgProps?.src}
          alt={pen?.title || 'codepen project'}
          loading={'lazy'}
          className='rounded-md object-cover object-center'
          layout='fill'
        />
      </m.div>
      <div className='card-body'>
        <m.h4
          className='card-title font-nunito text-md-2xl font-700 text-secondary lg:text-sm-3xl'
          initial={{ opacity: 0, translateY: '15px' }}
          whileInView={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: '-15px' }}
          transition={{ duration: 0.2, ease: 'easeIn' }}
        >
          {pen?.projectTitle}
        </m.h4>
        <m.p
          className='font-lexendDeca text-sm font-400 text-slate-500 md:text-base'
          initial={{ opacity: 0, translateY: '15px' }}
          whileInView={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: '-15px' }}
          transition={{ duration: 0.2, delay: 0.2, ease: 'easeIn' }}
        >
          {/* {pen?.projectDescription} */}
          <RichTextToParagraph richText={pen?.description} />
        </m.p>
        <div className='card-actions mt-20px overflow-hidden'>
          <Link href={pen?.projectLink} target='_blank'>
            <m.button
              className='btn btn-secondary rounded font-lexendDeca font-400 capitalize text-slate-200 hover:text-slate-100'
              initial={{ opacity: 0, translateY: '15px' }}
              whileInView={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: '-15px' }}
              transition={{ duration: 0.2, delay: 0.2, ease: 'easeIn' }}
            >
              Codepen
            </m.button>
          </Link>
        </div>
      </div>
    </m.div>
  );
};

export default CodepenProjects;
