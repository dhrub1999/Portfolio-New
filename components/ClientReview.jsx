import React from 'react';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { client } from '@/helper/configSanity';
import RichTextToParagraph from './RichTextToParagraph';

const ClientReview = ({
  clientName,
  clientProfilePicture,
  clientReview,
  clientRole,
}) => {
  const clientProfilePic = useNextSanityImage(client, clientProfilePicture);
  return (
    <div className='rounded-box relative mt-16px grid place-content-center md:mt-20px lg:mt-24px 2xl:mt-32px'>
      <div className='review-container w-full max-w-[600px]  place-self-center rounded-sm border p-8px text-center md:rounded-md md:p-12px lg:rounded-lg xl:p-16px 2xl:p-24px '>
        <div className='flex flex-col items-center px-8px py-8px md:rounded-md md:p-12px lg:rounded-lg xl:p-16px 2xl:p-24px'>
          <div className='profile-pic h-60px w-60px overflow-hidden rounded-full shadow-lg md:h-68px md:w-68px lg:h-72px lg:w-72px 2xl:h-80px 2xl:w-80px'>
            <Image {...clientProfilePic} alt={clientName} />
          </div>
          <h6 className='mt-8px font-nunito text-base font-600 text-slate-800 md:mt-12px md:text-lg 2xl:mt-16px'>
            {clientName}
          </h6>
          <p className='mt-2px font-kalam text-sm font-400 text-slate-400 '>
            {clientRole}
          </p>
          <RichTextToParagraph richText={clientReview} />
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
