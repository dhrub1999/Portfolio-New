// NavbarContainer.js
'use client';
import React from 'react';
import Navbar from './Navbar';
import useViewportWidth from '@/hooks/useViewportWidth';

const NavbarContainer = () => {
  const viewportWidth = useViewportWidth();

  return <Navbar viewportWidth={viewportWidth} />;
};

export default NavbarContainer;
