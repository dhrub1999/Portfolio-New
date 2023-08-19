'use client';
import InitialPadding from '@/layouts/InitialPadding';
import React, { useState } from 'react';

const Form = () => {
  const [selectedOption, setSelectedOption] = useState('new project');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='form-section large-padding-block-container'>
      <InitialPadding>
        <div className='upper'>
          <h3 className='text-center font-nunito text-sm-4xl font-700 text-slate-700 md:text-md-4xl lg:text-lg-4xl'>
            Get in touch
          </h3>
          <p className='text-center font-lexendDeca text-sm tracking-wide text-slate-500 md:text-base '>
            Project enquiry. Job offer, or even an Appreciation.
          </p>
          <form
            action=''
            className='mt-40px flex flex-col gap-24px font-lexendDeca font-400 text-sm text-slate-500'
          >
            <div className='form-control'>
              <div className='mb-8px'>
                <label htmlFor='name' className='text-slate-600'>
                  Your name
                </label>
                <span className='font-sm-xl ml-2pxS label-text-alt text-red-600'>
                  *
                </span>
              </div>
              <input
                type='text'
                name='name'
                id='name'
                className='input input-bordered text-sm input-secondary w-full max-w-xs'
                placeholder='Tamal Biswas'
              />
              <span id='err-msg' className='mt-4px text-red-600'>
                This is an error message
              </span>
            </div>

            <div className='form-control'>
              <div className='mb-8px'>
                <label htmlFor='name' className='text-slate-600'>
                  Company name{' '}
                  <span className='text-slate-300'>(optional)</span>
                </label>
                <span></span>
              </div>
              <input
                type='text'
                name='company-name'
                id='company-name'
                className='input input-bordered text-sm input-secondary w-full max-w-xs'
                placeholder='Web Factory'
              />
            </div>

            <div className='form-control'>
              <div className='mb-8px'>
                <label htmlFor='email' className='text-slate-600'>
                  Email
                </label>
                <span className='font-sm-xl ml-2pxS label-text-alt text-red-600'>
                  *
                </span>
              </div>
              <input
                type='text'
                name='email'
                id='email'
                className='input input-bordered text-sm input-secondary w-full max-w-xs'
                placeholder='contact.tamalbiswas@gmail.com'
              />
              <span id='err-msg' className='mt-4px text-red-600'>
                This is an error message
              </span>
            </div>

            <div className='form-control w-full max-w-xs font-lexendDeca text-sm text-slate-600'>
              <label className='label  justify-start gap-2px'>
                <span className='label-text text-slate-600'>Your reason</span>
                <span className='font-sm-xl label-text-alt text-red-600'>
                  *
                </span>
              </label>
              <select
                className='select select-bordered text-sm font-400 text-primary'
                value={selectedOption}
                onChange={handleChange}
              >
                <option value='new project' className=' text-slate-500'>
                  New project
                </option>
                <option className=' text-slate-500' value='job offer'>
                  Job offer
                </option>
                <option className=' text-slate-500' value='appretiation'>
                  Appretiation
                </option>
              </select>
              <span id='err-msg' className='mt-4px text-red-600'>
                This is an error message
              </span>
            </div>

            <div className='form-control'>
              <label className='label text-slate-600'>
                <span className='label-text text-slate-500'>Message</span>
              </label>
              <textarea
                className='textarea textarea-bordered h-24 w-full max-w-xs'
                placeholder='Write your message here'
              ></textarea>
            </div>
          </form>
        </div>
      </InitialPadding>
    </div>
  );
};

export default Form;
