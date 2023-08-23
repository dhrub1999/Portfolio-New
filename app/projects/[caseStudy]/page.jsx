import React from 'react';
import { projects } from '@/helper/content';
import CaseStudyTemplate from './CaseStudyTemplate';
const CaseStudyPage = ({ params }) => {
  const projectId = params.caseStudy;
  console.log(projectId)
  const searchedProject = projects.find((project) => project.id == projectId);
  return <CaseStudyTemplate project={searchedProject} />;
};

export default CaseStudyPage;
