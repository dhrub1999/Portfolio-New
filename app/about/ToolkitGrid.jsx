import React from 'react';
import { motion } from 'framer-motion';
import {
  SiEslint,
  SiPrettier,
  SiPassport,
  SiNetlify,
  SiWebpack,
  SiPostman,
  SiMongodb,
  SiMui,
  SiDaisyui,
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiVite,
} from 'react-icons/si';
import {
  FaNpm,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaSass,
} from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';
import { TbBrandFramerMotion, TbBrandVscode } from 'react-icons/tb';

import { iconVariants, staggerVariants } from '@/helper/framerAnimations';

const ToolkitGrid = () => {
  const icons = [
    {
      icon: TbBrandVscode,
      name: 'Visual Studio Code',
      useCases: 'Code editor',
    },
    {
      icon: SiJavascript,
      name: 'JavaScript',
      useCases: 'Programming language',
    },
    { icon: SiNextdotjs, name: 'Next.js', useCases: 'React framework' },
    { icon: SiReact, name: 'React', useCases: 'JavaScript library' },
    { icon: SiVite, name: 'Vite', useCases: 'Build tool' },
    { icon: SiEslint, name: 'ESLint', useCases: 'Code linting' },
    { icon: FaHtml5, name: 'HTML5', useCases: 'Markup language' },
    { icon: FaCss3, name: 'CSS3', useCases: 'Styling language' },
    { icon: FaSass, name: 'Sass', useCases: 'CSS preprocessor' },
    { icon: SiWebpack, name: 'Webpack', useCases: 'Module bundling' },
    { icon: SiNetlify, name: 'Netlify', useCases: 'Hosting' },
    { icon: SiPassport, name: 'Passport', useCases: 'Authentication' },
    { icon: SiPrettier, name: 'Prettier', useCases: 'Code formatting' },
    { icon: SiMongodb, name: 'MongoDB', useCases: 'Database' },
    { icon: SiPostman, name: 'Postman', useCases: 'API testing' },
    { icon: SiDaisyui, name: 'DaisyUI', useCases: 'Tailwind CSS components' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', useCases: 'CSS framework' },

    { icon: FaNpm, name: 'npm', useCases: 'Package manager' },
    { icon: SiMui, name: 'Material-UI', useCases: 'UI components' },
    { icon: FaNodeJs, name: 'Node.js', useCases: 'JavaScript runtime' },
    { icon: RiTeamFill, name: 'Team', useCases: 'Collaboration' },
    {
      icon: TbBrandFramerMotion,
      name: 'Framer Motion',
      useCases: 'Animation library',
    },
  ];

  return (
    <div>
      <motion.div
        className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'
        variants={staggerVariants}
        initial='hidden'
        whileInView='show'
      >
        {icons.map((item, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center rounded-md bg-slate-100 p-24px shadow-sm'
            variants={iconVariants}
          >
            {React.createElement(item.icon, {
              size: 48,
              // style: { color: `hsl(${Math.random() * 360}, 100%, 50%)` },
              className:
                'text-slate-500 transition-all deration-200 ease-in-out hover:scale-110 cursor-pointer',
            })}
            <span className='mt-16px text-center font-lexendDeca font-600 text-secondary'>
              {item.name}
            </span>
            <span className='text-center font-kalam text-sm font-400 tracking-wide text-gray-500'>
              {item.useCases}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ToolkitGrid;
