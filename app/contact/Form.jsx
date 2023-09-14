'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useForm } from '@formspree/react';

import { formControl, textFields } from '@/helper/framerAnimations';

const AdditionalFields = dynamic(() => import('./AdditionalFields'), {
  ssr: false,
});

const Form = () => {
  const [state, handleSubmit] = useForm('xbjvkrwg');
  if(state.succeeded) {
  }
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      companyName: '',
      reason: 'Appretiation',
      message: '',
      budget: '',
      currency: '₹ INR',
      jobTitle: 'Front-End Developer',
      jobType: 'Remote',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      companyName: Yup.string(),
      reason: Yup.string().required('Reason is required'),
      message: Yup.string().max(1200, 'Must be 1200 characters or less'),
      budget: Yup.number().required('Budget is required'),
      currency: Yup.string().required('Currency is required'),
      jobTitle: Yup.string().required(
        'Please select the Job Title from the options.'
      ),
      jobType: Yup.string().required(
        'Please select the Job Type from the options.'
      ),
    }),
  });

  return (
    <div className='form-section mt-12px grid w-full place-items-center rounded-xl bg-slate-100 p-24px shadow-md md:mt-0 md:px-48px md:py-24px lg:mx-60px lg:py-40px'>
      <div className='upper'></div>
      <motion.form
        variants={formControl}
        initial='hidden'
        whileInView='show'
        exit='exit'
        onSubmit={handleSubmit}
        className='flex w-full flex-col items-center gap-24px font-lexendDeca text-sm font-400 text-slate-500'
      >
        <motion.div
          className='form-control w-full max-w-md'
          variants={textFields}
        >
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
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className='input input-bordered input-secondary w-full max-w-md text-sm capitalize'
            placeholder='Tamal Biswas'
          />
          <span id='err-msg' className='mt-4px text-red-600'>
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : ''}
          </span>
        </motion.div>

        <motion.div
          variants={textFields}
          className='form-control w-full max-w-md'
        >
          <div className='mb-8px'>
            <label htmlFor='companyName' className='text-slate-600'>
              Company name <span className='text-slate-300'>(optional)</span>
            </label>
            <span></span>
          </div>
          <input
            type='text'
            name='companyName'
            id='company-name'
            value={formik.values.companyName}
            onChange={formik.handleChange}
            className='input input-bordered input-secondary w-full max-w-md text-sm capitalize'
            placeholder='Web Factory'
          />
        </motion.div>

        <motion.div
          variants={textFields}
          className='form-control w-full max-w-md'
        >
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
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className='input input-bordered input-secondary w-full max-w-md text-sm'
            placeholder='contact.tamalbiswas@gmail.com'
          />
          <span id='err-msg' className='mt-4px text-red-600'>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ''}
          </span>
        </motion.div>

        <motion.div
          variants={textFields}
          className='form-control w-full max-w-md font-lexendDeca text-sm text-slate-600'
        >
          <label htmlFor='reason' className='label justify-start gap-2px'>
            <span className='label-text text-slate-600'>Your reason</span>
            <span className='font-sm-xl label-text-alt text-red-600'>*</span>
          </label>
          <select
            className='select select-bordered select-secondary text-sm font-400 text-primary'
            name='reason'
            value={formik.values.reason}
            onChange={formik.handleChange}
          >
            <option className=' text-slate-500'>New project</option>
            <option className=' text-slate-500'>Job offer</option>
            <option className=' text-slate-500'>Appretiation</option>
          </select>
          <span id='err-msg' className='mt-4px text-red-600'>
            {formik.errors.reason ? formik.errors.reason : ''}
          </span>
        </motion.div>

        <AdditionalFields formik={formik} reason={formik.values.reason} />

        <motion.div
          variants={textFields}
          className='form-control w-full max-w-md'
        >
          <label htmlFor='message' className='label mb-4px text-slate-600'>
            <span className='label-text text-slate-500'>Message</span>
          </label>
          <textarea
            className='textarea textarea-bordered textarea-secondary h-24 w-full max-w-md'
            placeholder={
              formik.values.reason === 'New project'
                ? 'Project details (goals, timeline, etc.)'
                : 'Write your message here'
            }
            name='message'
            value={formik.values.message}
            onChange={formik.handleChange}
            rows='4'
          ></textarea>
          <span className='font-sm-xl label-text-alt text-red-600'>
            {formik.errors.message ? formik.errors.message : ''}
          </span>
        </motion.div>

        <button
          disabled={state.submitting}
          type='submit'
          className='btn btn-primary w-full max-w-md rounded normal-case text-slate-100'
        >
          {state.submitting ? (
            <span className='loading loading-spinner'>Sending</span>
          ) : (
            'Send'
          )}
        </button>
      </motion.form>
    </div>
  );
};

export default Form;
