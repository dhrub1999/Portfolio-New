'use client';
import React from 'react';
import { AnimatePresence } from 'framer-motion';

import LottiePlayer from '@/components/LottiePlayer';
import Form from './Form';
import PageWrapper from '@/components/PageWrapper';
import InnerPadding from '@/layouts/InnerPadding';

const Contact = () => {
  return (
    <PageWrapper>
      <InnerPadding>
        <div className='mb-48px'>
          <div className='svg -mt-40px'>
            <LottiePlayer src='/lottie-animations/contact-hero.json' />
          </div>
          <Form />
        </div>
      </InnerPadding>
    </PageWrapper>
  );
};

export default Contact;
