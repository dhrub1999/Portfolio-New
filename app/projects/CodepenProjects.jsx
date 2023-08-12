import Link from 'next/link';
import React from 'react';

const CodepenProjects = ({ pen }) => {
  return (
    <div className='card w-full bg-base-100 shadow-xl'>
      <figure className='px-8px pt-8px'>
        <img src={pen?.gif} alt={pen?.title} className='rounded-xl' />
      </figure>
      <div className='card-body'>
        <h4 className='card-title font-nunito text-sm-3xl font-700 text-secondary md:text-md-3xl lg:text-lg-3xl'>
          {pen?.title}
        </h4>
        <p className='font-lexendDeca text-sm font-400 text-slate-500 md:text-base'>
          {pen?.desc}
        </p>
        <div className='card-actions mt-20px'>
          <Link href={pen?.link} target='_blank'>
            <button className='btn btn-secondary rounded font-lexendDeca font-400 capitalize text-slate-200 hover:text-slate-100'>
              Codepen
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CodepenProjects;
