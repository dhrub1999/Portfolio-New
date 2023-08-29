import React from 'react';

const AdditionalFields = ({ reason, formik }) => {
  if (reason === 'New project') {
    return (
      <>
        <div className='form-control w-full max-w-md'>
          <div className='mb-8px'>
            <label htmlFor='budget' className='text-slate-600'>
              Budget
            </label>
            <span className='font-sm-xl ml-2pxS label-text-alt text-red-600'>
              *
            </span>
          </div>
          <input
            type='number'
            name='budget'
            id='budget'
            value={formik.values.budget}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className='input input-bordered input-secondary w-full max-w-md text-sm'
            placeholder='Your budget'
          />
          <span id='err-msg' className='mt-4px text-red-600'>
            {formik.touched.budget && formik.errors.budget
              ? formik.errors.budget
              : ''}
          </span>
        </div>
        <div className='form-control w-full max-w-md font-lexendDeca text-sm text-slate-600 '>
          <label className='label justify-start gap-2px' htmlFor='currency'>
            <span className='label-text text-slate-600'>Your Currency</span>
            <span className='font-sm-xl label-text-alt text-red-600'>*</span>
          </label>
          <select
            className='select select-bordered select-secondary text-sm font-400 text-primary'
            name='currency'
            value={formik.values.currency}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option className=' text-slate-500'>₹ INR</option>
            <option className=' text-slate-500'>$ USD</option>
            <option className=' text-slate-500'>€ EUR</option>
          </select>
          <span id='err-msg' className='mt-4px text-red-600'>
            {formik.touched.currency && formik.errors.currency
              ? formik.errors.currency
              : ''}
          </span>
        </div>
      </>
    );
  } else if (reason === 'Job offer') {
    return (
      <>
        <div className='form-control w-full max-w-md font-lexendDeca text-sm text-slate-600'>
          <label className='label  justify-start gap-2px' htmlFor='jobTitle'>
            <span className='label-text text-slate-600'>Job title</span>
            <span className='font-sm-xl label-text-alt text-red-600'>*</span>
          </label>
          <select
            className='select select-bordered select-secondary text-sm font-400 text-primary'
            name='jobTitle'
            value={formik.values.jobTitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option className='text-slate-500'>Front-End Developer</option>
            <option className='text-slate-500'>Front-End Engineer</option>
            <option className='text-slate-500'>UI Designer</option>
            <option className='text-slate-500'>Independent Contractor</option>
          </select>
          <span id='err-msg' className='mt-4px text-red-600'>
            {formik.touched.jobTitle && formik.errors.jobTitle
              ? formik.errors.jobTitle
              : ''}
          </span>
        </div>

        <div className='form-control w-full max-w-md font-lexendDeca text-sm text-slate-600'>
          <label className='label  justify-start gap-2px' htmlFor='jobType'>
            <span className='label-text text-slate-600'>Job type</span>
            <span className='font-sm-xl label-text-alt text-red-600'>*</span>
          </label>
          <select
            className='select select-bordered select-secondary text-sm font-400 text-primary'
            name='jobType'
            value={formik.values.jobType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option className='text-slate-500'>Remote</option>
            <option className='text-slate-500'>Hybrid</option>
            <option className='text-slate-500'>On-site</option>
          </select>
          <span id='err-msg' className='mt-4px text-red-600'>
            {formik.touched.jobType && formik.errors.jobType
              ? formik.errors.jobType
              : ''}
          </span>
        </div>
      </>
    );
  }
  return null;
};

export default AdditionalFields;
