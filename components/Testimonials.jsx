import React from 'react';
import ClientReview from './ClientReview';

const Testimonials = ({ project }) => {
  return (
    <section>
      <div className='carousel rounded-box w-64 md:w-72 xl:w-96'>
        {project?.map((item, index) => (
          <div className='carousel-item w-full'>
            <ClientReview
              key={index}
              clientName={item?.name}
              clientRole={item?.clientRole}
              clientReview={item?.clientReview}
              clientProfilePicture={item?.clientProfilePicture}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
