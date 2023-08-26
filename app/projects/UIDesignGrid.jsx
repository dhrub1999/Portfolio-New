import React from 'react';
import Image from 'next/image';
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
          className={`shadow-lg ${
            index % 3 === 0
              ? 'col-span-2 md:col-span-4 md:aspect-[19/10.5] lg:col-span-4'
              : (index + 1) % 3 === 0
              ? `md:col-start-3 md:row-start-${index} md:aspect-[9/20]`
              : `col-span-1 md:col-start-2 md:aspect-[9/20]`
          }`}
        >
          {/* <img
            src={draft?.imgSrc}
            className='h-full w-full rounded-md'
            alt={draft?.title}
          /> */}
          <Image
            src={`/${draft?.imgSrc}`}
            className='h-full w-full rounded-md object-cover object-top'
            alt={draft?.title}
            height={2000}
            width={2000}
            loading='lazy'
          />
        </m.div>
      ))}
    </div>
  );
};

export default UIDesignGrid;
