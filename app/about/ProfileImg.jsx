import React from 'react';
import Image from 'next/image';
import profileImg from '../../public/imgs/profile-img.webp';

const ProfileImg = () => {
  return (
    // <img src='../../imgs/profile-img.webp' className='' alt='' loading='lazy' />
    <Image
      src={profileImg}
      className='drop-shadow-2xl'
      alt=''
      priority
      width={400}
      height={400}
    />
  );
};

export default ProfileImg;
