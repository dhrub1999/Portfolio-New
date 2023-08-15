'use client';

import React from 'react';
import {
  SiEslint,
  SiJira,
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
  FaSlack,
  FaGitlab,
  FaDocker,
  FaNpm,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaSass,
} from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';
import { TbBrandFramerMotion, TbBrandVscode } from 'react-icons/tb';

const ToolkitBanner = ({ translatePositiveX }) => {
  return (
    <div className='relative flex h-[30vh] w-full flex-col gap-20px overflow-hidden aspect-square text-slate-300'>
      <div
        className='absolute top-0 flex justify-start gap-8px overflow-x-auto text-sm-5xl transition-transform ease-in'
        style={{ transform: `translateX(-${translatePositiveX}%)` }}
      >
        <SiEslint />
        <SiJira />
        <SiPrettier />
        <SiPassport />
        <SiNetlify />
        <SiWebpack />
        <SiPostman />
        <SiMongodb />
        <SiMui />
        <SiDaisyui />
        <SiTailwindcss />
        <SiJavascript />
        <SiNextdotjs />
        <SiReact />
        <SiVite />
        <FaSlack />
        <FaGitlab />
        <FaDocker />
        <FaNpm />
        <FaNodeJs />
        <FaHtml5 />
        <FaCss3 />
        <FaSass />
        <RiTeamFill />
        <TbBrandFramerMotion />
        <TbBrandVscode />
      </div>
      <div
        className='absolute top-[50%] flex justify-start gap-8px overflow-x-auto text-sm-5xl transition-transform ease-in'
        style={{ transform: `translate(${translatePositiveX}%, -50%)` }}
      >
        <RiTeamFill />
        <TbBrandFramerMotion />
        <TbBrandVscode />
        <SiEslint />
        <SiJira />
        <SiPrettier />
        <SiPassport />
        <SiNetlify />
        <SiWebpack />
        <SiPostman />
        <FaGitlab />
        <FaDocker />
        <FaNpm />
        <FaNodeJs />
        <SiMongodb />
        <SiMui />
        <SiDaisyui />
        <SiNextdotjs />
        <SiReact />
        <SiVite />
        <FaSlack />
        <SiTailwindcss />
        <SiJavascript />
        <FaHtml5 />
        <FaCss3 />
        <FaSass />
      </div>
      <div
        className='absolute bottom-0 flex justify-start gap-8px overflow-x-auto text-sm-5xl transition-transform ease-in'
        style={{ transform: `translateX(-${translatePositiveX}%)` }}
      >
        <RiTeamFill />
        <FaHtml5 />
        <FaCss3 />
        <FaSass />
        <TbBrandFramerMotion />
        <TbBrandVscode />
        <SiEslint />
        <SiJira />
        <SiPrettier />
        <SiPassport />
        <SiTailwindcss />
        <SiJavascript />
        <SiNetlify />
        <SiWebpack />
        <FaNpm />
        <FaNodeJs />
        <SiMongodb />
        <SiMui />
        <SiDaisyui />
        <SiNextdotjs />
        <SiReact />
        <SiPostman />
        <FaGitlab />
        <FaDocker />
        <SiVite />
        <FaSlack />
      </div>
    </div>
  );
};

export default ToolkitBanner;
