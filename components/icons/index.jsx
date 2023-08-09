import React from 'react';
import { Home } from './Home';
import { About } from './About';
import { Laptop } from './Laptop';

const Icon = (props) => {
  switch (props.name.toLowerCase()) {
    case 'home':
      return <Home {...props} />;
    case 'about':
      return <About {...props} />;
    case 'laptop':
      return <Laptop {...props} />;
    default:
      return <div />;
  }
};

export { Icon };
