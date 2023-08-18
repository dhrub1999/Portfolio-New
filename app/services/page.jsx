import React from 'react';
import InnerPadding from '@/layouts/InnerPadding';
import LottiePlayer from '@/components/LottiePlayer';
import Button from '@/components/Button';
import Bridging from './Bridging';
import { bridgingSection, faqSection } from '@/helper/content';
import FAQs from './FAQs';
import Link from 'next/link';

const Services = () => {
  return (
    <div>
      <InnerPadding className=''>
        <div className='flex flex-col-reverse'>
          <div className='text-container -mt-32px text-center md:-mt-0'>
            <h2 className='font-nunito text-sm-5xl font-800 text-slate-700 md:text-md-5xl lg:text-lg-5xl'>
              Transforming visions into reality.
            </h2>
            <p className='mt-12px font-lexendDeca text-sm font-400 text-slate-500'>
              Collaborating to achieve success in the realm of web development,
              both in the present and the promising opportunities of tomorrow.
            </p>
            <div className='mt-24px'>
              <Button variant='primary' href='/overview'>
                Take a tour
              </Button>
            </div>
          </div>
          <LottiePlayer
            src='/lottie-animations/services-hero.json'
            className=''
          />
        </div>
        <Bridging bridgingProcess={bridgingSection} />
        <div className='faq-section mt-64px'>
          <h3 className='mb-24px text-center font-nunito text-sm-4xl font-700 text-slate-700 md:text-md-4xl lg:text-lg-4xl'>
            Some FAQs
          </h3>
          <div className='join join-vertical w-full'>
            {faqSection.map((faq, index) => (
              <FAQs
                question={faq?.question}
                answer={faq?.answer}
                index={index}
              />
            ))}
          </div>
          <p className='mt-20px text-center font-lexendDeca text-sm text-slate-400'>
            Wasn't this helpful?{' '}
            <Link
              className='text-slate-500 transition-colors duration-200 ease-in hover:text-slate-700'
              href={'mailto:contact.tamalbiswas@gmail.com'}
            >
              Send feedback.
            </Link>
          </p>
        </div>
      </InnerPadding>
    </div>
  );
};

export default Services;
