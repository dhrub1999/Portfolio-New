import React from 'react';
import Image from 'next/legacy/image';
import { motion as m } from 'framer-motion';

const UIDesignGrid = ({ figmaDrafts }) => {
  return (
    <div className='image-grid grid grid-cols-2 gap-x-12px gap-y-20px sm:gap-y-32px md:grid-cols-4 md:gap-y-40px lg:grid-cols-4 lg:gap-x-24px lg:gap-y-48px'>
      {figmaDrafts?.map((draft, index) => (
        <m.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.2 * index, type: 'tween' }}
          className={`relative shadow-lg ${
            index % 3 === 0
              ? 'col-span-2 h-[48vw] max-h-[380px] w-full md:col-span-4 md:aspect-[19/9.5] md:max-h-[450px] lg:col-span-4 lg:max-h-[500px] xl:max-h-[600px]'
              : 'aspect-[9/19] md:row-start-2'
          }`}
        >
          {/* <img
            src={draft?.imgSrc}
            className='h-full w-full rounded-md'
            alt={draft?.title}
          /> */}
          <Image
            src={`/${draft?.imgSrc}`}
            className='h-full w-full rounded-md'
            alt={draft?.title}
            layout='fill'
            loading='lazy'
          />
        </m.div>
      ))}
    </div>
  );
};

export default UIDesignGrid;
