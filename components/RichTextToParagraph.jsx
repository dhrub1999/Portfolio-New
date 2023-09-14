import React from 'react';
import { motion as m } from 'framer-motion';

// Function to flatten Portable Text content into JSX
function flattenText(content) {
  if (!content) return null;

  return content.map((block, index) => {
    if (block._type === 'block' && block.children) {
      return (
        <span key={index}>
          {block.children.map((span, spanIndex) =>
            span.marks.includes('strong') ? (
              <strong key={spanIndex}>{span.text}</strong>
            ) : (
              span.text
            )
          )}
        </span>
      );
    }
    return null;
  });
}

const RichTextToParagraph = ({ richText, variant }) => {
  // Convert the rich text to JSX
  const jsxContent = flattenText(richText);

  return (
    <m.p
      variants={variant}
      className='mt-8px text-sm text-slate-500 md:text-base'
    >
      {jsxContent}
    </m.p>
  );
};

export default RichTextToParagraph;
