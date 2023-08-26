'use client';
import React from 'react';

import CaseStudyTemplate from './CaseStudyTemplate';
import { projects } from '@/helper/content';
import PageWrapper from '@/components/PageWrapper';

const CaseStudyPage = ({ params }) => {
  const projectId = params.caseStudy;
  const searchedProject = projects.find((project) => project.id == projectId);
  return (
    <>
      <PageWrapper>
        <CaseStudyTemplate project={searchedProject} />;
      </PageWrapper>
    </>
  );
};

export default CaseStudyPage;
