'use client';

import React from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';

const PageWrapper = ({ children }) => {
  return (
    <>
      <AnimatePresence mode='wait'>
        <m.div
          initial={{ opacity: 0, translateY: '50px' }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: '50px' }}
          transition={{ duration: 0.3, delay: 0.5, type: 'tween' }}
        >
          {children}
        </m.div>
      </AnimatePresence>
    </>
  );
};

export default PageWrapper;
