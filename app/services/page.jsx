'use client';
import React from 'react';
import Link from 'next/link';
import { motion as m } from 'framer-motion';
import dynamic from 'next/dynamic';

import InnerPadding from '@/layouts/InnerPadding';
import Button from '@/components/Button';
import { faqSection, refinedBridges } from '@/helper/content';
import LottiePlayer from '@/components/LottiePlayer';

const Bridging = dynamic(() => import('./Bridging'), { ssr: false });
const FAQs = dynamic(() => import('./FAQs'), { ssr: false });
const PageWrapper = dynamic(() => import('@/components/PageWrapper'), {
  ssr: false,
});
// const LottiePlayer = dynamic(() => import('@/components/LottiePlayer'), {
//   ssr: false,
// });

const Services = () => {
  return (
    <PageWrapper>
      <div className='relative'>
        <InnerPadding className='2xl:grid 2xl:min-h-[90vh] 2xl:place-items-center'>
          <div className='flex flex-col-reverse items-center md:min-h-[70vh] md:flex-row md:items-center md:justify-between'>
            <div className='text-container -mt-32px text-center md:-mt-0 md:w-1/2 md:text-left'>
              <h2 className='font-nunito text-sm-5xl font-800 text-slate-700 md:text-md-5xl lg:text-lg-5xl'>
                From visions into reality.
              </h2>
              <p className='mt-12px font-lexendDeca text-sm font-400 text-slate-500 md:text-base lg:w-3/4 xl:mt-16px'>
                Collaborating to achieve success in the realm of web
                development, both in the present and the promising opportunities
                of tomorrow.
              </p>
              <div className='mt-24px md:mt-32px lg:mt-36px 2xl:mt-40px'>
                <Button variant='primary' href='#bridging'>
                  Take a tour
                </Button>
              </div>
            </div>
            <div className='md:justify-self-end'>
              <LottiePlayer
                src='/lottie-animations/services-hero.json'
                className=''
              />
            </div>
          </div>
          <Bridging bridgingProcess={refinedBridges} />
          <div className='faq-section mt-64px'>
            <m.h3
              className='mb-24px text-center font-nunito text-sm-4xl font-700 text-slate-700 md:text-md-4xl 2xl:text-lg-4xl'
              initial={{ opacity: 0, translateY: '15px' }}
              whileInView={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: '-15px' }}
              transition={{ duration: 0.2, ease: 'easeIn' }}
            >
              Some FAQs
            </m.h3>
            <div className='join join-vertical w-full md:grid md:place-items-center'>
              {faqSection.map((faq, index) => (
                <FAQs
                  question={faq?.question}
                  answer={faq?.answer}
                  key={index}
                  delay={index * 0.05}
                />
              ))}
            </div>
            <m.p
              className='mb-48px mt-20px text-center font-lexendDeca text-sm text-slate-400'
              initial={{ opacity: 0, translateY: '15px' }}
              whileInView={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: '-15px' }}
              transition={{ duration: 0.2, delay: 0.3, ease: 'easeIn' }}
            >
              Wasn't this helpful? Click here to{' '}
              <Link
                className='text-primary transition-colors duration-200 ease-in'
                href={'mailto:contact.tamalbiswas@gmail.com'}
              >
                Send feedback.
              </Link>
            </m.p>
          </div>
        </InnerPadding>
      </div>
    </PageWrapper>
  );
};

export default Services;
