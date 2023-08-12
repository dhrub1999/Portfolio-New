import React from 'react';

const UIDesignGrid = ({ figmaDrafts }) => {
  return (
    <div className='image-grid grid grid-cols-2 gap-x-12px gap-y-20px'>
      {figmaDrafts?.map((draft, index) => (
        <div
          key={index}
          className={`shadow-lg ${
            index % 3 === 0 ? 'col-span-2' : 'col-span-1'
          }`}
        >
          <img
            src={draft?.imgSrc}
            className='h-full w-full rounded-md'
            alt={draft?.title}
          />
        </div>
      ))}
    </div>
  );
};

export default UIDesignGrid;
