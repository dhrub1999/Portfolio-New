import LottiePlayer from '@/components/LottiePlayer';
import Form from './Form';
import React from 'react';

const page = () => {
  return (
    <div>
        <div className="svg -mt-40px">
            <LottiePlayer src="/lottie-animations/contact-hero.json"  />
        </div>
      <Form />
      <div>
        <h3>Reach me out</h3>
      </div>
    </div>
  );
};

export default page;
