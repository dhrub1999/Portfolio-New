'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

import AdditionalFields from './AdditionalFields';
import { formControl, textFields } from '@/helper/framerAnimations';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      companyName: '',
      reason: 'New project',
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

  // console.log(formik.values);

  return (
    <div className='form-section -mt-40px'>
      <div className='upper'>
        <h2 className='text-center font-nunito text-sm-5xl font-700 text-slate-700 md:text-md-5xl lg:text-lg-5xl'>
          Get in touch
        </h2>
        <p className='text-center font-lexendDeca text-sm tracking-wide text-slate-500 md:text-base '>
          Project enquiry. Job offer, or even an Appreciation.
        </p>
        <motion.form
          variants={formControl}
          initial='hidden'
          whileInView='show'
          exit='exit'
          onSubmit={formik.handleSubmit}
          className='mt-40px flex flex-col gap-24px font-lexendDeca text-sm font-400 text-slate-500'
        >
          <motion.div className='form-control' variants={textFields}>
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

          <motion.div variants={textFields} className='form-control'>
            <div className='mb-8px'>
              <label htmlFor='name' className='text-slate-600'>
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

          <motion.div variants={textFields} className='form-control'>
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
            <label className='label  justify-start gap-2px'>
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

          <motion.div variants={textFields} className='form-control'>
            <label className='label mb-4px text-slate-600'>
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
            type='submit'
            className='btn btn-primary w-full max-w-md rounded normal-case text-slate-100'
          >
            Send
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Form;
