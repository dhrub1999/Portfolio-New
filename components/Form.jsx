import React from 'react';

const Form = () => {
  return (
    <div className='form-section'>
      <div className='upper'>
        <h3 className='font-nunito text-sm-4xl font-700 text-slate-700 md:text-md-4xl lg:text-lg-4xl'>
          Get in touch
        </h3>
        <p className='font-lexendDeca text-sm tracking-wide text-slate-500 md:text-base '>
          Project enquiry. Job offer, or even an Appreciation.
        </p>
        <form action=''>
          <div className='form-control'>
            <div>
              <label htmlFor='name'>Name</label>
              <span>*</span>
            </div>
            <input
              type='text'
              name='name'
              id='name'
              className=''
              placeholder='Tamal Biswas'
            />
            <span id='err-msg'>This is an error message</span>
          </div>
          <div className='form-control'>
            <div>
              <label htmlFor='email'>Email</label>
              <span>*</span>
            </div>
            <input
              type='text'
              name='email'
              id='email'
              className=''
              placeholder='contact.tamalbiswas@gmail.com'
            />
            <span id='err-msg'>This is an error message</span>
          </div>
          <div className='form-control w-full max-w-xs font-lexendDeca text-slate-600'>
            <label className='label  justify-start gap-2px'>
              <span className='label-text text-slate-500'>Select one</span>
              <span className='font-sm-xl label-text-alt text-red-600'>*</span>
            </label>
            <select className='select select-bordered'>
              <option selected className=' text-slate-500'>New project</option>
              <option className=' text-slate-500'>Job offer</option>
              <option className=' text-slate-500'>Appretiation</option>
            </select>
            <label className='label'>
              <span className='label-text-alt'>Alt label</span>
              <span className='label-text-alt'>Alt label</span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
