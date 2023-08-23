import React from 'react';

import LottiePlayer from '@/components/LottiePlayer';
import Form from './Form';

const page = () => {
  return (
    <div>
        <div className="svg -mt-40px">
            <LottiePlayer src="/lottie-animations/contact-hero.json"  />
        </div>
      <Form />
      {/* <div>
        <h3 className='font-nunito font-700 text-sm-4xl'>Reach me out</h3>
      </div> */}
    </div>
  );
};

export default page;
