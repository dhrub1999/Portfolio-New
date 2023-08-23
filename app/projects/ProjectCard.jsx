import Link from 'next/link';
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className='card w-full bg-base-100 shadow-xl'>
      <figure>
        <img src={project?.img1} alt={project?.name} />
      </figure>
      <div className='card-body'>
        <h4 className='card-title font-nunito text-sm-4xl font-700 text-slate-700 md:text-md-4xl lg:text-lg-4xl'>
          {project?.name}
        </h4>
        <p className='truncate-para font-lexendDeca text-sm font-400 tracking-wide text-slate-500 md:text-base'>
          {project?.intro}
        </p>
        <p className='font-lexendDeca text-base font-500 tracking-wide text-secondary'>
          Languages used:{' '}
          <span className='font-kalam text-sm text-slate-400'>
            {project?.languages.join(', ')}
          </span>
        </p>
        <div className='card-actions mt-20px justify-start'>
          <Link href={`/projects/${project?.id}`}>
            <button className='btn btn-primary btn-md rounded-sm font-lexendDeca capitalize text-base-200 hover:text-base-content'>
              Case Study
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
